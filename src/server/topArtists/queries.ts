import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Artist } from 'spotify-types';

const baseURL = 'https://api.spotify.com/v1/me';

const fetchTopArtists = async (token: string, limit: string) => {
  const { data } = await axios.get(
    `${baseURL}/top/artists?time_range=medium_term&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.items as Artist[];
};

const useGetTopArtists = (accessToken: string, limit: string) =>
  useQuery({
    queryKey: ['artists', accessToken, limit],
    queryFn: ({ queryKey }) => {
      const [, token, fetchLimit] = queryKey;
      return fetchTopArtists(token, fetchLimit);
    },
  });

export default useGetTopArtists;
