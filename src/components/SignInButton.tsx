'use client';

import React, { FC } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

const SignInButton: FC = () => {
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

  return (
    <Button onClick={signInHandler} className='font-bold z-10' size='lg'>
      {' '}
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
        alt='spotify-icon'
        width={30}
        height={30}
      />
      Sign in with Spotify
    </Button>
  );
};

export default SignInButton;
