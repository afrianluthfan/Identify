import React, { FC } from 'react';
import RecommendationsCard from './recommendationsCard/RecommendationsCard';

const RecommendationsSection: FC = () => (
  <section className='mb-[600px] mt-10 flex h-fit justify-center px-5 md:mb-10'>
    <RecommendationsCard />
  </section>
);

export default RecommendationsSection;
