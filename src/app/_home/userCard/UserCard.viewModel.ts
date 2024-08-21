/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-syntax */

import { useSession } from 'next-auth/react';
import { useToPng } from '@hugocxl/react-to-image';
import { toast } from 'sonner';
import useGetTopTracks from '@/server/topTracks/queries';
import useAudioFeatures from '@/server/audioFeatures/queries';
import calculateAverage, { AudioFeature } from '@/utils/calculateAverage';
import { experimental_useObject as useObject } from 'ai/react';
import roastsSchema from '@/actions/schema';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { generateRoastRSC } from '@/actions/actions';
import { readStreamableValue } from 'ai/rsc';

const UserCardViewModel = () => {
  const { data: session } = useSession();

  const waktu = new Date();

  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 1,
    onLoading() {
      toast.loading('Loading...');
      setTimeout(() => {
        toast.dismiss();
      }, 2000);
    },
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = 'card.png';
      link.href = data;
      link.click();
      toast.success('Downloaded!');
    },
    onError: (error) => {
      toast.error(error);
    },
  });

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

  const features: AudioFeature[] = [
    'valence',
    'danceability',
    'energy',
    'acousticness',
    'speechiness',
  ];

  const averages = features.reduce(
    (acc, feature) => {
      acc[feature] = calculateAverage(AudioFeaturesData, feature);
      return acc;
    },
    {} as Record<AudioFeature, number>,
  );

  const scaledFeatures = Object.fromEntries(
    Object.entries(averages).map(([key, value]) => [
      key,
      Math.round(value * 100).toString(),
    ]),
  );

  type ScaledFeaturesType = {
    valence: string;
    danceability: string;
    energy: string;
    acousticness: string;
    speechiness: string;
  };
  type RoastSchemaType = z.infer<typeof roastsSchema>;
  const [generation, setGeneration] = useState<RoastSchemaType | null>(null);
  const CACHE_KEY = 'roastCache';

  const roastStream = async () => {
    try {
      // Check if there's cached data
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        // Use the cached data to set the initial state
        setGeneration(parsedData as RoastSchemaType);
      }

      // Fetch fresh data
      const { object, error } = await generateRoastRSC(
        scaledFeatures as ScaledFeaturesType,
      );
      if (error) {
        console.error('Error generating roast:', error);
        return;
      }

      if (object) {
        let partialObject: RoastSchemaType | null = null;
        for await (const obj of readStreamableValue(object)) {
          if (obj) {
            partialObject = obj;
          }
        }

        if (partialObject) {
          // Set the state with the new data
          setGeneration(partialObject);
          // Cache the new data in localStorage
          localStorage.setItem(CACHE_KEY, JSON.stringify(partialObject));
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error('Unexpected error:', err.message);
      } else {
        console.error('An unknown error occurred:', err);
      }
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setGeneration(parsedData as RoastSchemaType);
    }
  }, []);

  const arrayText = Array(40).fill(`${session?.user?.name}`).join(' ');

  return {
    session,
    waktu,
    arrayText,
    convert,
    ref,
    roastStream,
    generation,
    scaledFeatures,
  };
};

export default UserCardViewModel;
