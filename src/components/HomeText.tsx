'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
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
    <div className='flex flex-col relative items-center justify-center h-full'>
      <motion.h1
        className='text-4xl sm:text-5xl font-bold mb-5 text-black dark:text-white'
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
        className='text-[12px] sm:text-l font-bold mb-8 block text-center text-black dark:text-white'
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
