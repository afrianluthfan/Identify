import {
  SimplifiedTrack,
  SimplifiedAlbum as SpotifySimplifiedAlbum,
  Recommendations as SpotifyRecommendations,
} from 'spotify-types';

export interface ExtendedSimplifiedTrack extends SimplifiedTrack {
  album: SpotifySimplifiedAlbum;
}

export interface Recommendations extends SpotifyRecommendations {
  tracks: ExtendedSimplifiedTrack[];
}

export interface SimplifiedAlbum extends SpotifySimplifiedAlbum {
  images: Image[];
}

export interface Image {
  url: string;
  height?: number;
  width?: number;
}
