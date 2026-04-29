# Resta 会社説明資料 — デザイン設計書

## 概要

- **ファイル**: `corporate-slides.html`（1ファイル完結型、CSS/JS内包）
- **公開URL**: `https://matsu-b.github.io/lp/resta/corporate-slides.html`
- **デザインテーマ**: ダーク基調、ティール/オレンジ/パープルのアクセント、洗練・落ち着き
- **参考元**: hitecoプラットフォーム提案スライドのデザイン言語を流用

---

## カラーパレット

CSS変数として `:root` に定義。

| 変数 | 値 | 用途 |
|------|-----|------|
| `--bg` | `#0a0a0a` | ページ背景（深い黒） |
| `--surface` | `#111111` | カード・ボックス背景 |
| `--surface2` | `#161616` | ネストしたカード背景 |
| `--border` | `rgba(255,255,255,0.08)` | ボーダー |
| `--text` | `#f5f5f5` | メインテキスト |
| `--text-muted` | `rgba(245,245,245,0.5)` | サブテキスト |
| `--accent` | `#0D6E6E` | ティール（メインアクセント／事業） |
| `--accent-light` | `#12a0a0` | ティール明るめ（グラデ・リンク） |
| `--orange` | `#E07B54` | オレンジ（人・組織／強調数字） |
| `--orange-light` | `#f59a79` | オレンジ明るめ |
| `--purple` | `#8c64dc` | パープル（AI・システム） |
| `--purple-light` | `#b89eff` | パープル明るめ |

**3要素の色分け**:
- 事業 = ティール（`--accent`）
- 人・組織 = オレンジ（`--orange`）
- AI・システム = パープル（`--purple`）

---

## タイポグラフィ

- **フォント**: `-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif`
- **レスポンシブ**: 全箇所 `clamp()` で可変
- **基本方針**: 商談・対面プレゼンで遠目からでも読めるよう、全体的に大胆な大きめ設定

| 役割 | サイズ |
|------|--------|
| タイトルロゴ（H1） | `clamp(80px, 10vw, 160px)` |
| タイトルeyebrow | `clamp(15px, 1.5vw, 20px)` |
| タイトルtagline | `clamp(20px, 2.5vw, 32px)` |
| スライド見出し（H2） | `clamp(40px, 4.8vw, 72px)` |
| スライドラベル | `clamp(14px, 1.4vw, 18px)` |
| ミッションリード | `clamp(28px, 3.4vw, 48px)` |
| ミッションサブ | `clamp(17px, 1.6vw, 22px)` |
| カード見出し | `clamp(20px, 2.2vw, 28px)` |
| カード本文 | `clamp(16px, 1.5vw, 19px)` |
| Info table 値 | `clamp(17px, 1.6vw, 22px)` |
| 三角ノードラベル | `clamp(22px, 2.4vw, 28px)` |
| Offerサービス名 | `clamp(22px, 2.6vw, 32px)` |
| Caseディテール | `clamp(16px, 1.5vw, 19px)` |
| プロフィール名 | `32px` |
| プロフィール経歴 | `16px` |

**見出しのグラデーション**: `.slide-heading span` にティール系グラデ（135度）

**スライドコンテナ**: `.slide-content` の `max-width` は `1280px`（大きめフォントを受けて拡張）

---

## レイアウト構造

- **スライド形式**: 全画面（100vw × 100vh）1ページ1スライド
- **スライド遷移**: opacity transition 0.5s
- **コンテナ**: `.slide-content` max-width: 1100px

### 要素クラス

```
.slide                  — スライド本体
  .slide-content        — コンテンツ幅制御
    .slide-label        — 小見出し（ラベル）
    .slide-heading      — 大見出し（H2）
  .slide-scroll         — 縦スクロール可能版（事例スライドで使用）
```

---

## コンポーネント

### Card（`.card`）
- `background: var(--surface)`
- `border: 1px solid var(--border)`
- `border-radius: 14px`
- `padding: clamp(20px, 2.5vw, 32px)`

### Mission Box（`.mission-box`）
- 左に4pxのティールバー（`border-left`）
- 大見出し `.lead` + サブ `.sub` の2段構成

### Info Table（`.info-table`）
- 左カラム幅160px、サブテキスト色
- 行ごとに下線

### Profile Card（`.profile-card`）
- ROLE → 名前 → 英語名 → 経歴 の縦並び

### Tag（`.tag`）
- `.tag` ティール / `.tag-orange` / `.tag-purple`
- pill形、アウトライン風

### Flow Step（`.flow-step`）
- 横並び、`::after`で右向き矢印

### Case Card（`.case-card`）
- Grid 200px + 1fr
- 左：会社情報（ラベル+名前）
- 右：箇条書き詳細（`.case-detail li::before` でドット）
- `.case-highlight` でオレンジ強調

### Offer Item（`.offer-item`）
- 横並び: バー + アイコン + テキスト
- `.teal` / `.orange` / `.purple` のバリエーション

---

## 図表コンポーネント

### 三角循環図（`.triangle-diagram`）

**構造**: 620×520pxの絶対配置エリア（SVG viewBoxも `0 0 620 520`）

- `.tri-node.top` → 事業（ティールボーダー）
- `.tri-node.left` → 人・組織（オレンジボーダー）
- `.tri-node.right` → AI・システム（パープルボーダー）
- `.tri-center` → 中央の「循環」アイコン
- ノードには `box-shadow: 0 0 40px rgba(色, 0.15)` でglow

**矢印**: SVGで3辺を双方向矢印として描画
- `marker-start` と `marker-end` の両方を指定
- マーカーサイズ: `markerWidth=14, markerHeight=10`
- 線の始点・終点はノードの外側に配置（見切れ防止）
- 線の色: `rgba(色, 0.4)`、矢印: `rgba(色, 0.7)`

**提供領域スライド用のミニ三角図**（`.offer-tri-mini`）
- 400×360pxの縮小版を左カラムに配置
- 右カラムに3サービスのリスト（`.offer-list`）

### Positioning図（`.positioning-flow`）

立ち位置スライド（10枚目）専用の横フロー図。

- 7カラムGrid: `1.1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr`
- 構成: `Solutions → Resta → Client → People`
- 各ボックスの色分け:
  - Resta = ティール（`--accent`） + glow
  - Client = パープル（`--purple`）
  - People = オレンジ（`--orange`）
- 矢印は `.pos-arrow-line`（グラデの細線 + CSS三角の先端）
- 下部に `.pos-message` ボックスでメッセージを強調

### レポート図（`.report-grid`）
- 3カラムのアイコン+ラベル形式
- `.report-item` に `.ri-icon` と `.ri-label`

---

## アニメーション

### タイトルロゴのglow
```css
@keyframes glow {
  from { filter: drop-shadow(0 0 30px rgba(18,160,160,0.2)); }
  to   { filter: drop-shadow(0 0 50px rgba(18,160,160,0.45)); }
}
```
- `.slide-title h1` に 3s ease-in-out infinite alternate で適用

### Glow accent helpers
- `.glow-teal` / `.glow-orange` / `.glow-purple` — カードに淡い色付きの影

---

## ナビゲーション

### 左上ロゴ（`#logo-top`）
- `position: fixed; top: 24px; left: 32px;`
- 1ページ目（タイトル）では非表示、2ページ目以降でフェードイン
- JS `updateLogo()` で `.visible` クラスをトグル

### ボトムナビ（`#nav`）
- fixed底部中央、backdrop-blur
- 「←」「N / 10」「→」
- キーボード: ← / → / space で遷移

### 右上ドット（`#dots`）
- fixed右上、各スライドに1つ
- アクティブなものは横長のpill化

---

## 認証ゲート（`#auth-gate`）

### Flow
1. メール入力 → `checkAuth()` → GAS API `action: 'check'` を呼ぶ
2. 承認済みスプシに存在 → `sessionStorage.setItem('resta_auth', email)` → スライド表示
3. 未登録 → エラー表示 + リクエストフォーム（`#auth-step-request`）を自動展開
4. 「閲覧リクエストはこちら」リンクで直接フォームを開くことも可能
5. フォーム送信 → `action: 'request'` でスプシに保存

### バックエンド（Google Apps Script）
- ファイル: `gas-setup.js`（設定手順をヘッダコメントに記載）
- スプシ2シート構成:
  - `承認済み`: メール / 会社名 / 名前 / 役職 / 電話 / 最終閲覧日時
  - `リクエスト`: 申請日時 / 会社名 / 名前 / 役職 / メール / 電話 / 申し送り
- 通知先: `NOTIFY_EMAIL = 'matsubara@r-sta.com'`
- 閲覧時・リクエスト時にメール通知

### セッション
- `sessionStorage` で保持（タブを閉じるまで再認証不要）
- 恒久化したい場合は `localStorage` に変更

---

## スライド構成（全10枚）

| # | ID | タイトル | 主要コンポーネント |
|---|-----|----------|---------------------|
| 1 | `.slide-title` | Resta | H1ロゴ+tagline |
| 2 | About Us | 会社概要+代表紹介 | `.profile-layout`（info-table + profile-card） |
| 3 | Concept | 私たちが目指すもの | `.mission-box` |
| 4 | Growth Hack Framework | 私たちが考えるグロースハック | `.triangle-diagram` |
| 5 | What We Offer | Restaが提供するもの | `.offer-layout`（mini三角図 + `.offer-list`） |
| 6 | Case Study — Marketing | マーケティング事例 | `.case-cards` × 4 |
| 7 | Case Study — AI / DX | AI・DX事例 | `.case-cards` × 2 |
| 8 | Case Study — Retention | 人材定着事例 | `.case-cards` × 1 + `.report-grid` |
| 9 | Our Positioning | Restaの立ち位置 | `.positioning-flow` + `.pos-message` |
| 10 | Contact | グロースのためのミッション、ご用命ください | `.contact-box` + 日程調整ボタン |

---

## 編集時の注意点

### 新規スライド追加
1. `<div class="slide">` ブロックを `#slides` 内に追加
2. ナビの「N / 9」は自動計算されるため不要（JSが`slides.length`で自動更新）
3. カウンタ初期値 `1 / 10` だけは合計枚数に合わせて修正

### 色を使う際のルール
- 事業・売上関連 → ティール
- 人・組織・定着 → オレンジ
- AI・システム・DX → パープル
- 数字の強調（事例） → `.case-highlight`（オレンジライト）

### スクロール可能スライド
- 長いコンテンツは `.slide-scroll` クラスを `.slide-content` に追加
- 自動で縦スクロール + カスタムスクロールバー

### GASのURL変更時
- HTML内の `const GAS_URL = '...'` を差し替え

---

## 外部リンク

- **日程調整（TimeRex）**: `https://timerex.net/s/tadashi.matsubara_2398_9d81/e2a0370d`
  - iframe埋め込み不可 → ボタンリンク方式で使用
- **会社サイト**: `https://r-sta.com`
- **GitHub Repo**: `https://github.com/matsu-b/lp`

---

## トーン＆マナー

- 太字は控えめに（経歴テキストは太字NG）
- 「お気軽に」よりも「ご用命ください」「一緒に」など自信ある表現を選ぶ
- 答えを先出ししない構成（コンセプト → 3要素 → 提供内容 の順で段階的に見せる）
- 数字は具体的に（「たった3万円で30アポ」等）
