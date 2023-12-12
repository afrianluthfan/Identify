import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AudioFeatures } from 'spotify-types';

const baseURL = 'https://api.spotify.com/v1';

const fetchAudioFeatures = async (token: string, ids: string) => {
  const { data } = await axios.get(`${baseURL}/audio-features?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data as AudioFeatures[];
};

const useAudioFeatures = (token: string, ids: string) =>
  useQuery({
    queryKey: ['audioFeatures', token, ids],
    queryFn: ({ queryKey }) => {
      const [, accessToken, trackID] = queryKey;
      return fetchAudioFeatures(accessToken, trackID);
    },
  });

export default useAudioFeatures;
