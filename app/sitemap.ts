import type { MetadataRoute } from 'next';
import { artigos } from '@/lib/artigos-data';

const SITE = 'https://www.gisellymoraisadvogada.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = artigos.map((a) => ({
    url: `${SITE}/artigos/${a.slug}`,
    lastModified: new Date(a.dataModificacao),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE}/artigos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles,
  ];
}
