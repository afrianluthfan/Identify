import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1/me';

const useGetTopTracks = (accessToken: string) =>
  useQuery({
    queryKey: ['tracks', accessToken],
    queryFn: async ({ queryKey }) => {
      const [, token] = queryKey;
      const { data } = await axios.get(
        `${baseURL}/top/tracks?time_range=long_term`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data;
    },
  });

export default useGetTopTracks;
