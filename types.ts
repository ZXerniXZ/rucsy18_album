export interface Photo {
  id: string;
  url: string; // The display URL (thumbnail or optimized)
  downloadUrl?: string; // The high-res download URL (optional, fallback to url)
  caption?: string;
  width?: number;
  height?: number;
}

export type AlbumSection = 'ragazzi' | 'genitori';

export interface AlbumConfig {
  title: string;
  subtitle: string;
  description: string;
  theme: 'dark' | 'light';
  password?: string; // Access code for the album
  photos: Photo[];
}