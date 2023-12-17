import React, { FC } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/authOptions';
import { Avatar, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import RunningText from '../RunningText';
import Test from './RadarChart';

const IdCard: FC = async () => {
  const session = await getServerSession(authOptions);
  const waktu = new Date();
  const isiRunningText = session?.user?.name;
  const arrayText = Array(40).fill(`${isiRunningText}`).join(' ');

  return (
    <section className='relative h-[700px] items-center justify-center'>
      <div className='flex my-5'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Card>
          <Image
            src='/pita-rainbow.png'
            alt='gay'
            height={600}
            width={1245}
            className='absolute blur-sm'
          />
          <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
          <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#8349FF] blur-[80px]' />
          <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#FFCDFF] blur-[80px]' />
          <div className='absolute bottom-[-30px] rounded-[100%] w-[600px] h-48 rotate-0 bg-[#0013FF] blur-[80px]' />
          <div className='absolute left-24 bottom-[-300px] rounded-[100%] w-96 h-96 rotate-90 bg-[#00FFFF] blur-3xl' />

          <CardBody className='grid grid-cols-6 p-8 w-[1245px] h-[600px] overflow-hidden'>
            <div className='col-span-2'>
              <div className='flex relative items-center border'>
                <Avatar
                  src={session?.user?.image ?? ''}
                  size='lg'
                  className='rounded-[100%] mr-5'
                  isBordered
                />
                <p className='font-bold text-xl'>{session?.user?.name}</p>
              </div>
              <div className='flex border font-bold mt-[120%] my-3 text-xl'>
                Issued at{' '}
                {waktu.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>
            <div className='col-span-4 grid grid-cols-3 grid-rows-2'>
              <div className='relative col-span-2 row-span-2 items-center text-center justify-center'>
                <Test />
              </div>
              <div className='relative text-xl'>
                <div className='absolute text-center font-bold justify-center items-center right-48 bottom-16'>
                  Happiness
                </div>
              </div>

              <div className='relative grid grid-cols-1 grid-rows-1 place-items-end'>
                <Image src='/wm-dark.svg' alt='wm' width={175} height={175} />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className='flex my-5'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
    </section>
  );
};

export default IdCard;
