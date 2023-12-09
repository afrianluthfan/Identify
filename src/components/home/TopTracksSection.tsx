import React, { FC } from 'react';
import TracksCard from './TracksCard';

interface TopTracksSectionProps {
  accessToken: string;
}

const TopTracksSection: FC<TopTracksSectionProps> = ({ accessToken }) => (
  <section className='h-[700px] flex justify-center items-center'>
    <div>
      <h1 className='mb-4'>Your Top Tracks</h1>
      <TracksCard accessToken={accessToken} />
    </div>
  </section>
);

export default TopTracksSection;
