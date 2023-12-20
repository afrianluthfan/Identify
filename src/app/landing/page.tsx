import React, { FC } from 'react';
import Hero from '@/components/sections/Hero';
import Desc from '@/components/sections/Desc';
// import About from '@/components/sections/About';

const Landing: FC = () => (
  <main>
    <Hero />
    <Desc />
    {/* <About /> */}
  </main>
);

export default Landing;
