'use client';

import React, { FC, useRef } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HorCard: FC = () => {
  const gerak = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Create a ref and an animation control
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animationControl = useAnimation();

  // Start the animation when the element is in view
  if (isInView) {
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
      // Pass the ref to the motion component
      ref={ref}
    >
      <Card className='w-full h-full'>
        <CardBody className='flex items-center justify-center text-center'>
          <p className='text-5xl font-bold'>
            Generate your very own{' '}
            <span className='text-[#07F468]'>
              <br />
              &quot;Spotify ID card&quot;
              <br />
            </span>{' '}
            from your spotify data right now.
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default HorCard;
