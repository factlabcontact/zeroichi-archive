import type { MetadataRoute } from 'next';
import { ready, siteUrl } from '../lib/site';
export default function robots(): MetadataRoute.Robots {return {rules:{userAgent:'*',...(ready?{allow:'/'}:{disallow:'/'})},...(ready&&siteUrl?{sitemap:siteUrl+'/sitemap.xml'}:{})}}
