import React, { FC } from 'react';
import TopGenre from './TopGenre';

const TopGenreSection: FC = () => (
  <section className='h-[700px] flex justify-center items-center'>
    <div>
      <h1>Your Top Genre</h1>
      <TopGenre />
    </div>
  </section>
);

export default TopGenreSection;
