'use client';

/* eslint-disable max-len */
import React, { FC } from 'react';
import { X } from 'lucide-react';
import { cubicBezier, motion } from 'framer-motion';

const LineInverse: FC = () => {
  const lineIn = {
    hidden: {
      y: '-200%',
    },
    visible: {
      y: '-104%',
    },
  };

  const xIn = {
    hidden: {
      y: '200%',
      opacity: 0,
      rotate: 0,
    },
    visible: {
      y: '-3100%',
      opacity: 1,
      rotate: 720,
    },
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        className='bg-white w-[2px] h-[60rem] stroke-white stroke-[10px]'
        // tailwind ini cuma styling garis, ga termasuk positioning. positioning diatur di bagian page.tsx
        variants={lineIn}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 1,
          duration: 2,
          ease: cubicBezier(0.9, 0, 0.2, 1),
        }}
      />

      <motion.div
        variants={xIn}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 1,
          duration: 2,
          ease: cubicBezier(0.9, 0, 0.2, 1),
        }}
      >
        <X className='ml-0 mb-2' />
      </motion.div>
    </div>
  );
};

export default LineInverse;
