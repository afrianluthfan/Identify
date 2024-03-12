import React, { FC } from 'react';
import TracksCard from './tracksCard/TracksCard';

const TopTracksSection: FC = () => (
  <section className='mt-[20px] flex h-fit justify-center sm:h-auto'>
    <div className='mt-10 flex h-fit w-full flex-col items-center justify-center px-8'>
      <h1 className='mb-4 w-full text-xl font-bold sm:text-3xl'>
        Your Top Tracks
      </h1>
      <TracksCard />
    </div>
  </section>
);

export default TopTracksSection;
