import React, { FC } from 'react';
import PixelArt from '../../components/PixelArt';
import DescCard from '../../components/DescCard';
import IdentifyText from '../../components/IdentifyText';
import VertCard from '../../components/VertCard';
import HorCard from '../../components/HorCard';

const Desc: FC = () => (
  <section
    id='desc'
    className='flex h-[900px] w-full justify-center overflow-y-clip align-middle sm:mb-0 sm:items-center'
  >
    <div className='flex h-auto w-full flex-col gap-3 sm:grid sm:grid-cols-4 sm:grid-rows-2 md:mb-16'>
      <div className='flex items-center justify-center border-x-0 border-b-0 border-black px-8 text-black dark:border-white dark:text-white sm:col-span-2 sm:border sm:border-none '>
        <DescCard />
      </div>
      <div className='flex items-center justify-center border-black px-8 text-black dark:border-white dark:text-white sm:border-l-0 sm:border-none'>
        <IdentifyText />
      </div>
      <div className='flex items-center justify-center border-black px-8 text-black dark:border-white dark:text-white sm:row-span-2 sm:border-l-0 sm:border-none'>
        <VertCard />
      </div>
      <div className='relative hidden border-black px-8 text-black dark:border-white dark:text-white sm:block sm:border-l-0 sm:border-r-0 sm:border-t-0 sm:border-none md:flex'>
        <div className='absolute right-[-10px] top-16'>
          <PixelArt />
        </div>
      </div>
      <div className='col-span-2 flex items-center justify-center px-8 text-black dark:border-white dark:text-white sm:border-l-0 sm:border-t-0 sm:border-none'>
        <HorCard />
      </div>
    </div>
  </section>
);

export default Desc;
