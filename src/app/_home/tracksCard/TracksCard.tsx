/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import useGetTopTracks from '@/server/topTracks/queries';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import TrackSkeleton from '../../../components/skeletons/TrackSkeleton';

const TracksCard: FC = () => {
  const { data: session } = useSession();

  const { data, isLoading } = useGetTopTracks(
    session?.accessToken ?? '',
    'medium_term',
    '10',
  );

  return (
    <div className='mt-8 grid w-full grid-cols-2 place-items-center gap-4 sm:grid-cols-5'>
      {isLoading ? (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <TrackSkeleton key={index} />
          ))}
        </>
      ) : (
        data?.map((track) => (
          <div
            className='flex flex-col items-center justify-center gap-2 border-none xs:w-[120px] ph:w-[150px] md:w-[120px] lg:w-[180px] min-[1150px]:w-[210px]'
            key={track.id}
          >
            <Link
              href={track.external_urls.spotify}
              className='hover:scale-110'
            >
              <div className='mb-2 w-full'>
                <Image
                  alt='spotify logo'
                  height={50}
                  width={120}
                  src='/spotify_logo_black.svg'
                  className='dark:hidden'
                />
                <Image
                  alt='spotify logo'
                  height={50}
                  width={120}
                  src='/spotify_logo_white.svg'
                  className='hidden dark:block'
                />
              </div>

              <Image
                alt={track.name}
                className='object-cover'
                height={300}
                src={track?.album?.images[1]?.url ?? ''}
                width={300}
              />
              <div className='z-10 ml-1 h-[70px] w-full overflow-hidden sm:py-2'>
                <p className='text-sm font-bold text-black dark:text-white'>
                  {track.name}
                </p>
                <p className='text-tiny text-black dark:text-white'>
                  {track.artists.map((artist: any, index: number) => (
                    <span key={artist.id}>
                      {artist.name}
                      {index < track.artists.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                {/* <ArrowUpRight size={16} className='absolute right-1 top-1' /> */}
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default TracksCard;
