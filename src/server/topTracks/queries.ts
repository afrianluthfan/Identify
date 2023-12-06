import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1/me';

const fetchTopTracks = async (token: string) => {
  const { data } = await axios.get(
    `${baseURL}/top/tracks?time_range=short_term`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

const useGetTopTracks = (accessToken: string) =>
  useQuery({
    queryKey: ['tracks', accessToken],
    queryFn: ({ queryKey }) => {
      const [, token] = queryKey;
      return fetchTopTracks(token);
    },
  });

export default useGetTopTracks;
