import React, { FC } from 'react';
import Desc from '../sections/Desc';
import About from '../sections/About';
import Hero from '../sections/Hero';

const Landing: FC = () => (
  <main>
    <Hero />
    <Desc />
    <About />
  </main>
);

export default Landing;
