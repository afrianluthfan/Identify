'use client';

import React, { FC } from 'react';
import useGetTopTracks from '@/server/queries';
import MusicCard from './Card/MusicCard';

interface TopTracksProps {
  accessToken: string;
}

const TopTracks: FC<TopTracksProps> = ({ accessToken }) => {
  const { data } = useGetTopTracks(accessToken);

  return (
    <div className='grid grid-cols-5'>
      {data?.items.map((track: any) => (
        <MusicCard
          key={track.id}
          title={track.name}
          artist={track.artists[0].name}
          image={track.album.images[2].url}
        />
      ))}
    </div>
  );
};

export default TopTracks;
