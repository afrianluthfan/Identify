import { Card, Skeleton } from '@nextui-org/react';
import React, { FC } from 'react';

const GenreSkeleton: FC = () => (
  <Card className='w-[450px] sm:w-[530px] p-4'>
    <Skeleton className='rounded-lg w-[420px] sm:w-[500px] h-[176px]'>
      <div className='h-24 rounded-lg bg-default-300' />
    </Skeleton>
  </Card>
);

export default GenreSkeleton;
