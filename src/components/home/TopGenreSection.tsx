import React, { FC } from 'react';
import TopGenre from './TopGenre';

const TopGenreSection: FC = () => (
  <section className='h-[700px] flex justify-center items-center'>
    <div>
      <h1 className='mb-4 font-bold text-3xl'>Your Top Genres</h1>
      <TopGenre />
    </div>
  </section>
);

export default TopGenreSection;
