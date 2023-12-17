import React, { FC } from 'react';
import TopTracksSection from '@/app/_home/TopTracksSection';
import TopGenreSection from '@/app/_home/TopGenreSection';
import AudioFeatures from './_home/AudioFeatures';

const Home: FC = () => (
  <main>
    <IdCard />
    <TopTracksSection />
    <TopGenreSection />
    <AudioFeatures />
  </main>
);

export default Home;
