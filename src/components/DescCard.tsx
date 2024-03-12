'use client';

import React, { FC, useRef } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

const DescCard: FC = () => {
  const gerak = {
    hidden: {
      x: -50,
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
      <Card className='h-full w-full p-4'>
        <div className='absolute right-[-500px] h-[300px] w-[750px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
        <div className='absolute bottom-[-500px] left-64 h-[750px] w-[900px] rotate-[-10deg] rounded-[100%] bg-[#8349FF] blur-[80px]' />
        <div className='absolute bottom-[-350px] right-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#FFCDFF] blur-[80px]' />
        <div className='absolute bottom-[-30px] h-48 w-[600px] rotate-0 rounded-[100%] bg-[#0013FF] blur-[80px]' />
        <div className='absolute bottom-[-300px] left-24 h-96 w-96 rotate-90 rounded-[100%] bg-[#00FFFF] blur-3xl' />
        <Image
          src='/pita-rainbow.png'
          alt='rainbow-ribbon'
          height={400}
          width={645}
          className='absolute left-0 top-[-100px] blur-sm'
        />

        {/* Card Body */}
        <CardBody className='relative flex h-full w-full items-center justify-center overflow-hidden p-8'>
          {/* Watermark */}
          <div className='flex'>
            <Image src='/logo.svg' alt='wm' width={270} height={270} />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default DescCard;
