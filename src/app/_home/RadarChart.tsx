/* eslint-disable no-confusing-arrow */

'use client';

import useAudioFeatures from '@/server/audioFeatures/queries';
import useGetTopTracks from '@/server/topTracks/queries';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const RadarChartComponent: FC = () => {
  const { data: session } = useSession();

  const { data: TopTracks } = useGetTopTracks(
    session?.accessToken ?? '',
    'long_term',
    '50',
  );

  const trackIds = TopTracks?.map((track) => track.id).join(',');

  const { data: AudioFeaturesData } = useAudioFeatures(
    session?.accessToken ?? '',
    trackIds ?? '',
  );

  let avgValence = 0;
  let avgDanceability = 0;
  let avgEnergy = 0;
  let avgAccousticness = 0;
  let avgSpeechiness = 0;

  if (AudioFeaturesData) {
    const totalValence = AudioFeaturesData.reduce(
      (total, item) => (item && item.valence ? total + item.valence : total),
      0,
    );
    avgValence = totalValence / AudioFeaturesData.length;

    const totalDanceability = AudioFeaturesData.reduce(
      (total, item) =>
        item && item.danceability ? total + item.danceability : total,
      0,
    );
    avgDanceability = totalDanceability / AudioFeaturesData.length;

    const totalEnergy = AudioFeaturesData.reduce(
      (total, item) => (item && item.energy ? total + item.energy : total),
      0,
    );
    avgEnergy = totalEnergy / AudioFeaturesData.length;

    const totalAccousticness = AudioFeaturesData.reduce(
      (total, item) =>
        item && item.acousticness ? total + item.acousticness : total,
      0,
    );
    avgAccousticness = totalAccousticness / AudioFeaturesData.length;

    const totalSpeechiness = AudioFeaturesData.reduce(
      (total, item) =>
        item && item.speechiness ? total + item.speechiness : total,
      0,
    );
    avgSpeechiness = totalSpeechiness / AudioFeaturesData.length;
  }

  const scaledValence = Math.round(avgValence * 100);
  const scaledDanceability = Math.round(avgDanceability * 100);
  const scaledEnergy = Math.round(avgEnergy * 100);
  const scaledAccousticness = Math.round(avgAccousticness * 100);
  const scaledSpeechiness = Math.round(avgSpeechiness * 100);

  const data = [
    {
      subject: 'Happiness',
      A: scaledValence,
      fullMark: 100,
    },
    {
      subject: 'Danceability',
      A: scaledDanceability,
      fullMark: 100,
    },
    {
      subject: 'Energy',
      A: scaledEnergy,
      fullMark: 100,
    },
    {
      subject: 'Accousticness',
      A: scaledAccousticness,
      fullMark: 100,
    },
    {
      subject: 'Speechiness',
      A: scaledSpeechiness,
      fullMark: 100,
    },
  ];
  return (
    <>
      {/* light mode */}
      <ResponsiveContainer width='100%' height='100%' className='dark:hidden'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          {/* Jaring graf */}
          <PolarGrid stroke='#171717' />
          {/* Outline graf dan tulisan */}
          <PolarAngleAxis dataKey='subject' stroke='#000000' />
          <PolarRadiusAxis angle={120} stroke='#000000' />
          <Radar
            name='Mike'
            dataKey='A'
            // Stroke blob data
            stroke='#FFFFFF'
            // Fill blob data
            fill='#000000'
            fillOpacity={0.5}
            fontSize={30}
          />
        </RadarChart>
      </ResponsiveContainer>
      {/* dark mode */}
      <ResponsiveContainer
        width='100%'
        height='100%'
        className='hidden dark:block'
      >
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          {/* Jaring graf */}
          <PolarGrid stroke='#FFFFFF' />
          {/* Outline graf dan tulisan */}
          <PolarAngleAxis dataKey='subject' stroke='#FFFFFF' />
          <PolarRadiusAxis angle={120} />
          <Radar
            name='Mike'
            dataKey='A'
            // Stroke blob data
            stroke='#FFFFFF'
            // Fill blob data
            fill='#000000'
            fillOpacity={0.5}
            fontSize={30}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RadarChartComponent;
