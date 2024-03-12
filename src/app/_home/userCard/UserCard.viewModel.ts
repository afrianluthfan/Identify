/* eslint-disable no-confusing-arrow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useSession } from 'next-auth/react';
import { useToPng } from '@hugocxl/react-to-image';
import { toast } from 'sonner';
import useGetTopTracks from '@/server/topTracks/queries';
import useAudioFeatures from '@/server/audioFeatures/queries';

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

  const scaledFeatures = {
    valence: avgValence * 100,
    danceability: avgDanceability * 100,
    energy: avgEnergy * 100,
    accousticness: avgAccousticness * 100,
    speechiness: avgSpeechiness * 100,
  };

  let target = 0;
  const value = 0;
  const maxFeat = {
    key: value,
  };

  if (scaledFeatures.valence > scaledFeatures.danceability) {
    maxFeat.key = scaledFeatures.valence;
    target = 1;
  } else {
    maxFeat.key = scaledFeatures.danceability;
    target = 2;
  }

  if (scaledFeatures.energy > scaledFeatures.accousticness) {
    maxFeat.key = scaledFeatures.energy;
    target = 3;
  } else {
    maxFeat.key = scaledFeatures.accousticness;
    target = 4;
  }

  if (scaledFeatures.speechiness > maxFeat.key) {
    maxFeat.key = scaledFeatures.speechiness;
    target = 5;
  }

  const arrayText = Array(40).fill(`${session?.user?.name}`).join(' ');

  return {
    session,
    waktu,
    arrayText,
    convert,
    ref,
    scaledFeatures,
    maxFeat,
    target,
  };
};

export default UserCardViewModel;
