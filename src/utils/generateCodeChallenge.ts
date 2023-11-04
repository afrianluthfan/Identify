function generateCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);

  return crypto.subtle.digest('SHA-256', data).then((hash) => {
    const base64 = btoa(String.fromCharCode(...new Uint8Array(hash)));
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  });
}

export default generateCodeChallenge;
