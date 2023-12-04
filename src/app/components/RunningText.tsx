'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

const RunningText: FC = () => (

  <motion.div
    className='flex relative border-black dark:border-white border-y-1 w-[1920px]'
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        pellentesque dapibus est, nec aliquet ipsum efficitur at. Suspendisse
        dictum ullamcorper massa id luctus. Integer vitae erat pulvinar, euismod
        risus in, bibendum odio. Ut ligula tortor, facilisis ac ipsum vitae,
        varius tristique neque. Mauris ut rhoncus odio. Nam ultricies, velit
        blandit fermentum aliquam, nisi nisl viverra felis, ac pharetra diam mi
        ultricies sem. Integer convallis est nec lacus auctor pretium. Curabitur
        vestibulum ligula a velit bibendum interdum. Duis neque sem, blandit nec
        enim et, tincidunt consectetur elit. Sed at sodales metus. Duis dictum
        in ligula vel facilisis. In porta aliquam purus sit amet suscipit. Cras
        quis facilisis neque. Morbi lectus massa, mattis vitae sagittis ut,
        gravida a nibh. Suspendisse quis eros cursus purus hendrerit cursus at
        sed risus. Phasellus iaculis ante id nunc pharetra, vel dapibus eros
        ultrices. Aliquam mollis sed nisl nec pellentesque. Morbi vehicula velit
        augue, nec et.
      </motion.div>
    </motion.div>
  </motion.div>
);

export default RunningText;
