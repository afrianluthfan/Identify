/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import { Card, CardFooter } from '@nextui-org/react';
import useGetTopTracks from '@/server/topTracks/queries';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import TrackSkeleton from '../../../components/skeletons/TrackSkeleton';

const TracksCard: FC = () => {
  const { data: session } = useSession();

  const { data, isLoading } = useGetTopTracks(
    session?.accessToken ?? '',
    'medium_term',
    '10',
  );

  return (
    <div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>
      {isLoading ? (
        <>
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
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
            className='border-none sm:w-[200px] w-[210px]'
            key={track.id}
          >
            <Image
              alt={track.name}
              className='object-cover'
              height={300}
              src={track?.album?.images[1]?.url ?? ''}
              width={300}
            />
            <CardFooter className='before:bg-white/10 border-white/20 border-1 overflow-hidden sm:py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] h-[70px] shadow-small ml-1 z-10 bg-slate-700 bg-opacity-70'>
              <div className='space-y-1 p-1'>
                <p className='text-tiny text-white/80 font-bold'>
                  {track.name}
                </p>
                <p className='text-tiny text-white/80'>
                  {track.artists.map((artist: any, index: number) => (
                    <span key={artist.id}>
                      {artist.name}
                      {index < track.artists.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};

export default TracksCard;
