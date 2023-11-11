'use client';

import { FC, useEffect, useState } from 'react';
import { motion, useTransform, useAnimation, useTime } from 'framer-motion';

interface BlobProps {
  children: React.ReactNode;
}

const Blob: FC<BlobProps> = ({ children }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], {
    clamp: false,
  });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  // Function to generate a random value between min and max
  const getRandomValue = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);

      const opacityRand = getRandomValue(0.2, 1);
      const decayRand = getRandomValue(0.5, 1);

      const enterAnimation = async () => {
        await controls.start({ opacity: 0, scale: 0.5 });
        await controls.start({ opacity: opacityRand, scale: 2.5 });
      };

      const exitAnimation = async () => {
        await controls.start({
          opacity: opacityRand,
          scale: 2.5,
          transition: { duration: decayRand },
        });
        await controls.start({ opacity: 0, scale: 0.5 });
      };

      const changeLoc = async () => {
        await controls.start({
          top: `${newTop}vh`,
          left: `${newLeft}vw`,
        });
      };

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    animate();

    setInterval(animate, 2000);
  }, [isVisible, controls]);

  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);

      const opacityRand = getRandomValue(0.2, 1);
      const decayRand = getRandomValue(0.5, 1);

      const enterAnimation = async () => {
        await controls2.start({ opacity: 0, scale: 0.5 });
        await controls2.start({ opacity: opacityRand, scale: 3.3 });
      };

      const exitAnimation = async () => {
        await controls2.start({
          opacity: opacityRand,
          scale: 3.3,
          transition: { duration: decayRand },
        });
        await controls2.start({ opacity: 0, scale: 0.5 });
      };

      const changeLoc = async () => {
        await controls2.start({
          top: `${newTop}vh`,
          left: `${newLeft}vw`,
        });
      };

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    animate();

    setInterval(animate, 3050);
  }, [isVisible, controls2]);

  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);

      const opacityRand = getRandomValue(0.2, 1);

      const enterAnimation = async () => {
        await controls3.start({ opacity: 0, scale: 0.5 });
        await controls3.start({ opacity: opacityRand, scale: 2 });
      };

      const exitAnimation = async () => {
        await controls3.start({
          opacity: opacityRand,
          scale: 2,
          transition: { duration: 0.5 }, // gaperlu dirandom, ntar jadi bug aowkeoakew
        });
        await controls3.start({ opacity: 0, scale: 2 });
      };

      const changeLoc = async () => {
        await controls3.start({
          top: `${newTop}vh`,
          left: `${newLeft}vw`,
        });
      };

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    animate();

    setInterval(animate, 2750);
  }, [isVisible, controls3]);

  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);

      const opacityRand = getRandomValue(0.2, 1);
      const decayRand = getRandomValue(0.5, 1);

      const enterAnimation = async () => {
        await controls4.start({ opacity: 0, scale: 0.5 });
        await controls4.start({ opacity: opacityRand, scale: 3.3 });
      };

      const exitAnimation = async () => {
        await controls4.start({
          opacity: opacityRand,
          scale: 3.3,
          transition: { duration: decayRand },
        });
        await controls4.start({ opacity: 0, scale: 0.5 });
      };

      const changeLoc = async () => {
        await controls4.start({
          top: `${newTop}vh`,
          left: `${newLeft}vw`,
        });
      };

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    animate();

    setInterval(animate, 3000);
  }, [isVisible, controls4]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <>
      <motion.div
        animate={controls}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#AD308D',
          top: `${getRandomValue(0, 100)}vh`,
          left: `${getRandomValue(0, 100)}vw`,
        }}
        className='rounded-[30%] z-0 absolute blur-[80px]'
      />

      <motion.div
        animate={controls2}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#9130AD',
          top: `${getRandomValue(0, 100)}vh`,
          left: `${getRandomValue(0, 100)}vw`,
        }}
        className='rounded-[30%] z-0 absolute blur-[80px]'
      />

      <motion.div
        animate={controls3}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#3077AD',
          top: `${getRandomValue(0, 100)}vh`,
          left: `${getRandomValue(0, 100)}vw`,
        }}
        className='rounded-[30%] z-0 absolute blur-[80px]'
      />

      <motion.div
        animate={controls4}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#30AD39',
          top: `${getRandomValue(0, 100)}vh`,
          left: `${getRandomValue(0, 100)}vw`,
        }}
        className='rounded-[30%] z-0 absolute blur-[80px]'
      />

      {children}
    </>
  );
};

export default Blob;
