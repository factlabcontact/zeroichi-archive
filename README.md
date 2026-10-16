# NextStage Business Archive

Next.js App Router + Tailwind CSS。運営者確認用の制作版です。

## 最短の公開手順

1. GitHubで `zeroichi-archive` という空のリポジトリを作成します。
2. このフォルダの中身（app・libフォルダと各設定ファイル）を「Add file → Upload files」で一括アップロードします。ZIPそのものをアップロードしないでください。
3. Vercelの「Add New → Project」でこのリポジトリを選択し「Deploy」を押します。FrameworkはNext.js、Root Directoryは空欄です。

初期状態では検索掲載を抑止しています。運営主体と情報が未確認のため、このままの検索公開は想定していません。

## 確認後に行う編集

- app/page.tsx：運営者・販売事業者・責任者・住所・電話・連絡先・価格・追加費用・支払・提供時期・解約返金条件を実際の資料に合わせて記載。
- 実際のカリキュラム、提供実績、本人と各法人・サービスの関係を確認。計画欄を実際の情報に置き換える。
- プライバシー方針と問い合わせ先を実際の運用に合わせて完成。
- 運営者の承認後、公式名称と管理主体を明記。第三者メディアを装わない。
- Vercel Settings → Environment Variables：NEXT_PUBLIC_SITE_URLを確定URLに、PUBLISH_READYをtrueに設定し再デプロイ。

PUBLISH_READYはnoindexとrobots・サイトマップだけを切り替えます。本文の確認待ち箇所は自動で完成しません。noindexは閲覧制限ではありません。

## ローカル確認

Node.js 20.9以上で `corepack pnpm install --frozen-lockfile` → `corepack pnpm dev`。
本番確認は `npm run build`。依存の確定版はpnpm-lock.yamlを参照。

## 出典

名古屋市告示第581号（2025年11月28日）、PDF3ページ。
https://www.city.nagoya.jp/shikouhou/_res/projects/project_kouhou/_page_/002/000/594/2000583_1.pdf
確認日：2026年10月16日。指定日は2025年9月1日。現在の継続状況や別事業の行政承認はこの資料から断定しません。

検索順位を保証する仕組みではありません。関連情報・原資料・更新履歴を継続して充実させるための構成です。
