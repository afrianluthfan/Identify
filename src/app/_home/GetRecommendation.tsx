'use client';

import React, { FC } from 'react';
import { useSession } from 'next-auth/react';
import useGetTopArtists from '@/server/topArtists/queries';
import useGetTopTracks from '@/server/topTracks/queries';
import useGetRecommendations from '@/server/getRecommendations/queries';
import { Button } from '@nextui-org/react';

const GetRecommendation: FC = () => {
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

  const { data: Recommendations, refetch } = useGetRecommendations(
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
      <Button type='button' onClick={handleRefresh}>
        Refresh
      </Button>
      {Recommendations?.tracks.map((track) => (
        <div key={track.id} className='flex'>
          <h3>{track.name}</h3> - <p>{track.artists[0].name}</p>
        </div>
      ))}
    </div>
  );
};

export default GetRecommendation;
