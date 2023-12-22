import React, { FC } from 'react';
import Hero from './Hero';
import Desc from './Desc';
// import About from '@/components/sections/About';

const Landing: FC = () => (
  <main>
    <Hero />
    <Desc />
    {/* <About /> */}
  </main>
);

export default Landing;
