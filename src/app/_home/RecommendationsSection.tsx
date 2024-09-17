/* eslint-disable react/no-array-index-key */

'use client';

import React, { FC, useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import RecommendationSkeleton from '@/components/skeletons/RecommendationSkeleton';

const RecommendationsCardLZ = dynamic(
  () => import('./recommendationsCard/RecommendationsCard'),
  {
    loading: () => (
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <RecommendationSkeleton key={index} />
        ))}
      </>
    ),
    ssr: false,
  },
);

const RecommendationsSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          console.log('RecommendationsCard is visible'); // console output to show when the section is visible
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }, // subject to change
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className='mb-[600px] mt-10 flex h-fit justify-center px-5 md:mb-10'>
      <div ref={ref} className='h-fit w-full'>
        {isVisible && <RecommendationsCardLZ />}
      </div>
    </section>
  );
};

export default RecommendationsSection;
