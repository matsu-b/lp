# CLAUDE.md

東舟（とうしゅう）の職人スキルボード。GitHub Pagesでホスティングしている簡易Webアプリ。

## 構成

- `skill-board.html` — 単一ファイル構成（HTML + CSS + JS）。この `lp/toshu/` 配下が実体。
- データソース：Google Sheets（gviz API経由でクライアントサイドから取得）
- 認証：クライアントサイドのパスワード認証（SHA-256ハッシュ）

## デプロイ（本番）

- 本番は **この `lp` リポジトリ**。GitHub Pages（`main` ブランチ `/` ルート）で配信。
- 本番URL: https://matsu-b.github.io/lp/toshu/skill-board.html
- `main` に push すれば自動デプロイ（GitHub Pages ビルドに数分のラグあり）。
- 注意: 過去メモにある独立リポジトリ `toshu-skill-board` および `life/.../skill-board/index.html`
  は**存在しない**（2026-06 時点）。スキルボードは `lp/toshu/` 配下へ移行済みで、
  このファイルが唯一の正・本番。別リポジトリへの同期は不要。

## スプシ連携

- シートID: `1UoTqFGf2SwC2KoKREJ1Ib7co5jrSlVJo0esfw2rPdlE`
- 「設定」タブ:
  - **A列** = 評価期間（YYYY-MM）
  - **B列** = 公開設定。`discoverPeriods()` は **B列が「公開」の期間のみ**表示する。
    （空欄・「非公開」・その他はすべて非表示）
  - 運用: 評価データ入力中の月はB列を「非公開」にしておき、完成したらB列を「公開」に
    変えるだけで本番表示される（コード変更・push 不要）。
- 各月次タブは同一レイアウト（1行目ヘッダー、2行目〜データ）。

## テスト版（staging）

- 本番に出す前の確認用。`staging/skill-board.html` が実体で、本番と同じ `main` push で配信される。
- URL: https://matsu-b.github.io/lp/toshu/staging/skill-board.html （画面に「テスト版」バッジを表示）
- 本番と違う点（2026-10 時点）: 職種切替「職人｜立会」。立会は別シート
  `1UmC7RnCGkoAhzsIDrgtThVUbbkptx_Lrc1Kit61J4B4`（株式会社東舟_立会ランクシート、評価者は上原さん）を読む。
  `?job=tachiai` を付けたURLで立会側を直接開ける。
- 流れ: staging で matsu → 上原さんと確認 → OK なら `staging/skill-board.html` を `skill-board.html` に
  コピーして本番反映（テスト版バッジは外す）。
