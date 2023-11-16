'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

const RunningText: FC = () => (
  <>
    <motion.div
      className='flex w-[200%] justify-evenly'
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        times: [0, 0.99, 1],
        duration: 90,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className='w-[100%] text-[10rem] font-bold mb-5 text-white text-left whitespace-nowrap'
        initial={{ x: '10%' }}
        animate={{ x: '-50%' }}
        transition={{
          delay: 0,
          duration: 90,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.div>
    </motion.div>

    <motion.div
      className='flex w-[200%] justify-evenly'
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        // delay: 5,
        times: [0, 0.9, 1],
        duration: 90,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className='w-[100%] text-[10rem] font-bold mb-5 text-white text-left whitespace-nowrap'
        initial={{ x: '-50%' }}
        animate={{ x: '6%' }}
        transition={{
          // delay: 5,
          duration: 90,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.div>
    </motion.div>

    <motion.div
      className='flex w-[200%] justify-evenly'
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        times: [0, 0.99, 1],
        duration: 90,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className='w-[100%] text-[10rem] font-bold mb-5 text-white text-left whitespace-nowrap'
        initial={{ x: '10%' }}
        animate={{ x: '-50%' }}
        transition={{
          delay: 0,
          duration: 90,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.div>
    </motion.div>
  </>
);

export default RunningText;
