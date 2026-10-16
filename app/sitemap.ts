import type { MetadataRoute } from 'next';
import { ready, siteUrl } from '../lib/site';
export default function sitemap():MetadataRoute.Sitemap{return ready&&siteUrl?[{url:siteUrl,lastModified:'2026-10-16'}]:[]}
