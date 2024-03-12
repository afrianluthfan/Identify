import React, { FC } from 'react';
import Hero from '@/app/landing/Hero';
import Desc from '@/app/landing/Desc';

const Landing: FC = () => (
  <main className='overflow-x-hidden'>
    <Hero />
    <Desc />
  </main>
);

export default Landing;
