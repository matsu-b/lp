# CLAUDE.md

東舟（とうしゅう）の職人スキルボード。GitHub Pagesでホスティングしている簡易Webアプリ。

## 構成

- `index.html` — 単一ファイル構成（HTML + CSS + JS）
- データソース：Google Sheets（gviz API経由でクライアントサイドから取得）
- 認証：クライアントサイドのパスワード認証（SHA-256ハッシュ）

## 同期ルール

このリポジトリの `index.html` は `life` リポジトリにもコピーが存在する。

| ファイル | 正 | コピー |
|---------|---|-------|
| `index.html` | `toshu-skill-board/index.html` | `life/work/resta/PJ-TS/skill-board/index.html` |

- **変更時は必ず両方を同期すること**
- どちらのリポジトリで変更しても、もう一方に同じ変更を反映する
- life側はテスト・開発用、toshu-skill-board側が本番デプロイ先

## デプロイ

- GitHub Pages（masterブランチ `/` ディレクトリ）
- URL: https://matsu-b.github.io/toshu-skill-board/
- pushすれば自動デプロイ

## スプシ連携

- シートID: `1UoTqFGf2SwC2KoKREJ1Ib7co5jrSlVJo0esfw2rPdlE`
- 「設定」タブのA列に評価期間（YYYY-MM）を記載 → アプリが自動読み取り
- 各月次タブは同一レイアウト（1行目ヘッダー、2行目〜データ）
