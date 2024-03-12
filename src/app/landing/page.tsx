import React, { FC } from 'react';
import Hero from '@/app/landing/Hero';
import Desc from '@/app/landing/Desc';
// import About from '@/components/sections/About';

const Landing: FC = () => (
  <main className='overflow-x-hidden'>
    <Hero />
    <Desc />
    {/* <About /> */}
  </main>
);

export default Landing;
