import React, { FC } from 'react';
import TopGenre from './TopGenre';

const TopGenreSection: FC = () => (
  <section className='h-[800px] sm:h-auto flex justify-center sm:mt-[200px]'>
    <div>
      <h1 className='mb-4 font-bold text-3xl'>Your Top Genres</h1>
      <TopGenre />
    </div>
  </section>
);

export default TopGenreSection;
