import React, { FC } from 'react';
import TopTracksSection from '@/components/home/TopTracksSection';
import TopGenreSection from '@/components/home/TopGenreSection';

const Home: FC = () => (
  <main>
    <TopTracksSection />
    <TopGenreSection />
  </main>
);

export default Home;
