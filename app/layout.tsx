import type { Metadata } from 'next';
import './globals.css';
import {ready, siteUrl, title} from '../lib/site';
export const metadata: Metadata = {
  title: {default: title + '｜事業・プロジェクト資料室', template: '%s｜' + title},
  description: '事業の理念、提供内容、取引条件と出典資料を整理するプロジェクトアーカイブ。',
  ...(siteUrl ? {metadataBase: new URL(siteUrl), alternates: {canonical: '/'}} : {}),
  robots: {index: ready, follow: ready},
  openGraph: {title, description: '事業の背景と記録を、確かめられる情報から。', locale: 'ja_JP', type: 'website'},
};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
