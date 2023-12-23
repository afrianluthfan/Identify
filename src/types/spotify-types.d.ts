import { SimplifiedTrack as SpotifySimplifiedTrack } from 'spotify-web-api-ts/types/types/SpotifyTypes';

export interface SimplifiedTrack extends SpotifySimplifiedTrack {
  album?: {
    images?: { url: string }[];
  };
}
