'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import AnimatedIcon from './AnimatedIcon';

const Navbar: FC = () => {
  const gerak = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='flex flex-col justify-center w-screen h-8 absolute top-0'>
      <div className='flex mt-52 mx-20 h-16 justify-between items-center'>
        <div className='relative bg-none rounded-full w-20 h-20 items-center justify-center'>
          <AnimatedIcon />
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <motion.div
            className='px-2 py-1 hover:bg-white h-full w-full rounded-md text-l font-bold text-center text-white hover:text-black'
            variants={gerak}
            initial='hidden'
            animate='visible'
            transition={{
              delay: 0,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            About Us
          </motion.div>
          <motion.div
            className='px-2 py-1 hover:bg-white h-full w-full rounded-md text-l font-bold text-center text-white hover:text-black'
            variants={gerak}
            initial='hidden'
            animate='visible'
            transition={{
              delay: 0.2,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            Contact Us
          </motion.div>
          <motion.div
            className='px-2 py-1 hover:bg-white h-full w-full rounded-md text-l font-bold text-center text-white hover:text-black'
            variants={gerak}
            initial='hidden'
            animate='visible'
            transition={{
              delay: 0.4,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            FAQs
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
