/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
      subject: 'H',
      Score: scaledValence,
      fullMark: 100,
    },
    {
      subject: 'D',
      Score: scaledDanceability,
      fullMark: 100,
    },
    {
      subject: 'E',
      Score: scaledEnergy,
      fullMark: 100,
    },
    {
      subject: 'A',
      Score: scaledAccousticness,
      fullMark: 100,
    },
    {
      subject: 'S',
      Score: scaledSpeechiness,
      fullMark: 100,
    },
  ];
  return (
    <div className='xs:h-[70%] flex w-full items-center justify-center lg:h-full lg:flex-none'>
      {/* dark mode */}

      <ResponsiveContainer
        width='100%'
        height='80%'
        className='hidden dark:block'
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey='subject'
            scale='point'
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar dataKey='Score' fill='#000000' background={{ fill: '#fff' }} />
        </BarChart>
      </ResponsiveContainer>

      {/* light mode */}
      <ResponsiveContainer
        width='100%'
        height='80%'
        className='block dark:hidden'
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey='subject'
            scale='point'
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar dataKey='Score' fill='#000000' background={{ fill: '#FFF' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
