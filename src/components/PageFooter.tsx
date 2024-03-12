import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import Logo from './Logo';

const PageFooter: FC = () => (
  <footer className='mt-3 flex h-[120px] w-full items-center justify-center'>
    <div className='flex w-full flex-col justify-between gap-x-[50px] p-[30px] sm:gap-x-[100px] sm:p-[60px] md:flex-row'>
      <div className='flex w-full flex-col md:flex-row md:gap-8'>
        <div className='w-[200px]'>
          <Logo />
          <p className='mt-1 text-tiny'>Identify your musical affinities</p>
          <Link
            className={`${buttonVariants({
              variant: 'outline',
            })} mt-4 text-tiny`}
            href='https://github.com/Aliezan/identify'
          >
            <div className='mr-2 dark:hidden'>
              <Image src='./github-mark.svg' height={15} width={15} alt='gh' />
            </div>
            <div className='mr-2 hidden dark:block'>
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
        <div className='xs:mt-8 flex gap-10'>
          <div>
            <p className='text-small text-black/60 dark:text-white/60'>About</p>
            <div className='mt-2 space-y-1'>
              <Link className='block text-tiny hover:underline' href='/about'>
                About
              </Link>
            </div>
          </div>
          <div>
            <p className='text-small text-black/60 dark:text-white/60'>
              Support
            </p>
            <div className='mt-2 space-y-1'>
              <Link className='block text-tiny hover:underline' href='/about'>
                Buy us a coffee
              </Link>
              <Link className='block text-tiny hover:underline' href='/privacy'>
                Inquiries
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 min-w-[180px] space-y-3 justify-self-end text-left md:text-right'>
        <p className='text-tiny text-black/60 dark:text-white/60'>
          &copy; 2023 all rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default PageFooter;
