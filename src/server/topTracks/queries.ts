import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Track } from 'spotify-types';

const baseURL = 'https://api.spotify.com/v1/me';

type Term = 'short_term' | 'medium_term' | 'long_term';

const fetchTopTracks = async (token: string, term: Term, limit: string) => {
  const { data } = await axios.get(
    `${baseURL}/top/tracks?time_range=${term}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.items as Track[];
};

const useGetTopTracks = (accessToken: string, term: Term, limit: string) =>
  useQuery({
    queryKey: ['tracks', accessToken, term, limit],
    queryFn: ({ queryKey }) => {
      const [, token, fetchTerm, fetchLimit] = queryKey;
      return fetchTopTracks(token, fetchTerm as Term, fetchLimit);
    },
  });

export default useGetTopTracks;
