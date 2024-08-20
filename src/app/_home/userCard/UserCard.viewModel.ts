/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useSession } from 'next-auth/react';
import { useToPng } from '@hugocxl/react-to-image';
import { toast } from 'sonner';
import useGetTopTracks from '@/server/topTracks/queries';
import useAudioFeatures from '@/server/audioFeatures/queries';
import calculateAverage, { AudioFeature } from '@/utils/calculateAverage';

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

  const arrayText = Array(40).fill(`${session?.user?.name}`).join(' ');

  return {
    session,
    waktu,
    arrayText,
    convert,
    ref,
    scaledFeatures,
  };
};

export default UserCardViewModel;
