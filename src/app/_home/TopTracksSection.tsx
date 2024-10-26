/* eslint-disable react/no-array-index-key */

'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import TrackSkeleton from '@/components/skeletons/TrackSkeleton';

const TracksCardLZ = dynamic(() => import('./tracksCard/TracksCard'), {
  loading: () => (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <TrackSkeleton key={index} />
      ))}
    </>
  ),
  ssr: false,
});

const TopTracksSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
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
    <section className='mt-[20px] flex h-fit justify-center sm:h-auto'>
      <div className='mt-10 flex h-fit w-full flex-col items-center justify-center px-8'>
        <h1 className='mb-4 w-full text-xl font-bold sm:text-3xl'>
          Your Top Tracks
        </h1>
        <div ref={ref} className='mt-10 h-fit w-full'>
          {isVisible && <TracksCardLZ />}
        </div>
      </div>
    </section>
  );
};

export default TopTracksSection;
