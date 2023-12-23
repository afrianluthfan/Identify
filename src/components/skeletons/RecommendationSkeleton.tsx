import { Card, CardBody, Skeleton } from '@nextui-org/react';
import React, { FC } from 'react';

const RecommendationSkeleton: FC = () => (
  <Card className='w-[450px] sm:w-[1200px] h-[200px]' radius='lg'>
    <CardBody className='overflow-hidden'>
      <div className='flex gap-3'>
        <Skeleton className='rounded-lg w-[176px] h-[176px]'>
          <div className='h-24 rounded-lg bg-default-300' />
        </Skeleton>
        <div className='space-y-3'>
          <Skeleton className='rounded-lg w-[250px] sm:w-[1000px] h-[20px]'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='rounded-lg w-[250px] sm:w-[1000px] h-[20px]'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='rounded-lg w-[250px] sm:w-[1000px] h-[20px]'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='rounded-lg w-[250px] sm:w-[1000px] h-[20px]'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='rounded-lg w-[250px] sm:w-[1000px] h-[20px]'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='rounded-lg w-[250px] sm:w-[1000px] h-[20px]'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default RecommendationSkeleton;
