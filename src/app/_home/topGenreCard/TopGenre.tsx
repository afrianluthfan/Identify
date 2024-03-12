/* eslint-disable react/no-array-index-key */

'use client';

import React, { FC } from 'react';
import { Card } from '@nextui-org/react';
import GenreSkeleton from '@/components/skeletons/GenreSkeleton';
import TopGenreViewModel from './TopGenre.viewModel';

const TopGenre: FC = () => {
  const { top10Genres, isLoading } = TopGenreViewModel();

  return (
    <div className='grid h-[800px] grid-cols-1 gap-4 font-bold sm:h-96 sm:grid-cols-2'>
      {isLoading ? (
        <>
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
        </>
      ) : (
        top10Genres.map((genre, index) => (
          <Card
            key={index}
            className='flex w-[50vw] items-center md:w-[300px] lg:w-[450px]'
          >
            <p className='m-auto align-middle text-lg md:text-xl lg:text-2xl'>
              {genre}
            </p>
          </Card>
        ))
      )}
    </div>
  );
};

export default TopGenre;
