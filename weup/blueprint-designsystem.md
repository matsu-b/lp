# BLUEPRINT Design System

This document defines the reusable visual system for BLUEPRINT landing pages and service pages. It is based on the provided brand reference image and the mobile LP reference, and should be used for both PC and smartphone layouts.

## 1. Brand Principles

BLUEPRINT is a career school for field professionals. The design should feel practical, trustworthy, energetic, and career-oriented.

Use the system to create pages that communicate:

- Technical credibility and qualification support
- A clear path from learning to career change
- Blue-based trust with yellow CTA energy
- Dense but readable information blocks
- Strong mobile readability and conversion flow

Avoid:

- Decorative gradients that do not support the service message
- Overly soft, beige, or lifestyle-only palettes
- Large rounded cards that feel unrelated to the existing LP
- Marketing copy blocks without clear CTA or next action
- Mobile pages that simply shrink the PC layout

## 2. Logo

### Logo Type

- Text: `BLUEPRINT`
- Logo font: `Boldonse`
- Use the logo font only for the service logo.
- Do not use `Boldonse` for headings, body, buttons, or section labels.

### Logo Color

- Default logo color: `#0A3279`
- On dark blue footer or dark image overlays: `#FFFFFF`
- In monochrome documents: `#111111`

### Logo Usage

- PC header logo height target: `24px` to `32px`
- Mobile header logo height target: `12px` to `16px`
- Keep enough clear space around the logo: at least `0.5x` the logo height.
- Do not stretch the logo horizontally or vertically.

## 3. Color Tokens

### Core Brand Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `--bp-primary` | `#0A3279` | Main brand blue, headings, section titles, dark labels |
| `--bp-secondary` | `#F6BF38` | CTA buttons, highlights, step 3 accents |
| `--bp-tertiary` | `#F6BF38` | Same as secondary in the reference; reserve as alias for accent variants |
| `--bp-bg` | `#EFF5FF` | Light blue section backgrounds |
| `--bp-bg-attention` | `#FFFBCF` | Soft attention background, callouts, notices |

### Extended Functional Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `--bp-blue-900` | `#06265D` | Dark text on blue areas, deeper footer backgrounds |
| `--bp-blue-800` | `#0A3279` | Primary brand applications |
| `--bp-blue-700` | `#164DA3` | Links, icons, active states |
| `--bp-blue-600` | `#4A82E6` | Supporting blue, small icons, progress accents |
| `--bp-blue-100` | `#EFF5FF` | Section tint |
| `--bp-blue-050` | `#F7FAFF` | Cards on white or blue backgrounds |
| `--bp-yellow-600` | `#F6BF38` | Main CTA |
| `--bp-yellow-700` | `#E9A90B` | CTA bottom shadow or pressed state |
| `--bp-text` | `#102A4D` | Main body text |
| `--bp-muted` | `#55708E` | Captions and support text |
| `--bp-line` | `#C9DEF6` | Card borders, tables, dividers |
| `--bp-white` | `#FFFFFF` | Surface |

### Color Rules

- Headings should use `--bp-primary`.
- CTA buttons should use yellow with blue text.
- Use `--bp-bg` for alternating LP sections.
- Use white cards on `--bp-bg`.
- Use blue labels for key concepts such as `資格取得`, `キャリア設計`, `転職支援`.
- Use yellow sparingly. It should signal action, importance, or the final step.
- For dark final CTA sections, use a blue image overlay and white text.

## 4. Typography

### Font Families

```css
--bp-font-logo: "Boldonse", sans-serif;
--bp-font-sans: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif;
```

Use `Noto Sans JP` or the local Japanese system font stack for all UI and LP content.

### PC Type Scale

| Role | Size | Weight | Line height | Usage |
| --- | ---: | ---: | ---: | --- |
| Hero | `72px` | `900` | `1.12` | PC first-view main statement |
| H1 | `40px` | `900` | `1.35` | Page or major section headline |
| H2 | `32px` | `900` | `1.4` | Section headline |
| Title Strong | `24px` | `900` | `1.45` | Card groups, feature blocks |
| Title Regular | `24px` | `500` | `1.45` | Supporting title |
| Subtitle Strong | `20px` | `900` | `1.5` | Subsection emphasis |
| Subtitle Regular | `20px` | `500` | `1.5` | Subsection text |
| Body Base | `16px` | `400` | `1.8` | Main body |
| Body Base Strong | `16px` | `700` | `1.8` | Important body |
| Body Medium | `14px` | `400` | `1.75` | Cards, tables |
| Body Medium Strong | `14px` | `700` | `1.75` | Card headings |
| Body Small | `12px` | `400` | `1.7` | Captions, metadata |
| Body Small Strong | `12px` | `700` | `1.7` | Labels |
| Caption | `11px` | `400` | `1.6` | Notes |

### Mobile Type Scale

| Role | Size | Weight | Line height | Usage |
| --- | ---: | ---: | ---: | --- |
| Mobile Hero | `25px` to `30px` | `900` | `1.32` | First-view headline |
| Mobile H1 | `22px` to `26px` | `900` | `1.38` | Page-level heading |
| Mobile H2 | `16px` to `20px` | `900` | `1.45` | Section heading |
| Mobile Title | `13px` to `15px` | `900` | `1.5` | Card group titles |
| Mobile Body | `10px` to `13px` | `400` | `1.75` | LP body text |
| Mobile Card Text | `7px` to `10px` | `400` | `1.55` | Dense cards and tables |
| Mobile Caption | `7px` to `9px` | `400` | `1.5` | Notes under CTA |

### Typography Rules

- Use bold blue headlines for important claims.
- Keep Japanese headline line breaks intentional.
- Mobile hero text should not exceed 3 to 4 lines.
- Avoid negative letter spacing.
- Body copy should use generous line height rather than larger font size.
- Dense mobile tables may use very small text, but only when the layout is visual-reference-oriented. For production readability, prefer `10px+`.

## 5. Spacing

### Base Spacing Scale

| Token | Value |
| --- | ---: |
| `--space-2xs` | `4px` |
| `--space-xs` | `8px` |
| `--space-sm` | `12px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `64px` |
| `--space-4xl` | `96px` |

### Section Spacing

| Context | PC | Mobile |
| --- | ---: | ---: |
| Section vertical padding | `72px` to `96px` | `38px` to `56px` |
| Section horizontal padding | `40px` to `64px` | `18px` to `24px` |
| Title to content | `32px` to `48px` | `18px` to `28px` |
| CTA block top margin | `32px` to `40px` | `20px` to `28px` |
| Card gap | `24px` to `32px` | `8px` to `14px` |

### Layout Widths

| Context | Width |
| --- | ---: |
| PC page max content | `1120px` |
| PC narrow content | `880px` |
| PC table/flow max width | `960px` |
| Mobile design frame | `390px` |
| Mobile safe inner width | `286px` to `330px` |

## 6. Radius, Border, Shadow

### Radius

- Small cards: `3px` to `5px`
- Standard cards: `8px`
- CTA buttons: `999px`
- Icon circles: `50%`
- Avoid very large card radius unless it is a pill button or icon.

### Borders

- Default border: `1px solid #C9DEF6`
- Light border: `1px solid #E2EDFA`
- Dark section separators: avoid visible borders; use spacing and color contrast.

### Shadows

Use subtle shadows only for cards that sit on light blue backgrounds.

```css
--bp-shadow-card: 0 10px 24px rgba(0, 55, 118, .12);
--bp-shadow-soft: 0 6px 14px rgba(0, 55, 118, .08);
```

Do not use heavy black shadows.

## 7. Imagery

### Image Direction

Use realistic images connected to:

- Field work
- Qualification learning
- Career counseling
- Office consultation
- Tools, site work, electrical/construction context
- Confident working adults

### Image Treatment

- Hero: left and right people images with a bright white/blue center copy area.
- Feature cards: rectangular images on top, text below.
- Final CTA: dark blue image overlay with white copy.
- Avoid purely abstract stock backgrounds.
- Avoid dark cropped images where the subject cannot be inspected.

### Overlay Rules

For final CTA sections:

```css
background:
  linear-gradient(180deg, rgba(0, 57, 128, .82), rgba(0, 40, 92, .92)),
  url("...") center/cover;
```

For hero side images:

```css
background-image:
  linear-gradient(90deg, rgba(0, 46, 100, .15), rgba(255,255,255,.15)),
  url("...");
```

## 8. Layout System

### PC Layout

Use a centered page container:

```css
.bp-container {
  width: min(1120px, calc(100% - 80px));
  margin: 0 auto;
}
```

Recommended PC patterns:

- Hero: 3-column image/copy/image composition or image background with centered copy.
- Worry cards: 4-column grid.
- Support cards: 3-column grid.
- Steps: 3-column process panel.
- Reasons: 2x2 card grid.
- Qualification matrix: full-width comparison table.
- Career cards: 2-column grid.
- Price: centered pricing card.

### Mobile Layout

Use a 390px reference frame but allow full viewport scaling:

```css
.bp-page {
  max-width: 390px;
  margin: 0 auto;
  background: #fff;
}
```

Recommended mobile patterns:

- Hero: compact 3-column image/copy/image composition if matching the reference, or image-top/copy-bottom if readability is more important.
- Worry cards: 4 columns for visual fidelity, 2 columns for production readability.
- Support cards: 3 columns for compact visual section, 1 column for content-heavy pages.
- Reasons: 2 columns.
- Tables: use compressed comparison table only for short text.
- Price: centered card with strong monthly price.
- CTA: repeat after major sections.

### Breakpoints

```css
--bp-mobile: 390px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-wide: 1280px;
```

Implementation:

```css
@media (max-width: 767px) {
  /* mobile */
}

@media (min-width: 768px) {
  /* tablet and desktop */
}

@media (min-width: 1024px) {
  /* PC */
}
```

## 9. Components

### Header

Purpose: brand recognition and immediate counseling CTA.

PC:

- Height: `64px` to `76px`
- Logo left
- Supporting text or nav center
- CTA button right

Mobile:

- Height: `34px` to `44px`
- Logo left
- Short support text if space allows
- Small CTA pill right

### CTA Button

Use for all primary actions.

```css
.bp-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 28px;
  border: 0;
  border-radius: 999px;
  color: #0A3279;
  background: linear-gradient(180deg, #F6BF38, #E9A90B);
  box-shadow: inset 0 -2px 0 rgba(128, 73, 0, .22), 0 5px 10px rgba(0, 60, 130, .12);
  font-weight: 900;
}
```

Mobile compact variant:

```css
.bp-cta--mobile {
  min-height: 27px;
  padding: 0 22px;
  font-size: 9px;
}
```

Rules:

- Button text should be action-oriented: `無料カウンセリングに申し込む`
- Use one primary CTA per visible block.
- Repeat after Reasons, Flow, Price, and Final CTA.
- Avoid multiple yellow buttons in the same small viewport.

### Section Title

```css
.bp-section-title {
  margin: 0 0 32px;
  color: #0A3279;
  text-align: center;
  font-size: 32px;
  line-height: 1.4;
  font-weight: 900;
}
```

Mobile:

```css
.bp-section-title {
  margin-bottom: 18px;
  font-size: 16px;
  line-height: 1.45;
}
```

### Worry Card

Use for `こんな悩み、ありませんか？`.

- PC: 4 columns
- Mobile: 4 columns for compact reference; 2 columns for readable production pages
- Background: `#F7FAFF`
- Border: light blue
- Icon: thin blue circle
- Text: small, bold, blue

### Blue Label

Use for key concepts:

- `資格取得`
- `キャリア設計`
- `転職支援`

Style:

```css
.bp-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 6px 12px;
  background: #0A3279;
  color: #fff;
  font-weight: 900;
}
```

### Support Card

Use for the three core support pillars.

- White card
- Blue circular icon
- Blue title
- Muted body
- Subtle shadow
- PC: 3 columns
- Mobile: 3 compact columns or 1 column if content grows

### Step Panel

Use for `キャリアの3ステップ`.

Structure:

1. Colored step headers
2. Three image cards
3. Summary note

Colors:

- STEP 1: primary blue
- STEP 2: supporting blue
- STEP 3: yellow/orange

### Reason Card

Use for `BLUEPRINTが選ばれる4つの理由`.

- PC: 2x2 grid
- Mobile: 2x2 compact grid
- Image top
- Text body below
- Blue icon bullet before title
- Border in `--bp-line`

### Qualification Card and Matrix

Use for `学べる資格`.

Qualification card:

- Small white card
- Icon on left
- Qualification name and category text

Matrix:

- Light blue header
- Blue check marks
- Highlight final column in strong blue
- Keep text short

### Flow Diagram

Use for `BLUEPRINTの全体の流れ`.

Recommended structure:

- Left vertical phase label
- Main learning process grid
- Vertical support columns
- Yellow career/change column on the right

Rules:

- Keep it diagrammatic.
- Use compact labels, not paragraphs.
- Use yellow only for transition/outcome.

### Career Card

Use for `BLUEPRINTで変わる、あなたのキャリア`.

- White card on blue-tinted background
- Small pill tag
- Role title
- Short description
- Two salary/stat blocks

### Price Card

Use for `ご利用料金`.

- Centered white card
- Pale blue pill label
- Large monthly price
- Blue check list
- Yellow CTA
- Pale blue note box

Price styling:

- Monthly price number: largest element in the card
- Currency suffix smaller
- Do not crowd with too many notes above the CTA

### Guarantee Card

Use for refund or reassurance content.

- White card
- Shield/check icon on left
- Strong blue headline
- Short muted explanation

### Final CTA Section

Use at the end of LP.

- Dark blue image overlay
- White centered copy
- Strong emotional headline
- Yellow CTA
- Footer immediately after

## 10. Page Composition Pattern

Recommended LP order:

1. Header
2. Hero
3. Worry section
4. BLUEPRINT solution section
5. Career 3 steps
6. Reasons to choose BLUEPRINT
7. Qualifications
8. Overall flow
9. Career outcomes
10. Price
11. Guarantee
12. Final CTA
13. Footer

## 11. Responsive Conversion Rules

### PC to Mobile

When converting a PC layout to mobile:

- Preserve section order unless CTA flow improves by moving price or guarantee earlier.
- Convert wide grids to compact 2-column or 1-column layouts.
- Keep major CTA buttons visible after high-intent sections.
- Reduce image count only when it harms loading or readability.
- Keep flow diagrams visual, but simplify text.
- Avoid horizontal scrolling except for tables with a clear affordance.

### Mobile to PC

When expanding mobile to PC:

- Do not simply scale up the 390px layout.
- Use wider grids and larger type scale.
- Increase vertical spacing to restore premium feel.
- Allow imagery to breathe.
- Keep CTA positions predictable.

## 12. Implementation CSS Starter

Use this as the starting token block for future pages.

```css
:root {
  --bp-primary: #0A3279;
  --bp-secondary: #F6BF38;
  --bp-tertiary: #F6BF38;
  --bp-bg: #EFF5FF;
  --bp-bg-attention: #FFFBCF;

  --bp-blue-900: #06265D;
  --bp-blue-800: #0A3279;
  --bp-blue-700: #164DA3;
  --bp-blue-600: #4A82E6;
  --bp-blue-100: #EFF5FF;
  --bp-blue-050: #F7FAFF;
  --bp-yellow-600: #F6BF38;
  --bp-yellow-700: #E9A90B;
  --bp-text: #102A4D;
  --bp-muted: #55708E;
  --bp-line: #C9DEF6;
  --bp-white: #FFFFFF;

  --bp-font-logo: "Boldonse", sans-serif;
  --bp-font-sans: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif;

  --bp-radius-sm: 4px;
  --bp-radius-md: 8px;
  --bp-radius-pill: 999px;
  --bp-shadow-card: 0 10px 24px rgba(0, 55, 118, .12);
  --bp-shadow-soft: 0 6px 14px rgba(0, 55, 118, .08);

  --bp-container-pc: 1120px;
  --bp-frame-mobile: 390px;
}

body {
  color: var(--bp-text);
  font-family: var(--bp-font-sans);
  letter-spacing: 0;
}

.bp-container {
  width: min(var(--bp-container-pc), calc(100% - 80px));
  margin: 0 auto;
}

.bp-section {
  padding: 88px 0;
}

.bp-section--tint {
  background: var(--bp-bg);
}

.bp-section-title {
  margin: 0 0 32px;
  color: var(--bp-primary);
  text-align: center;
  font-size: 32px;
  line-height: 1.4;
  font-weight: 900;
}

.bp-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 28px;
  border: 0;
  border-radius: var(--bp-radius-pill);
  color: var(--bp-primary);
  background: linear-gradient(180deg, var(--bp-yellow-600), var(--bp-yellow-700));
  box-shadow: inset 0 -2px 0 rgba(128, 73, 0, .22), 0 5px 10px rgba(0, 60, 130, .12);
  font-weight: 900;
}

@media (max-width: 767px) {
  .bp-container {
    width: min(var(--bp-frame-mobile), 100%);
    padding: 0 18px;
  }

  .bp-section {
    padding: 44px 0;
  }

  .bp-section-title {
    margin-bottom: 18px;
    font-size: 16px;
    line-height: 1.45;
  }

  .bp-cta {
    min-height: 34px;
    padding: 0 22px;
    font-size: 11px;
  }
}
```

## 13. Quality Checklist

Before shipping a new BLUEPRINT page:

- Brand blue `#0A3279` is the dominant signal.
- Yellow is reserved for CTA/action/accent.
- Alternate sections use white and `#EFF5FF`.
- Logo uses `Boldonse` only.
- All section titles are blue and bold.
- CTA appears after high-intent sections.
- Mobile has no overlapping text.
- Mobile has no accidental horizontal scroll.
- Tables and diagrams remain legible at `390px`.
- PC layout uses wider composition instead of enlarged mobile cards.
- Images are relevant to field work, learning, or counseling.
- Final CTA uses a dark blue image overlay and a yellow button.
