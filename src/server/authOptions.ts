import { JWT } from 'next-auth/jwt';
import axios from 'axios';
import { NextAuthOptions, SessionStrategy } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    const basicAuth = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    ).toString('base64');

    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', token.refreshToken as string);

    const { data } = await axios.post(
      process.env.SPOTIFY_REFRESH_TOKEN_URL ?? '',
      params.toString(),
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.error('RefreshAccessTokenError:', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: process.env.SPOTIFY_API_SCOPES ?? '',
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[1]?.url,
          country: profile.country,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 60 * 60, // 1 hour
  },
  pages: {
    signIn: '/landing',
  },
  callbacks: {
    async jwt({ token, account, user, profile }) {
      try {
        if (account && user && profile) {
          return {
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            accessTokenExpires: account.expires_at
              ? account.expires_at * 1000
              : 0,
            user: {
              ...user,
              country: profile.country,
            },
          };
        }

        if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
          return token;
        }

        return await refreshAccessToken(token);
      } catch (error) {
        console.error('JWT callback error:', error);
        return {
          ...token,
          error: 'JWT callback error',
        };
      }
    },
    async session({ session, token }) {
      try {
        return {
          ...session,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          error: token.error,
          user: token.user,
        };
      } catch (error) {
        console.error('Session callback error:', error);
        return session;
      }
    },
  },
};
