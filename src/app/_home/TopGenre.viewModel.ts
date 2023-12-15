import useGetTopArtists from '@/server/topArtists/queries';
import { useSession } from 'next-auth/react';

const TopGenreViewModel = () => {
  const { data: session } = useSession();

  const { data: topArtists } = useGetTopArtists(
    session?.accessToken ?? '',
    '50',
  );
  const topGenres = topArtists?.map((artist) => artist.genres);

  const genreCounts: Record<string, number> = {};

  topGenres?.forEach((genreArray) => {
    genreArray.forEach((genre) => {
      if (genre in genreCounts) {
        genreCounts[genre] += 1;
      } else {
        genreCounts[genre] = 1;
      }
    });
  });

  const genreCountPairs = Object.entries(genreCounts);

  genreCountPairs.sort((a, b) => b[1] - a[1]);

  const sortedGenres = genreCountPairs.map((pair) => pair[0]);

  const top10Genres = sortedGenres.slice(0, 10);

  return {
    top10Genres,
  };
};

export default TopGenreViewModel;
