import React, { FC } from 'react';
import TracksCard from './TracksCard';

const TopTracksSection: FC = () => (
  <section className='h-[700px] flex justify-center items-center'>
    <div>
      <h1 className='mb-4 font-bold text-3xl'>Your Top Tracks</h1>
      <TracksCard />
    </div>
  </section>
);

export default TopTracksSection;
