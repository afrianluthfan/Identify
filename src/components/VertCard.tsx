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
      className='w-full h-full'
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
      <Card className='w-full h-full'>
        <CardBody className='flex items-center justify-center text-center p-10 sm:p-0'>
          <p className='sm:text-5xl text-3xl font-bold'>
            Generate <br />
            your very <br /> own <br />
            <span className='text-[#07F468]'>playlists</span> <br />
            based on <br />
            <span className='text-[#07F468]'>Spotify&apos;s</span> <br />
            algorithm.
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default VertCard;
