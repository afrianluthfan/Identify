/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC, useRef } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import RecommendationSkeleton from '@/components/skeletons/RecommendationSkeleton';
import RecommendationCardViewModel from './RecommendationCard.viewModel';

const RecommendationsCard: FC = () => {
  const { Recommendations, isLoading, handleRefresh } =
    RecommendationCardViewModel();

  const gerak = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start('visible');
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:justify-between mb-5'>
        <h1 className='mb-4 font-bold text-xl sm:text-3xl'>
          You might also enjoy these tracks
        </h1>

        <Button type='button' onClick={handleRefresh} radius='sm'>
          Refresh Suggestions
        </Button>
      </div>
      <motion.div
        className='grid grid-cols-1 gap-4'
        variants={gerak}
        initial='hidden'
        animate={animationControl}
        transition={{
          delay: 0,
          duration: 2,
          ease: 'easeInOut',
        }}
        ref={ref}
      >
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <RecommendationSkeleton key={index} />
            ))}
          </>
        ) : (
          Recommendations?.tracks?.map((track: any) => (
            <Card
              isFooterBlurred
              radius='lg'
              className='border-none w-[450px] sm:w-[1200px] h-[200px]'
              key={track.id}
            >
              <CardBody>
                <div className='flex overflow-hidden gap-3'>
                  {/* @ts-ignore */}
                  <Image
                    alt={track.name}
                    className='object-cover rounded-lg'
                    height={176}
                    src={track?.album?.images[0]?.url ?? ''}
                    width={176}
                  />
                  <div className='before:bg-white/10 border-white/20 border-2 overflow-hidden before:rounded-xl rounded-large w-[300px] sm:w-[1000px] p-4'>
                    <p className='text-xl sm:text-3xl text-black/80 dark:text-white/80 font-bold'>
                      {track.name}
                    </p>
                    <p className='sm:text-2xl text-black/80 dark:text-white/80'>
                      {track.artists.map((artist: any, index: number) => (
                        <span key={artist.id}>
                          {artist.name}
                          {index < track.artists.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default RecommendationsCard;
