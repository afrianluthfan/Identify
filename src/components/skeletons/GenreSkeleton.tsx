import { Card, Skeleton } from '@nextui-org/react';
import React, { FC } from 'react';

const GenreSkeleton: FC = () => (
  <Card className='flex w-full items-center'>
    <Skeleton className='h-[176px] w-full rounded-lg'>
      <div className='h-24 rounded-lg bg-default-300' />
    </Skeleton>
  </Card>
);

export default GenreSkeleton;
