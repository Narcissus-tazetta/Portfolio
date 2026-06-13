# Prason Portfolio

[Prason (Narcissus-tazetta)](https://github.com/Narcissus-tazetta) の個人ポートフォリオサイトです。

**公開 URL:** https://narcissus-tazetta.github.io/Portfolio/

## 技術スタック

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4
- React Router 7
- Zustand（テーマ・言語・アクセント・UI 状態）
- Lucide React

GitHub Pages（`base: /Portfolio/`）へデプロイしています。

## 機能

- 日本語 / 英語の切り替え（選択を記憶）
- ライト / ダーク / システムテーマ
- 作品詳細ページ（`/works/:id`）— GitHub・Demo・Release リンク
- カスタム 404 ページ
- OGP メタタグ + `public/og.png`
- 初回ローディングバー（`?loaderMs=3000` でプレビュー）
- 隠しアクセント（ロゴを3回クリック）
- フッターの更新履歴（GitHub のコミットへリンク）

## 開発

```bash
bun install
bun run dev
```

| コマンド | 説明 |
|---------|------|
| `bun run build` | 本番ビルド → `dist/` |
| `bun run preview` | ビルド結果のプレビュー |
| `bun run tsc` | 型チェック |
| `bun run lint` | Oxlint |

ローダーのプレビュー: URL に `?loaderMs=3000` を付ける。

## ディレクトリ構成

```
src/
  components/     UI（Navbar, WorkHighlight, SiteFooter など）
  content/        文言・作品・ナビ・更新履歴（JA/EN）
  contexts/       Zustand を使うフック
  pages/          各ページ
  stores/         Zustand（設定 + UI）
  lib/            assetUrl, initialLoader など
public/
  works/          作品サムネイル
  og.png          OGP 画像
  avatar.png
```

文言は `src/content/`、作品画像は `public/works/` を編集してください。

## 更新履歴の追加

`src/content/updates.ts` を編集します。各項目に日付・メッセージ（JA/EN）・コミット SHA が必要です。

### git でコミットを調べる

直近のコミット一覧:

```bash
git log --oneline --format='%h %ad %s' --date=short
```

キーワードで検索:

```bash
git log --oneline --grep='LiveWallpaper'
```

短いハッシュからフル SHA を取得:

```bash
git rev-parse 955e573
```

GitHub の URL を組み立て:

```bash
echo "https://github.com/Narcissus-tazetta/Portfolio/commit/$(git rev-parse 955e573)"
```

最新コミットの日付・メッセージ・URL をまとめて表示:

```bash
sha=$(git rev-parse HEAD) && \
date=$(git log -1 --format='%ad' --date=short) && \
msg=$(git log -1 --format='%s') && \
echo "$date — $msg" && \
echo "https://github.com/Narcissus-tazetta/Portfolio/commit/$sha"
```

取得した内容を `src/content/updates.ts` の `siteUpdates` に追加してください（新しい順）。

## ライセンス

リポジトリの設定に従います。各作品リポジトリに MIT 等の記載がある場合はそちらを参照してください。
