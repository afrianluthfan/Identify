import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: 'https://identi-fy.live/',
    lastModified: new Date(),
  },
];

export default sitemap;
