'use client';

import React, { FC } from 'react';
import useGetTopTracks from '@/server/topTracks/queries';
import useAudioFeatures from '@/server/audioFeatures/queries';
import useGetTrack from '@/server/getTrack/queries';
import MusicCard from './Card/MusicCard';

interface TopTracksProps {
  accessToken: string;
}

const TopTracks: FC<TopTracksProps> = ({ accessToken }) => {
  const { data: Tracks } = useGetTopTracks(accessToken);

  const trackIDs = Tracks?.items.map((track: any) => track.id).join();

  const { data: AudioFeatures } = useAudioFeatures(accessToken, trackIDs ?? '');

  const happiestSong = AudioFeatures?.audio_features.sort(
    (a: any, b: any) => b.valence - a.valence,
  )[0]?.id;

  const { data: Track } = useGetTrack(accessToken, happiestSong);

  return (
    <div className='grid grid-cols-5'>
      {Tracks?.items.map((track: any) => (
        <MusicCard
          key={track.id}
          title={track.name}
          artist={track.artists[0].name}
          image={track.album.images[2].url}
        />
      ))}
      <h1>
        Happiest Song :{Track?.name} by {Track?.artists[0].name} on{' '}
        {Track?.album.name}
      </h1>
    </div>
  );
};

export default TopTracks;
