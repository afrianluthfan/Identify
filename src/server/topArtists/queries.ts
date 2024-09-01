import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Artist } from 'spotify-types';

const baseURL = 'https://api.spotify.com/v1/me';

type Term = 'short_term' | 'medium_term' | 'long_term';

const fetchTopArtists = async (token: string, term: Term, limit: string) => {
  const { data } = await axios.get(
    `${baseURL}/top/artists?time_range=${term}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.items as Artist[];
};

const useGetTopArtists = (accessToken: string, term: Term, limit: string) =>
  useQuery({
    queryKey: ['artists', accessToken, term, limit],
    queryFn: ({ queryKey }) => {
      const [, token, fetchTerm, fetchLimit] = queryKey;
      return fetchTopArtists(token ?? '', fetchTerm as Term, fetchLimit ?? '');
    },
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
  });

export default useGetTopArtists;
