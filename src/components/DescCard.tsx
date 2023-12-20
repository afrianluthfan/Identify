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
        <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
        <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#8349FF] blur-[80px]' />
        <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#FFCDFF] blur-[80px]' />
        <div className='absolute bottom-[-30px] rounded-[100%] w-[600px] h-48 rotate-0 bg-[#0013FF] blur-[80px]' />
        <div className='absolute left-24 bottom-[-300px] rounded-[100%] w-96 h-96 rotate-90 bg-[#00FFFF] blur-3xl' />
        <Image
          src='/pita-rainbow.png'
          alt='rainbow-ribbon'
          height={400}
          width={645}
          className='absolute blur-sm top-[-100px] left-0'
        />

        {/* Card Body */}
        <CardBody className='relative flex p-8 w-full h-full overflow-hidden items-center justify-center'>
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
