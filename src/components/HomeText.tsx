'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { StretchPro } from '@/Font';
import SignInButton from './SignInButton';

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
    <div className='flex flex-col relative items-center justify-center h-full space-y-5'>
      <motion.h1
        className={`text-5xl text-black dark:text-white ${StretchPro.className}`}
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
        className='text-medium font-light block whitespace-pre text-center text-black dark:text-white'
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
        <SignInButton />
      </motion.div>
    </div>
  );
};

export default HomeText;
