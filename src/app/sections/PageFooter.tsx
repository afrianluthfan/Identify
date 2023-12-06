import React, { FC } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const PageFooter: FC = () => (
  <footer
    id='footer'
    className='flex items-center justify-between px-24 w-full h-56 border-t border-black dark:border-white bg-black/10 dark:bg-white/10'
  >
    <div className='pl-8 w-96 border-black dark:border-white border-l-1'>
      <p className='text-left font-extralight text-black dark:text-white'>
        A collaborative project by
        <br />
        <a className='font-medium' href='https://github.com/Aliezan'>
          Muhammad{' '}
          <span className='text-[#1d8d4c] dark:text-[#07F468]'>Alieza</span>{' '}
          Nuriman
        </a>
        <br />
        and
        <br />
        <a className='font-medium' href='https://github.com/afrianluthfan'>
          <span className='text-[#1d8d4c] dark:text-[#07F468]'>Afrian</span>{' '}
          Luthfan
        </a>
      </p>
    </div>
    <div className='pr-8'>
      <p className='font-bold mb-4 text-black dark:text-white'>
        Contact <span className='text-[#1d8d4c] dark:text-[#07F468]'>Us!</span>
      </p>
      <Link
        className='flex font-extralight my-1  text-black dark:text-white'
        href='https://github.com/Aliezan/spotify-generative-ai'
      >
        <Github className='mr-2' />
        Our&nbsp;
        <span className='font-medium text-[#1d8d4c] dark:text-[#07F468]'>
          GitHub repository
        </span>
        &nbsp;for this project
      </Link>
      <Link
        className='flex font-extralight my-1 text-black dark:text-white'
        href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'
      >
        <Linkedin className='mr-2' />
        Alieza&apos;s&nbsp;
        <span className='font-medium text-[#1d8d4c] dark:text-[#07F468]'>
          LinkedIn
        </span>
      </Link>
      <Link
        className='flex font-extralight my-1 text-black dark:text-white'
        href='https://www.linkedin.com/in/afrian-luthfan/'
      >
        <Linkedin className='mr-2' />
        Afrian&apos;s&nbsp;
        <span className='font-medium text-[#1d8d4c] dark:text-[#07F468]'>
          LinkedIn
        </span>
      </Link>
    </div>
  </footer>
);

export default PageFooter;
