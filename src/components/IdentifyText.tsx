'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card } from '@nextui-org/react';
import Image from 'next/image';

const IdentifyText: FC = () => {
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

  const ref = useRef(null);
  const inView = useInView(ref);
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start('visible');
  }

  return (
    <motion.div
      className='h-full w-full text-5xl font-bold'
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
      <Card className='flex h-full w-full items-center justify-center p-3'>
        <div className='w-fill relative aspect-[1/1] max-w-[200px] '>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
            alt='spotify-icon'
            height={100}
            width={100}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default IdentifyText;
