/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

interface RadarChartProps {
  scaledValence: number;
  scaledDanceability: number;
  scaledAccousticness: number;
  scaledEnergy: number;
  scaledSpeechiness: number;
}

const RadarChartComponent: FC<RadarChartProps> = ({
  scaledValence,
  scaledDanceability,
  scaledAccousticness,
  scaledEnergy,
  scaledSpeechiness,
}) => {
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
    <div className='sm:flex-none flex items-center justify-center h-[70%] sm:h-full w-full'>
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
          <PolarAngleAxis dataKey='subject' stroke='#FFFFFF' radius={0.1} />
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
      {/* light mode */}
      <ResponsiveContainer width='100%' height='100%' className='dark:hidden'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          {/* Jaring graf */}
          <PolarGrid stroke='#171717' />
          {/* Outline graf dan tulisan */}
          <PolarAngleAxis dataKey='subject' stroke='#FFFF' />
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
    </div>
  );
};

export default RadarChartComponent;
