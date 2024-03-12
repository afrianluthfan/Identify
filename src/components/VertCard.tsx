'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardBody } from '@nextui-org/react';

const VertCard: FC = () => {
  const gerak = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start('visible');
  }

  return (
    <motion.div
      className='h-full w-full'
      variants={gerak}
      initial='hidden'
      animate={animationControl}
      transition={{
        delay: 0,
        duration: 2,
        ease: 'easeInOut',
      }}
      ref={ref}
    >
      <Card>
        <CardBody className='flex items-center justify-center p-5 text-center sm:p-0'>
          <p className='text-xl font-bold sm:text-5xl'>
            Generate your very own{' '}
            <span className='text-[#07F468]'>playlists</span> based on <br />
            <span className='text-[#07F468]'>Spotify&apos;s</span> algorithm.
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default VertCard;
