import useGetTopArtists from '@/server/topArtists/queries';
import useGetRecommendations from '@/server/getRecommendations/queries';
import useGetTopTracks from '@/server/topTracks/queries';
import { useSession } from 'next-auth/react';
import { useQueryClient } from '@tanstack/react-query';

const RecommendationCardViewModel = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { data: allTimeArtists } = useGetTopArtists(
    session?.accessToken ?? '',
    'long_term',
    '50',
  );

  const { data: currentArtists } = useGetTopArtists(
    session?.accessToken ?? '',
    'short_term',
    '50',
  );

  const { data: allTimeTracks } = useGetTopTracks(
    session?.accessToken ?? '',
    'long_term',
    '50',
  );

  const { data: currentTracks } = useGetTopTracks(
    session?.accessToken ?? '',
    'short_term',
    '50',
  );

  const {
    data: Recommendations,
    isLoading,
    refetch,
  } = useGetRecommendations(
    session?.accessToken!,
    allTimeArtists!,
    currentArtists!,
    allTimeTracks!,
    currentTracks!,
    session?.user?.country!,
  );

  const handleRefresh = async () => {
    refetch();
    queryClient.invalidateQueries({
      queryKey: ['recommendations'],
      exact: true,
      refetchType: 'active',
    });
  };

  return {
    Recommendations,
    isLoading,
    handleRefresh,
  };
};

export default RecommendationCardViewModel;
