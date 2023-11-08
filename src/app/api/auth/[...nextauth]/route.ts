import NextAuth from 'next-auth/next';
import { NextAuthOptions, SessionStrategy } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { JWT } from 'next-auth/jwt';
import axios from 'axios';

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    const basicAuth = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    ).toString('base64');
    
    const { data } = await axios.post(
      process.env.SPOTIFY_REFRESH_TOKEN_URL ?? '',
      {
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken,
      },
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
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: process.env.SPOTIFY_API_SCOPES ?? '',
        },
      },
    }),
  ],

  pages: {
    signIn: '/landing',
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          user,
        };
      }
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }
      const newToken = await refreshAccessToken(token);
      return newToken;
    },
    async session({ session, token }) {
      const updatedSession = {
        ...session,
        accessToken: token.accessToken,
        error: token.error,
        user: token.user,
      };
      return updatedSession;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
