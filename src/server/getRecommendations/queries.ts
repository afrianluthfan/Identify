import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Artist, Track } from 'spotify-types';
import { Recommendations } from '@/types/spotify-types';

const baseURL = 'https://api.spotify.com/v1/recommendations?';

const fetchRecommendations = async (
  accessToken: string,
  allTimeArtistIDs: Artist[],
  currentArtistIDs: Artist[],
  allTimeTrackIDs: Track[],
  currentTrackIDs: Track[],
  market: string,
) => {
  let url = baseURL;

  if (
    allTimeArtistIDs.length > 0 &&
    allTimeTrackIDs.length > 0 &&
    currentArtistIDs.length > 0 &&
    currentTrackIDs.length > 0
  ) {
    url += `seed_artists=${
      allTimeArtistIDs[Math.floor(Math.random() * allTimeArtistIDs.length)]?.id
    },${
      currentArtistIDs[Math.floor(Math.random() * currentArtistIDs.length)]?.id
    }&seed_tracks=${
      allTimeTrackIDs[Math.floor(Math.random() * allTimeTrackIDs.length)]?.id
    },${
      currentTrackIDs[Math.floor(Math.random() * currentTrackIDs.length)]?.id
    }`;
  } else if (
    allTimeArtistIDs.length > 0 &&
    allTimeTrackIDs.length > 0 &&
    currentArtistIDs.length <= 0 &&
    currentTrackIDs.length <= 0
  ) {
    url += `seed_artists=${
      allTimeArtistIDs[Math.floor(Math.random() * allTimeArtistIDs.length)]?.id
    }&seed_tracks=${
      allTimeTrackIDs[Math.floor(Math.random() * allTimeTrackIDs.length)]?.id
    }`;
  } else {
    url += `seed_artists=${
      currentArtistIDs[Math.floor(Math.random() * currentArtistIDs.length)]?.id
    }&seed_tracks=${
      currentTrackIDs[Math.floor(Math.random() * currentTrackIDs.length)]?.id
    }`;
  }

  url += `&market=${market}&max_popularity=55&min_popularity=15&limit=5`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data as Recommendations;
};

const useGetRecommendations = (
  accessToken: string,
  allTimeArtistIDs: Artist[],
  currentArtistIDs: Artist[],
  allTimeTrackIDs: Track[],
  currentTrackIDs: Track[],
  market: string,
) =>
  useQuery({
    queryKey: [
      'recommendations',
      accessToken,
      allTimeArtistIDs,
      currentArtistIDs,
      allTimeTrackIDs,
      currentTrackIDs,
      market,
    ],
    queryFn: ({ queryKey }) => {
      const [
        ,
        token,
        allTimeArtists,
        currentArtists,
        allTimeTracks,
        currentTracks,
        userMarket,
      ] = queryKey as [
        string,
        string,
        Artist[],
        Artist[],
        Track[],
        Track[],
        string,
      ];
      return fetchRecommendations(
        token,
        allTimeArtists,
        currentArtists,
        allTimeTracks,
        currentTracks,
        userMarket,
      );
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
  });

export default useGetRecommendations;
