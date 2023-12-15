import React, { FC } from 'react';
import TopTracksSection from '@/app/_home/TopTracksSection';
import TopGenreSection from '@/app/_home/TopGenreSection';

const Home: FC = () => (
  <main>
    <TopTracksSection />
    <TopGenreSection />
  </main>
);

export default Home;
