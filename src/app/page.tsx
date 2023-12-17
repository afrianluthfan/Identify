import React, { FC } from 'react';
import TopTracksSection from './_home/TopTracksSection';
import TopGenreSection from './_home/TopGenreSection';
import IdCard from './_home/IdCard';

const Home: FC = () => (
  <main>
    <IdCard />
    <TopTracksSection />
    <TopGenreSection />
  </main>
);

export default Home;
