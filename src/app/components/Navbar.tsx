import React, { FC } from 'react';
import Image from 'next/image';

const Navbar: FC = () => (
  <div className='flex flex-col justify-center w-screen h-8 absolute top-0'>
    <div className='flex mt-52 mx-20 h-16 justify-between items-center'>
      <div className='bg-white rounded-full w-20 h-20 items-center justify-center'>
        <Image
          src='https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg'
          alt='placeholder-logo'
          height={110}
          width={110}
          className='mt-2'
        />
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <div className='px-2 py-1 hover:bg-white h-full w-full rounded-md text-l font-bold text-center text-white hover:text-black'>
          About Us
        </div>
        <div className='px-2 py-1 hover:bg-white h-full w-full rounded-md text-l font-bold text-center text-white hover:text-black'>
          Contact Us
        </div>
        <div className='px-2 py-1 hover:bg-white h-full w-full rounded-md text-l font-bold text-center text-white hover:text-black'>
          FAQs
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
