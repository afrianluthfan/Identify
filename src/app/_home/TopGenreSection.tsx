import React, { FC } from 'react';
import TopGenre from './topGenreCard/TopGenre';

const TopGenreSection: FC = () => (
  <section className='mt-10 flex justify-center xs:min-h-fit'>
    <div className='flex w-full flex-col items-center justify-center px-8'>
      <h1 className='mb-4 w-full text-xl font-bold sm:text-3xl'>
        Your Top Genres
      </h1>
      <TopGenre />
    </div>
  </section>
);

export default TopGenreSection;
