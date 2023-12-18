import React, { FC } from 'react';
import TopTracksSection from '@/app/_home/TopTracksSection';
import TopGenreSection from '@/app/_home/TopGenreSection';
import IdCardSection from './_home/IdCardSection';
import RecommendationsSection from './_home/RecommendationsSection';

const Home: FC = () => (
  <main>
    <IdCardSection />
    <TopTracksSection />
    <TopGenreSection />
    <RecommendationsSection />
  </main>
);

export default Home;
