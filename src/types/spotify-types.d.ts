import { SimplifiedTrack as SpotifySimplifiedTrack } from 'spotify-types';

export interface SimplifiedTrack extends SpotifySimplifiedTrack {
  album?: {
    images?: { url: string }[];
  };
}
