import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import Logo from './Logo';

const PageFooter: FC = () => (
  <footer className='flex h-[120px] w-full items-center justify-center'>
    <div className='w-full flex gap-[100px] p-[60px] ml-[40px]'>
      <div>
        <Logo />
        <p className='text-tiny mt-1'>Identify your musical affinities</p>
        <Link
          className={`${buttonVariants({
            variant: 'outline',
          })} mt-4 text-tiny`}
          href='https://github.com/Aliezan/identify'
        >
          <div className='dark:hidden mr-2'>
            <Image src='./github-mark.svg' height={15} width={15} alt='gh' />
          </div>
          <div className='hidden dark:block mr-2'>
            <Image
              src='./github-mark-white.svg'
              height={15}
              width={15}
              alt='gh'
            />
          </div>
          GitHub Repository
        </Link>
      </div>
      <div className='flex gap-10'>
        <div>
          <p className='text-small dark:text-white/60 text-black/60'>About</p>
          <div className='mt-2 space-y-1'>
            <Link className='hover:underline block text-tiny' href='/about'>
              About this app
            </Link>
            <Link className='hover:underline text-tiny block' href='/privacy'>
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          <p className='text-small dark:text-white/60 text-black/60'>Support</p>
          <div className='mt-2 space-y-1'>
            <Link className='hover:underline block text-tiny' href='/about'>
              Buy us a coffee
            </Link>
            <Link className='hover:underline text-tiny block' href='/privacy'>
              Inquiries
            </Link>
          </div>
        </div>
      </div>

      <div className='space-y-3 mt-10 ml-[610px]'>
        <p className='dark:text-white/60 text-black/60 text-tiny'>
          &copy; 2023 all rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default PageFooter;
