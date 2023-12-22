/* eslint-disable react/no-array-index-key */

'use client';

import React, { FC } from 'react';
import { Card } from '@nextui-org/react';
import GenreSkeleton from '@/components/skeletons/GenreSkeleton';
import TopGenreViewModel from './TopGenre.viewModel';

const TopGenre: FC = () => {
  const { top10Genres, isLoading } = TopGenreViewModel();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 h-[800px] sm:h-96 font-bold'>
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
            className='flex items-center sm:w-[530px] w-[450px]'
          >
            <p className='align-middle m-auto text-xl'>{genre}</p>
          </Card>
        ))
      )}
    </div>
  );
};

export default TopGenre;
