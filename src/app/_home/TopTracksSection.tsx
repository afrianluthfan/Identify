import React, { FC } from 'react';
import TracksCard from './TracksCard';

const TopTracksSection: FC = () => (
  <section className='h-[1000px] sm:h-auto flex justify-center mt-[70px] sm:mt-[200px]'>
    <div>
      <h1 className='mb-4 font-bold text-3xl'>Your Top Tracks</h1>
      <TracksCard />
    </div>
  </section>
);

export default TopTracksSection;
