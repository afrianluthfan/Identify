import React, { FC } from 'react';
import RunningText from '../../components/RunningText';

const About: FC = () => (
  <section
    id='about'
    className='grid grid-cols-2 gap-14 items-center align-middle justify-evenly w-full h-[1000px] p-14'
  >
    <div className='border border-black dark:border-white relative w-full h-full overflow-hidden'>
      <div className='absolute top-5'>
        <RunningText
          overflow='hidden'
          length='100%'
          text='Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan '
        />
      </div>
      <div className='absolute bottom-5'>
        <RunningText
          overflow='hidden'
          length='100%'
          text='Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan '
        />
      </div>
    </div>
    <div className='border border-black dark:border-white relative w-full h-full overflow-hidden'>
      <div className='absolute top-5'>
        <RunningText
          overflow='hidden'
          length='100%'
          text='Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan '
        />
      </div>
      <div className='absolute bottom-5'>
        <RunningText
          overflow='hidden'
          length='100%'
          text='Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan Afrian Luthfan '
        />
      </div>
    </div>
  </section>
);

export default About;
