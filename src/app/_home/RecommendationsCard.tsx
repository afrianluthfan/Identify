/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import useGetTopTracks from '@/server/topTracks/queries';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import TrackSkeleton from './TrackSkeleton';

const RecommendationsCard: FC = () => {
  const { data: session } = useSession();

  const { data, isLoading } = useGetTopTracks(session?.accessToken ?? '', '5');

  return (
    <div className='grid grid-cols-1 gap-4'>
      {isLoading ? (
        <>
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
        </>
      ) : (
        data?.map((track) => (
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none w-[1000px] h-[200px]'
            key={track.id}
          >
            <CardBody className='grid grid-cols-[200px_auto] overflow-hidden'>
              <Image
                alt={track.name}
                className='object-cover rounded-lg'
                height={176}
                src={track.album.images[1].url}
                width={176}
              />
              <CardFooter className='before:bg-white/10 border-white/20 border-2 overflow-hidden py-2 before:rounded-xl rounded-large bottom-1 shadow-small z-10'>
                <div className='space-y-1'>
                  <p className='text-3xl text-white/80 font-bold'>
                    {track.name}
                  </p>
                  <p className='text-2xl text-white/80'>
                    {track.artists.map((artist: any, index: number) => (
                      <span key={artist.id}>
                        {artist.name}
                        {index < track.artists.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
              </CardFooter>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
};

export default RecommendationsCard;
