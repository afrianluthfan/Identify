'use client';

/* eslint-disable max-len */
import React, { FC } from 'react';
import { X } from 'lucide-react';
import { cubicBezier, motion } from 'framer-motion';

const Line: FC = () => {
  const lineIn = {
    hidden: {
      y: 1000,
    },
    visible: {
      y: 500,
    },
  };

  const xIn = {
    hidden: {
      y: -500,
      opacity: 0,
      rotate: 0,
    },
    visible: {
      y: 500,
      opacity: 1,
      rotate: 720,
    },
  };

  return (
    <div className='flex flex-col items-center justify-center'>
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
        <X className='mb-2 ml-0' />
      </motion.div>

      <motion.div
        className='h-[60rem] w-[2px] bg-white stroke-white stroke-[10px]'
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
    </div>
  );
};

export default Line;
