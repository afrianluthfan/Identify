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
    } catch (err) {
      throw new Error('An error occured during sign-in');
    }
  };

  return (
    <Button
      onClick={signInHandler}
      className='z-10 font-bold'
      size='lg'
      radius='sm'
    >
      {' '}
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
        alt='spotify-icon'
        width={30}
        height={30}
      />
      <p className='sm:text-md text-sm'>Sign in with Spotify</p>
    </Button>
  );
};

export default SignInButton;
