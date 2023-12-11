'use client';

import React, { FC } from 'react';
import TopGenreViewModel from './TopGenre.viewModel';

const TopGenre: FC = () => {
  const { top10Genres } = TopGenreViewModel();

  return (
    <div>
      {top10Genres.map((genre) => (
        <h1 key={genre}>{genre}</h1>
      ))}
    </div>
  );
};

export default TopGenre;
