import React, { FC } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import PixelArt from '../PixelArt';

const Desc: FC = () => (
  <section
    id='desc'
    className='flex items-center align-middle justify-center w-full h-[1080px]'
  >
    <div className='grid grid-cols-4 grid-rows-2 w-full h-[1080px]'>
      <div className='flex items-center justify-center border-[2px] border-x-0 col-span-2 text-black border-black dark:border-white dark:text-white p-16'>
        <Card className='w-full h-full'>
          <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
          <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#8349FF] blur-[80px]' />
          <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#FFCDFF] blur-[80px]' />
          <div className='absolute bottom-[-30px] rounded-[100%] w-[600px] h-48 rotate-0 bg-[#0013FF] blur-[80px]' />
          <div className='absolute left-24 bottom-[-300px] rounded-[100%] w-96 h-96 rotate-90 bg-[#00FFFF] blur-3xl' />
          <Image
            src='/pita-rainbow.png'
            alt='rainbow-ribbon'
            height={400}
            width={645}
            className='absolute blur-sm top-[-100px] left-0'
          />

          {/* Card Body */}
          <CardBody className='relative flex p-8 w-full h-full overflow-hidden items-center justify-center'>
            {/* Watermark */}
            <div className='flex'>
              <Image src='/logo.svg' alt='wm' width={270} height={270} />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 text-black border-black dark:border-white dark:text-white p-16'>
        <h4 className='text-5xl font-bold'>Identify</h4>
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 row-span-2 text-black border-black dark:border-white dark:text-white p-16'>
        <Card className='w-full h-full'>
          <CardBody className='flex items-center justify-center text-center'>
            <p className='text-5xl font-bold'>
              Generate <br />
              your very <br /> own <br />
              <span className='text-[#07F468]'>playlists</span> <br />
              based on <br />
              <span className='text-[#07F468]'>Spotify&apos;s</span> <br />
              algorithm.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className='flex relative border-[2px] border-l-0 border-t-0 border-r-0 text-black border-black dark:border-white dark:text-white p-16'>
        <div className='absolute right-[-10px] top-16'>
          <PixelArt />
        </div>
      </div>
      <div className='flex items-center justify-center border-[2px] border-l-0 border-t-0 col-span-2 text-black border-black dark:border-white dark:text-white p-16'>
        <Card className='w-full h-full'>
          <CardBody className='flex items-center justify-center text-center'>
            <p className='text-5xl font-bold'>
              Generate your very own{' '}
              <span className='text-[#07F468]'>
                <br />
                &quot;Spotify ID card&quot;
                <br />
              </span>{' '}
              from your spotify data right now.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
);

export default Desc;
