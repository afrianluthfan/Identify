import React, { FC } from 'react';
import HomeText from '../components/HomeText';
import RunningText from '../components/RunningText';

const Hero: FC = () => (
  <section className='flex items-center align-middle justify-center h-[1080px] bg-white dark:bg-black'>
    <div className=' my-52'>
      <div className='mt-[100px]'>
        <HomeText />
      </div>
      <div className='mt-[275px]'>
        <RunningText />
      </div>
    </div>
  </section>
);

export default Hero;
