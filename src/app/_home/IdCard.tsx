import React, { FC } from 'react';
import { getServerSession } from 'next-auth';
import { Avatar, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { authOptions } from '@/server/authOptions';
import RunningText from '@/components/RunningText';
import RadarChartComponent from './RadarChart';

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
        {/* Card */}
        <Card>
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
          <CardBody className='relative flex p-8 w-[1245px] h-[600px] overflow-hidden'>
            <div className='flex'>
              {/* Avatar and Username */}
              <div className='flex relative items-center'>
                <Avatar
                  src={session?.user?.image ?? ''}
                  size='lg'
                  className='rounded-[100%] mr-5'
                  isBordered
                />
              </div>
            </div>
            {/* Nama user */}
            <div className='absolute flex top-64 left-10 border'>
              <p className='font-bold text-[72px]'>{session?.user?.name}</p>
            </div>
            {/* Radar Chart */}
            <div className='absolute flex right-0 top-16 w-[40%] h-[80%]'>
              <div className='absolute flex w-full h-full bg-white bg-opacity-[10%] rounded-l-3xl backdrop-blur-lg ' />
              <div className='absolute  w-full h-full'>
                <RadarChartComponent />
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
                {/* Watermark */}
                <div className='w-[175px] mb-3'>
                  <Image src='/wm-dark.svg' alt='wm' width={175} height={175} />
                </div>
              </div>
            </div>
          </CardBody>

          {/* Card Background */}

          {/* <div className='absolute bottom-0 right-64'>
            <Image
              src='/card-deco.png'
              alt='decor'
              width={320}
              height={96}
              className='rounded-br-[25%]'
            />
          </div>
          <div className='absolute bottom-10 right-96 '>
            <Image
              src='/card-deco.png'
              alt='decor'
              width={320}
              height={96}
              className='rounded-tl-[25%]'
            />
          </div> */}
          {/* <div className='absolute top-0 right-[-20px] -rotate-20'>
            <Image
              src='/card-deco-pix.png'
              alt='decor'
              width={200}
              height={200}
            />
          </div> */}
        </Card>
      </div>

      <div className='flex my-5'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
    </section>
  );
};

export default IdCard;
