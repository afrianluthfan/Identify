'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { PageProps } from '../../../.next/types/app/layout';

interface RunningTextProps extends PageProps {
  length?: string;
  overflow?: string;
  text?: string;
}

const RunningText: FC<RunningTextProps> = ({ length, overflow, text }) => (
  <motion.div
    className={`flex relative border-black dark:border-white border-y-1 w-[${length}] overflow-${overflow}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0,
      duration: 3,
      ease: 'linear',
    }}
  >
    <motion.div
      className='flex w-full justify-evenly'
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        times: [0, 0.005, 0.995, 1],
        duration: 30,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className='w-[100%] text-[2rem] font-bold text-left whitespace-nowrap text-black dark:text-white'
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          delay: 0,
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  </motion.div>
);

export default RunningText;
