/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import React, { FC } from 'react';
import { Avatar, Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useToPng } from '@hugocxl/react-to-image';
import RunningText from '@/components/RunningText';
import { toast } from 'sonner';
import RadarChartComponent from './RadarChart';

const UserCard: FC = () => {
  const { data: session } = useSession();

  const waktu = new Date();

  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 1,
    onLoading() {
      toast.loading('Loading...');
    },
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = 'card.png';
      link.href = data;
      link.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const arrayText = Array(40).fill(`${session?.user?.name}`).join(' ');

  return (
    <>
      <div className='flex my-5'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Card
          ref={ref}
          className='w-[450px] sm:w-[1245px] h-[800px] sm:h-[600px]'
        >
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
          <CardHeader className='p-5'>
            <div className='flex'>
              <Avatar
                src={session?.user?.image ?? ''}
                size='lg'
                className='rounded-[100%] mr-5'
                isBordered
              />
              <p className='font-bold sm:text-[30px] text-[25px]'>
                {session?.user?.name}
              </p>
            </div>
          </CardHeader>
          <CardBody className='relative overflow-hidden flex'>
            <div className='flex flex-col sm:flex-row sm:justify-between'>
              <div className='border border-black dark:border-white -order-first sm:order-first flex items-center justify-center'>
                <p>Content</p>
              </div>
              <div className='sm:w-[600px] h-[400px] relative'>
                <div className='sm:w-[600px] h-[400px] bg-white bg-opacity-[10%] rounded-3xl sm:rounded-l-3xl backdrop-blur-lg'>
                  <RadarChartComponent />
                </div>
              </div>
            </div>
            <div className='absolute flex w-[93.5%] bottom-0 left-0 mx-10'>
              <div className='relative flex justify-between w-full'>
                {/* Issue Date */}
                <div className='flex font-bold text-xl w-96'>
                  Issued at{' '}
                  {waktu.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <div className='w-[175px] mb-3'>
                  <Image src='/wm-dark.svg' alt='wm' width={175} height={175} />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Button
          radius='sm'
          onClick={convert}
          type='button'
          className='w-[20%] h-12 mt-5 text-xl font-bold'
        >
          <p className='text-small sm:text-lg'> Obtain card</p>
        </Button>
      </div>
      <div className='flex my-5'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
    </>
  );
};

export default UserCard;
