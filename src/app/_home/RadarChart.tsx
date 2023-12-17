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

const RadarChartComponent: FC = () => {
  const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <ResponsiveContainer width='100%' height='100%'>
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
          // stroke='#07F468'
          // Fill blob data
          fill='#07F468'
          fillOpacity={0.5}
          fontSize={30}
        />
        {/* <Radar
          name='asdasd'
          dataKey='B'
          // Stroke blob data
          stroke='#00FFFF'
          // Fill blob data
          fill='#'
          fillOpacity={0.3}
          fontSize={30}
        /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
