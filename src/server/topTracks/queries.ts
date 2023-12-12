import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Track } from 'spotify-types';

const baseURL = 'https://api.spotify.com/v1/me';

const fetchTopTracks = async (token: string, limit: string) => {
  const { data } = await axios.get(
    `${baseURL}/top/tracks?time_range=medium_term&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.items as Track[];
};

const useGetTopTracks = (accessToken: string, limit: string) =>
  useQuery({
    queryKey: ['tracks', accessToken, limit],
    queryFn: ({ queryKey }) => {
      const [, token, fetchLimit] = queryKey;
      return fetchTopTracks(token, fetchLimit);
    },
  });

export default useGetTopTracks;
