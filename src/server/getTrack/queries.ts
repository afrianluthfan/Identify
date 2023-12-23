import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Track } from 'spotify-types';

const baseURL = 'https://api.spotify.com/v1';

const fetchTrack = async (token: string, id: string) => {
  const { data } = await axios.get(`${baseURL}/tracks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data as Track;
};

const useGetTrack = (token: string, id: string) =>
  useQuery({
    queryKey: ['track', token, id],
    queryFn: ({ queryKey }) => {
      const [, accessToken, trackID] = queryKey;
      return fetchTrack(accessToken ?? '', trackID ?? '');
    },
  });

export default useGetTrack;
