import { NextResponse } from 'next/server';
import generateCodeChallenge from './utils/generateCodeChallenge';
import generateCodeVerifier from './utils/generateCodeVerifier';

export function middleware() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  if (!clientId) {
    throw new Error('SPOTIFY_CLIENT_ID is not set');
  }

  const verifier = generateCodeVerifier(128);
  return generateCodeChallenge(verifier).then((challenge) => {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('response_type', 'code');
    params.append('redirect_uri', 'http://localhost:3000/callback');
    params.append('scope', 'user-read-private user-read-email');
    params.append('code_challenge_method', 'S256');
    params.append('code_challenge', challenge);

    const redirectResponse = NextResponse.redirect(
      `https://accounts.spotify.com/authorize?${params.toString()}`,
    );

    // Set verifier in cookies
    redirectResponse.cookies.set('verifier', verifier);

    return redirectResponse;
  });
}

export const config = { matcher: ['/'] };
