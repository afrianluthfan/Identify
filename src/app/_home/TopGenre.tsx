/* eslint-disable react/no-array-index-key */

'use client';

import React, { FC } from 'react';
import { Card } from '@nextui-org/react';
import TopGenreViewModel from './TopGenre.viewModel';

const TopGenre: FC = () => {
  const { top10Genres } = TopGenreViewModel();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-[450px] sm:w-[1000px] h-[200px] sm:h-96 font-bold'>
      {top10Genres.map((genre, index) => (
        <Card key={index} className='flex items-center'>
          <p className='align-middle m-auto text-xl'>{genre}</p>
        </Card>
      ))}
    </div>
  );
};

export default TopGenre;
