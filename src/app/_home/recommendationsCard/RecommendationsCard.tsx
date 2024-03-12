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
    <div className='h-fit w-full px-8'>
      <div className='mb-5 flex flex-col justify-between sm:justify-between md:flex-row'>
        <h1 className='mb-4 text-lg font-bold md:text-xl lg:text-3xl'>
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
              className='h-fit w-full border-none'
              key={track.id}
            >
              <CardBody className='h-fit'>
                <div className='flex h-fit flex-col items-center justify-center gap-3 overflow-hidden md:flex-row'>
                  {/* @ts-ignore */}
                  <Image
                    alt={track.name}
                    className='rounded-lg object-cover'
                    height={176}
                    src={track?.album?.images[0]?.url ?? ''}
                    width={176}
                  />
                  <div className='h-full w-full overflow-hidden rounded-large border-2 border-white/20 p-4 before:rounded-xl before:bg-white/10'>
                    <p className='text-lg font-bold text-black/80 dark:text-white/80 sm:text-3xl'>
                      {track.name}
                    </p>
                    <p className='text-black/80 dark:text-white/80 sm:text-2xl'>
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
