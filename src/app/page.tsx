'use client';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

const Home = () => {
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

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen'>
        <motion.h1
          className='text-5xl font-bold mb-5 text-white'
          variants={gerak}
          initial='hidden'
          animate='visible'
          transition={{
            delay: 0,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          Uncover your musical aura
        </motion.h1>
        <motion.p
          className='text-l mb-8 block whitespace-pre text-center text-white'
          variants={gerak}
          initial='hidden'
          animate='visible'
          transition={{
            delay: 0.5,
            duration: 2,
            ease: 'easeOut',
          }}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu
          <br />
          lorem et ultricies. In porta lorem at dui semper porttitor. Nullam
          quis
        </motion.p>
        <motion.div
          className='flex items-center justify-center'
          variants={gerak}
          initial='hidden'
          animate='visible'
          transition={{
            delay: 1,
            duration: 2,
            ease: 'easeOut',
          }}
        >
          <Button className='font-bold' size='lg'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
              alt='spotify-icon'
              width={30}
              height={30}
            />
            Sign in with Spotify
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
