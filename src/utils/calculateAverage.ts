export type AudioFeature =
  | 'valence'
  | 'danceability'
  | 'energy'
  | 'acousticness'
  | 'speechiness';

interface AudioFeatureData {
  valence: number;
  danceability: number;
  energy: number;
  acousticness: number;
  speechiness: number;
}
const calculateAverage = (
  data: AudioFeatureData[] | undefined,
  feature: AudioFeature,
) => {
  if (!data) return 0;
  const total = data.reduce((sum, item) => sum + (item?.[feature] || 0), 0);
  return total / data.length;
};

export default calculateAverage;
