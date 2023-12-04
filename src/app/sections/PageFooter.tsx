import React, { FC } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const PageFooter: FC = () => (
  <footer className='flex items-center justify-between px-24 w-full h-56 border-t bg-white/10'>
    <div className='pl-8 w-96 border-l-1'>
      <p className='text-left font-extralight'>
        A collaborative project by
        <br />
        <a className='font-medium' href='https://github.com/Aliezan'>
          Muhammad <span style={{ color: '#07F468' }}>Alieza</span> Nuriman
        </a>
        <br />
        and
        <br />
        <a className='font-medium' href='https://github.com/afrianluthfan'>
          <span style={{ color: '#07F468' }}>Afrian</span> Luthfan
        </a>
      </p>
    </div>
    <div>
      <p className='font-bold mb-4'>
        Contact <span style={{ color: '#07F468' }}>Us!</span>
      </p>
      <Link
        className='flex font-extralight my-1'
        href='https://github.com/Aliezan/spotify-generative-ai'
      >
        <Github className='mr-2' />
        Our&nbsp;
        <span className='font-medium' style={{ color: '#07F468' }}>
          GitHub repository
        </span>
        &nbsp;for this project
      </Link>
      <Link
        className='flex font-extralight my-1'
        href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'
      >
        <Linkedin className='mr-2' />
        Alieza&apos;s&nbsp;
        <span className='font-medium' style={{ color: '#07F468' }}>
          LinkedIn
        </span>
      </Link>
      <Link
        className='flex font-extralight my-1'
        href='https://www.linkedin.com/in/afrian-luthfan/'
      >
        <Linkedin className='mr-2' />
        Afrian&apos;s&nbsp;
        <span className='font-medium' style={{ color: '#07F468' }}>
          LinkedIn
        </span>
      </Link>
    </div>
  </footer>
);

export default PageFooter;
