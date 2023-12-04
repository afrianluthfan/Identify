'use client';

import React, { FC } from 'react';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HomeText: FC = () => {
  const gerak = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='flex flex-col relative items-center justify-center h-full'>
      <motion.h1
        className='text-5xl font-bold mb-5 text-black dark:text-white'
        variants={gerak}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 0,
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        &quot;Your <span style={{ color: '#07F468' }}>ID</span>, please.&quot;
      </motion.h1>
      <motion.p
        className='text-l font-bold mb-8 block whitespace-pre text-center text-black dark:text-white'
        variants={gerak}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 0.5,
          duration: 2,
          ease: 'easeOut',
        }}
      >
        Create your very own ID card with your Spotify profile picture, name,
        <br />
        and your top artists from the past few months.
      </motion.p>
      <motion.div
        className='flex items-center justify-center'
        variants={gerak}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 1,
          duration: 2,
          ease: 'easeOut',
        }}
      >
        <Button className='font-bold z-10' size='lg'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
            alt='spotify-icon'
            width={30}
            height={30}
          />
          Sign in with Spotify
        </Button>
      </motion.div>
    </div>
  );
};

export default HomeText;
