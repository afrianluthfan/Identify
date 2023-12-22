/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import RecommendationSkeleton from '@/components/skeletons/RecommendationSkeleton';
import RecommendationCardViewModel from './RecommendationCard.viewModel';

const RecommendationsCard: FC = () => {
  const { Recommendations, isLoading, handleRefresh } =
    RecommendationCardViewModel();
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
      <div className='grid grid-cols-1 gap-4'>
        {isLoading ? (
          <>
            <RecommendationSkeleton />
            <RecommendationSkeleton />
            <RecommendationSkeleton />
            <RecommendationSkeleton />
            <RecommendationSkeleton />
          </>
        ) : (
          Recommendations?.tracks?.map((track) => (
            <Card
              isFooterBlurred
              radius='lg'
              className='border-none w-[450px] sm:w-[1200px] h-[200px]'
              key={track.id}
            >
              <CardBody>
                <div className='flex overflow-hidden gap-3'>
                  <Image
                    alt={track.name}
                    className='object-cover rounded-lg'
                    height={176}
                    src={track?.album?.images[0]?.url ?? ''}
                    width={176}
                  />
                  <div className='before:bg-white/10 border-white/20 border-2 overflow-hidden before:rounded-xl rounded-large w-[300px] sm:w-[800px] p-4'>
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
      </div>
    </div>
  );
};

export default RecommendationsCard;
