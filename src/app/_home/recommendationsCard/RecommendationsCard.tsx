/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import useGetTopTracks from '@/server/topTracks/queries';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import useGetTopArtists from '@/server/topArtists/queries';
import useGetRecommendations from '@/server/getRecommendations/queries';
import TrackSkeleton from '../../../components/skeletons/TrackSkeleton';

const RecommendationsCard: FC = () => {
  const { data: session } = useSession();

  const { data: allTimeArtists } = useGetTopArtists(
    session?.accessToken ?? '',
    'long_term',
    '50',
  );

  const { data: currentArtists } = useGetTopArtists(
    session?.accessToken ?? '',
    'short_term',
    '50',
  );

  const { data: allTimeTracks } = useGetTopTracks(
    session?.accessToken ?? '',
    'long_term',
    '50',
  );

  const { data: currentTracks } = useGetTopTracks(
    session?.accessToken ?? '',
    'short_term',
    '50',
  );

  const {
    data: Recommendations,
    isLoading,
    refetch,
  } = useGetRecommendations(
    session?.accessToken ?? '',
    allTimeArtists ?? [],
    currentArtists ?? [],
    allTimeTracks ?? [],
    currentTracks ?? [],
    session?.user?.country ?? '',
  );

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='mb-4 font-bold text-3xl'>
          You might also enjoy these tracks
        </h1>

        <Button type='button' onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
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
          Recommendations?.tracks?.map((track) => (
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
                  src={track.album.images[0].url}
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
    </div>
  );
};

export default RecommendationsCard;
