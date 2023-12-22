import React, { FC } from 'react';
import PixelArt from '../../components/PixelArt';
import DescCard from '../../components/DescCard';
import IdentifyText from '../../components/IdentifyText';
import VertCard from '../../components/VertCard';
import HorCard from '../../components/HorCard';

const Desc: FC = () => (
  <section
    id='desc'
    className='flex items-center align-middle justify-center w-full h-[1080px]'
  >
    <div className='grid grid-cols-4 grid-rows-2 w-full h-[1080px]'>
      <div className='flex items-center justify-center border-[2px] border-x-0 col-span-2 text-black border-black dark:border-white dark:text-white p-16'>
        <DescCard />
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 text-black border-black dark:border-white dark:text-white p-16'>
        <IdentifyText />
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 row-span-2 text-black border-black dark:border-white dark:text-white p-16'>
        <VertCard />
      </div>
      <div className='flex relative border-[2px] border-l-0 border-t-0 border-r-0 text-black border-black dark:border-white dark:text-white p-16'>
        <div className='absolute right-[-10px] top-16'>
          <PixelArt />
        </div>
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 border-t-0 col-span-2 text-black border-black dark:border-white dark:text-white p-16'>
        <HorCard />
      </div>
    </div>
  </section>
);

export default Desc;
