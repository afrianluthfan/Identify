import React, { FC } from 'react';
import RunningText from '../../components/RunningText';

const About: FC = () => (
  <section
    id='about'
    className='grid h-[1000px] w-full grid-cols-2 items-center justify-evenly gap-14 p-14 align-middle'
  >
    <div className='relative h-full w-full overflow-hidden border border-black dark:border-white'>
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
    <div className='relative h-full w-full overflow-hidden border border-black dark:border-white'>
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
