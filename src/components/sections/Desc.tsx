import React, { FC } from 'react';

const Desc: FC = () => (
  <section
    id='desc'
    className='flex items-center align-middle justify-center w-full h-[1080px]'
  >
    <div className='grid grid-cols-4 grid-rows-2 w-full h-[1080px]'>
      <div className='flex items-center justify-center border-[2px] border-l-0 col-span-2 text-black border-black dark:border-white dark:text-white'>
        abc
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 text-black border-black dark:border-white dark:text-white'>
        ghi
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 row-span-2 text-black border-black dark:border-white dark:text-white'>
        jkl
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 border-t-0 text-black border-black dark:border-white dark:text-white'>
        mno
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 border-t-0 col-span-2 text-black border-black dark:border-white dark:text-white'>
        pqr
      </div>
    </div>
  </section>
);

export default Desc;
