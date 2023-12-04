import React, { FC } from 'react';

const Desc: FC = () => (
  <section className='flex items-center align-middle justify-center w-full h-[1080px] bg-white dark:bg-black'>
    <div className='grid grid-cols-4 grid-rows-2 w-full h-[1080px]'>
      <div className='border-[5px] border-l-0 col-span-2'>
        abc
      </div>
      <div className='border-[5px] border-l-0'>
        ghi
      </div>
      <div className='border-[5px] border-l-0 row-span-2'>
        jkl
      </div>
      <div className='border-[5px] border-l-0 border-t-0'>
        mno
      </div>
      <div className='border-[5px] border-l-0 border-t-0 col-span-2'>
        pqr
      </div>
    </div>
  </section>
);

export default Desc;
