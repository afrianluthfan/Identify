'use client';

import React, { FC, useState, useEffect, useRef } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from '@nextui-org/react';
import Image from 'next/image';
import RunningText from '@/components/RunningText';
import ProgressBar from '@/components/ProgressBar';
import UserCardViewModel from './UserCard.viewModel';

const UserCard: FC = () => {
  const {
    session,
    waktu,
    arrayText,
    ref,
    roastStream,
    generation,
    isLoadingRoast,
  } = UserCardViewModel();

  const [virgin, setVirginity] = useState(false);
  const hasRunOnce = useRef(false);

  const obtainCard = () => {
    roastStream();
    setVirginity(false);
  };

  useEffect(() => {
    if (!hasRunOnce.current) {
      if (!generation?.overallRoast) {
        setVirginity(true);
      }
      hasRunOnce.current = true;
    }
  }, [generation?.overallRoast]);

  return (
    <>
      <div className='my-5 flex'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
      <div className='relative flex flex-col items-center justify-center px-4'>
        {virgin ? (
          <h1 className='absolute z-10 ml-5 animate-pulse text-8xl font-extrabold md:ml-0 md:text-center'>
            Click obtain card
          </h1>
        ) : null}
        {/* big main card ting */}
        <Card
          ref={ref}
          className={`w-full max-w-[1080px] ${virgin ? 'blur-3xl' : ''} tr transition-all duration-100 xs:h-fit`}
        >
          <div className='absolute right-[-500px] h-[300px] w-[750px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
          <div className='absolute bottom-[-500px] left-64 h-[750px] w-[900px] rotate-[-10deg] rounded-[100%] bg-[#8349FF] blur-[80px]' />
          <div className='absolute bottom-[-350px] right-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#FFCDFF] blur-[80px]' />
          <div className='absolute bottom-[-30px] h-48 w-[600px] rotate-0 rounded-[100%] bg-[#0013FF] blur-[80px]' />
          <div className='absolute bottom-[-300px] left-24 h-96 w-96 rotate-90 rounded-[100%] bg-[#00FFFF] blur-3xl' />
          <Image
            src='/pita-rainbow.png'
            alt='rainbow-ribbon'
            height={400}
            width={645}
            className='absolute left-0 top-[-100px] blur-sm'
          />
          {/* header and dat */}
          <CardHeader className='bg-gray-900 p-5'>
            <div className='flex items-center justify-center'>
              <Avatar
                src={session?.user?.image ?? ''}
                size='md'
                className='mr-5 rounded-[100%]'
                isBordered
              />
              <p className='h-fit text-[20px] font-bold ph:text-[30px]'>
                {session?.user?.name}
              </p>
            </div>
          </CardHeader>
          {/* main shi */}
          <CardBody className='relative flex max-w-full'>
            <div className='flex flex-col items-center md:flex-row lg:justify-center'>
              <div className='relative flex w-full justify-center lg:justify-end lg:px-12'>
                {/* roast card and all here */}
                <Card className='p-5 xs:mb-8 xs:min-w-[232px] ph:min-w-[319px] ph:p-10 md:mb-0 lg:min-w-[400px] '>
                  <CardHeader className='font-bold ph:text-lg lg:text-xl '>
                    {isLoadingRoast ? (
                      <Skeleton className='min-h-[28px] w-full rounded-xl' />
                    ) : (
                      <p>Essentially,</p>
                    )}
                  </CardHeader>
                  <CardBody className='text-xl ph:text-small'>
                    {isLoadingRoast ? (
                      <div className='flex flex-col gap-1'>
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                        <Skeleton className='min-h-[18px] w-full rounded-xl' />
                      </div>
                    ) : (
                      generation?.overallRoast
                    )}
                  </CardBody>
                </Card>
              </div>
              {/* stats and shi */}
              <div className='md:p- -order-last flex h-[35%] items-center justify-center p-8 ph:mt-0 ph:h-full ph:p-12 md:-order-first md:max-w-[50%] lg:min-h-[400px]'>
                <Card className='p-5 xs:mb-8 xs:min-w-[232px] ph:min-w-[319px] ph:p-10 md:mb-0 md:px-0 lg:min-w-[400px] lg:p-10'>
                  <CardHeader className='font-bold ph:text-lg lg:text-xl '>
                    {isLoadingRoast ? (
                      <Skeleton className='min-h-[28px] w-full rounded-xl' />
                    ) : (
                      <p>{generation?.mainGenre} sucker💀</p>
                    )}
                  </CardHeader>
                  <CardBody className='text-[12px] ph:text-small'>
                    <ul className='flex flex-col gap-5'>
                      {generation?.roastDetails?.map((item) => (
                        <li key={item?.nameOfAudioFeature}>
                          <h1 className='font-bold'>
                            {isLoadingRoast ? (
                              <div className='flex flex-col gap-1'>
                                <Skeleton className='min-h-[17px] w-full rounded-xl' />
                                <Skeleton className='min-h-[12px] w-full rounded-xl' />
                              </div>
                            ) : (
                              <>
                                {item?.nameOfAudioFeature}: {item?.percentage}%
                                <ProgressBar
                                  value={parseInt(item?.percentage, 10)}
                                />
                              </>
                            )}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardBody>
          <CardFooter className='z-10 h-full w-full bg-gray-900 bg-opacity-90 p-8'>
            <div className='relative flex w-full items-center justify-between'>
              {/* Issue Date */}
              <div className='flex w-96 xs:text-xs ph:text-sm lg:text-xl lg:font-bold'>
                Issued at{' '}
                {waktu?.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className='z-10 flex w-[175px] items-center justify-center text-center'>
                <Image src='/logo.svg' alt='wm' width={175} height={175} />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Button
          radius='sm'
          onClick={obtainCard}
          type='button'
          className='mt-5 h-12 w-fit text-xl font-bold xs:px-12 ph:px-4 lg:w-[20%]'
        >
          <p className='text-small ph:text-lg'> Obtain card</p>
        </Button>
      </div>
      <div className='my-5 flex'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
    </>
  );
};

export default UserCard;
