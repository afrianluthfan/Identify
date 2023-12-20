import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import HomeText from '../HomeText';
import RunningText from '../RunningText';

const Hero: FC = () => (
  <section
    id='home'
    className='flex items-center align-middle justify-center h-[1080px]'
  >
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
