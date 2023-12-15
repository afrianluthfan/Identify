import React, { FC } from 'react';
import TopTracksSection from '@/components/home/TopTracksSection';
import TopGenreSection from '@/components/home/TopGenreSection';
import IdCard from '@/components/home/IdCard';

const Home: FC = () => (
  <main>
    <IdCard />
    <TopTracksSection />
    <TopGenreSection />
  </main>
);

export default Home;
