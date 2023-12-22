import React, { FC } from 'react';
import PixelArt from '../PixelArt';
import DescCard from '../DescCard';
import IdentifyText from '../IdentifyText';
import VertCard from '../VertCard';
import HorCard from '../HorCard';

const Desc: FC = () => (
  <section
    id='desc'
    className='flex sm:items-center align-middle justify-center w-full sm:h-[1080px] h-auto sm:mb-0 mb-12'
  >
    <div className='flex flex-col sm:grid sm:grid-cols-4 sm:grid-rows-2 w-full sm:h-[1080px] h-auto sm:pt-0 pt-16'>
      <div className='flex items-center justify-center border-[2px] sm:border-none sm:border border-x-0 border-b-0 sm:col-span-2 text-black border-black dark:border-white dark:text-white p-8 '>
        <DescCard />
      </div>
      <div className='flex items-center justify-center sm:border-none sm:border-l-0 text-black border-black dark:border-white dark:text-white p-8'>
        <IdentifyText />
      </div>
      <div className='flex items-center justify-center sm:border-none sm:border-l-0 sm:row-span-2 text-black border-black dark:border-white dark:text-white p-8'>
        <VertCard />
      </div>
      <div className='flex relative sm:border-none sm:border-l-0 sm:border-t-0 sm:border-r-0 text-black border-black dark:border-white dark:text-white p-8'>
        <div className='absolute right-[-10px] top-16'>
          <PixelArt />
        </div>
      </div>
      <div className='flex items-center justify-center sm:border-none sm:border-l-0 sm:border-t-0 border-b col-span-2 text-black border-black dark:border-white dark:text-white p-8'>
        <HorCard />
      </div>
    </div>
  </section>
);

export default Desc;
