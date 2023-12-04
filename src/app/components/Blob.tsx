'use client';

import { FC, useEffect, useState } from 'react';
import { motion, useTransform, useAnimation, useTime } from 'framer-motion';

interface BlobProps {
  className?: string;
}

const Blob: FC<BlobProps> = ({ className }) => {
  // Function to generate a random value between min and max
  const getRandomValue = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // loc setter
  const [top1, setTop1] = useState<number>(getRandomValue(0, 100));
  const [left1, setLeft1] = useState<number>(getRandomValue(0, 100));

  const [top2, setTop2] = useState<number>(getRandomValue(0, 100));
  const [left2, setLeft2] = useState<number>(getRandomValue(0, 100));

  const [top3, setTop3] = useState<number>(getRandomValue(0, 100));
  const [left3, setLeft3] = useState<number>(getRandomValue(0, 100));

  const [top4, setTop4] = useState<number>(getRandomValue(0, 100));
  const [left4, setLeft4] = useState<number>(getRandomValue(0, 100));

  // opacity setter
  const [, setOpacity1] = useState<number>(0);
  const [, setOpacity2] = useState<number>(0);
  const [, setOpacity3] = useState<number>(0);
  const [, setOpacity4] = useState<number>(0);

  // decay setter
  const [, setDecay1] = useState<number>(0);
  const [, setDecay2] = useState<number>(0);
  const [, setDecay4] = useState<number>(0);

  // visibility setter
  const [isVisible, setIsVisible] = useState(true);

  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], {
    clamp: false,
  });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  // use effect 1
  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);
      const changeLoc = async () => {
        setTop1(newTop);
        setLeft1(newLeft);
      };

      const opacityRand = getRandomValue(0.2, 1);
      setOpacity1(opacityRand);

      const decayRand = getRandomValue(0.5, 1);
      setDecay1(decayRand);

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

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    const intervalId = setInterval(animate, 2000);
    return () => clearInterval(intervalId);
  }, [controls, isVisible]);

  // use effect 2
  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);
      const changeLoc = async () => {
        setTop2(newTop);
        setLeft2(newLeft);
      };

      const opacityRand = getRandomValue(0.2, 1);
      setOpacity2(opacityRand);

      const decayRand = getRandomValue(0.5, 1);
      setDecay2(decayRand);

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

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    const intervalId = setInterval(animate, 3050);
    return () => clearInterval(intervalId);
  }, [isVisible, controls2]);

  // use effect 3
  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);
      const changeLoc = async () => {
        setTop3(newTop);
        setLeft3(newLeft);
      };

      const opacityRand = getRandomValue(0.2, 1);
      setOpacity3(opacityRand);

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

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    const intervalId = setInterval(animate, 2750);
    return () => clearInterval(intervalId);
  }, [isVisible, controls3]);

  // use effect 4
  useEffect(() => {
    const animate = async () => {
      const newTop = getRandomValue(0, 100);
      const newLeft = getRandomValue(0, 100);
      const changeLoc = async () => {
        setTop4(newTop);
        setLeft4(newLeft);
      };

      const opacityRand = getRandomValue(0.2, 1);
      setOpacity4(opacityRand);

      const decayRand = getRandomValue(0.5, 1);
      setDecay4(decayRand);

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

      await enterAnimation();
      await exitAnimation();
      await changeLoc();
    };

    const intervalId = setInterval(animate, 3000);
    return () => clearInterval(intervalId);
  }, [isVisible, controls4]);

  // timer buat hide blob
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
          top: `${top1}vh`,
          left: `${left1}vw`,
        }}
        className={className}
      />

      <motion.div
        animate={controls2}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#9130AD',
          top: `${top2}vh`,
          left: `${left2}vw`,
        }}
        className={className}
      />

      <motion.div
        animate={controls3}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#3077AD',
          top: `${top3}vh`,
          left: `${left3}vw`,
        }}
        className={className}
      />

      <motion.div
        animate={controls4}
        style={{
          opacity: 0,
          rotate,
          width: '150px',
          height: '150px',
          background: '#30AD39',
          top: `${top4}vh`,
          left: `${left4}vw`,
        }}
        className={className}
      />
    </>
  );
};

export default Blob;
