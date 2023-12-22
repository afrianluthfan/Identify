import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import HomeText from '../../components/HomeText';
import RunningText from '../../components/RunningText';

const Hero: FC = () => (
  <section
    id='home'
    className='h-[1080px] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'
  >
    <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
    <div className=' my-52'>
      <div className='mt-[100px]'>
        <HomeText />
        <Chip size='lg'>Chip</Chip>
      </div>
      <div className='mt-[275px]'>
        <RunningText
          length='100%'
          overflow='hidden'
          text='Hallo! Përshëndetje! Selam! Marhaba! Barev! Salam! Kaixo! Hyālō! Zdravo! Zdraveĭte! Haallo! Nǐ hǎo! Hola! Kamusta! Moni! Bonghjornu! Zdravo! Ahoj! Hej! Hallo! Hello! Tere! Hello! Salām! Bula! Kumusta! Hei! Bonjour! Dia dhuit! Ola! Gamarjoba! Guten tag! Geia! Mba’éichapa! Bonjou! Aloha! Shalom! Namaste! Nyob zoo! Szia! Halló! Ndewo! Hello! Halo! Ciao! Konnichiwa! Halo! Namaskāra! Salam! Hola! Kamusta! Moni! Bonghjornu! Zdravo! Ahoj! Hej! Hallo! Hello! Tere! Hello! Salām! Bula! Kumusta! Hei! Bonjour! Dia dhuit! Ola! Gamarjoba! Guten tag! Geia! Hallo! Përshëndetje! Selam! Marhaba! Barev! Salam! Kaixo! Hyālō! Zdravo! Zdraveĭte! Haallo! Nǐ hǎo! Hola! Kamusta! Moni! Bonghjornu! Zdravo! Ahoj! Hej! Hallo! Hello! Tere! Hello! Salām! Bula! Kumusta! Hei! Bonjour! Dia dhuit! Ola! Gamarjoba! Guten tag! Geia! Mba’éichapa! Bonjou! Aloha! Shalom! Namaste! Nyob zoo! Szia! Halló! Ndewo! Hello! Halo! Ciao! Konnichiwa! Halo! Namaskāra! Salam! Hola! Kamusta! Moni! Bonghjornu! Zdravo! Ahoj! Hej! Hallo! Hello! Tere! Hello! Salām! Bula! Kumusta! Hei! Bonjour! Dia dhuit! Ola! Gamarjoba! Guten tag! Geia!'
        />
      </div>
    </div>
  </section>
);

export default Hero;
