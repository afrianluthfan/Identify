import React, { FC } from 'react';
import RecommendationsCard from './RecommendationsCard';

const RecommendationsSection: FC = () => (
  <section className='h-[1300px] flex justify-center mt-24'>
    <div>
      <h1 className='mb-4 font-bold text-3xl'>
        You might also enjoy these tracks
      </h1>
      <RecommendationsCard />
    </div>
  </section>
);

export default RecommendationsSection;
