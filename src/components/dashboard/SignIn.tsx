'use client';

import React, { FC } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';

const SignIn: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const signInHandler = async (): Promise<void> => {
    try {
      const res = await signIn('spotify', { callbackUrl });

      if (!res?.error) {
        router.push(callbackUrl);
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return <Button onClick={signInHandler}>Sign in with Spotify</Button>;
};

export default SignIn;
