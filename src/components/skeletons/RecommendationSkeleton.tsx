import { Card, CardBody, Skeleton } from '@nextui-org/react';
import React, { FC } from 'react';

const RecommendationSkeleton: FC = () => (
  <Card className='h-[200px] w-full' radius='lg'>
    <CardBody className='overflow-hidden'>
      <div className='flex gap-3'>
        <Skeleton className='h-[176px] w-full rounded-lg'>
          <div className='h-24 rounded-lg bg-default-300' />
        </Skeleton>
        <div className='w-full space-y-3'>
          <Skeleton className='h-[20px] w-full rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='h-[20px] w-full rounded-lg '>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='h-[20px] w-full rounded-lg '>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='h-[20px] w-full rounded-lg '>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='h-[20px] w-full rounded-lg '>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
          <Skeleton className='h-[20px] w-full rounded-lg '>
            <div className='h-24 rounded-lg bg-default-300' />
          </Skeleton>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default RecommendationSkeleton;
