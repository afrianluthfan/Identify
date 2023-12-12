'use client';

import React, { FC } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import TopGenreViewModel from './TopGenre.viewModel';

const TopGenre: FC = () => {
  const { top10Genres } = TopGenreViewModel();

  return (
    <div className='grid grid-cols-2 gap-4 w-[500px]'>
      {top10Genres.map((genre) => (
        <Card>
          <CardBody>
            <p>{genre}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default TopGenre;
