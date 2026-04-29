// ============================================================
// Google Apps Script — スプレッドシートに貼り付けるコード
// ============================================================
//
// 【セットアップ手順】
// 1. Google スプレッドシートを新規作成
// 2. シート名を「承認済み」にリネームし、1行目に以下のヘッダーを入力:
//    A1: メールアドレス / B1: 会社名 / C1: 名前 / D1: 役職 / E1: 電話番号 / F1: 最終閲覧日時
// 3. シートを追加し「リクエスト」にリネーム、1行目に以下のヘッダーを入力:
//    A1: 申請日時 / B1: 会社名 / C1: 名前 / D1: 役職 / E1: メールアドレス / F1: 電話番号 / G1: 申し送り事項 / H1: トークン / I1: ステータス
// 4. シートを追加し「閲覧ログ」にリネーム、1行目に以下のヘッダーを入力:
//    A1: 日時 / B1: メールアドレス / C1: 会社名 / D1: 名前 / E1: 資料名
// 5. 拡張機能 → Apps Script を開く
// 6. このコードを貼り付けて保存
// 7. デプロイ → 新しいデプロイ → ウェブアプリ
//    - 実行するユーザー: 自分
//    - アクセス: 全員
// 8. デプロイURLをコピーし、各HTMLファイルの GAS_URL に設定
//
// 【通知先メールアドレスを変更する場合】
// 下の NOTIFY_EMAIL を変更してください
// ============================================================

const NOTIFY_EMAIL = 'matsubara@r-sta.com'; // 通知先

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const data = JSON.parse(e.postData.contents);

  if (data.action === 'check') {
    return checkEmail(sheet, data.email, data.source || '不明');
  }

  if (data.action === 'request') {
    return saveRequest(sheet, data);
  }

  return jsonResponse({ status: 'error', message: 'Unknown action' });
}

function checkEmail(sheet, email, source) {
  const approved = sheet.getSheetByName('承認済み');
  const emails = approved.getRange('A2:A' + approved.getLastRow()).getValues().flat();
  const found = emails.some(e => e.toString().toLowerCase().trim() === email.toLowerCase().trim());

  if (found) {
    const row = emails.findIndex(e => e.toString().toLowerCase().trim() === email.toLowerCase().trim()) + 2;
    const name = approved.getRange(row, 3).getValue();
    const company = approved.getRange(row, 2).getValue();
    const now = new Date();

    // 最終閲覧日時を更新
    approved.getRange(row, 6).setValue(now);

    // 閲覧ログに追記
    const log = sheet.getSheetByName('閲覧ログ');
    if (log) {
      log.appendRow([now, email, company, name, source]);
    }

    // 閲覧通知
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: `【Resta】${company} ${name} 様が「${source}」を閲覧しました`,
      body: `${company} の ${name} 様が「${source}」にアクセスしました。\n\n日時: ${now.toLocaleString('ja-JP')}\nメール: ${email}`
    });

    return jsonResponse({ status: 'ok', approved: true });
  }

  return jsonResponse({ status: 'ok', approved: false });
}

function saveRequest(sheet, data) {
  const requests = sheet.getSheetByName('リクエスト');
  const token = Utilities.getUuid();
  const now = new Date();

  requests.appendRow([
    now,
    data.company,
    data.name,
    data.title,
    data.email,
    data.phone,
    data.note,
    token,
    '未処理'
  ]);

  // 承認URL
  const scriptUrl = ScriptApp.getService().getUrl();
  const approveUrl = `${scriptUrl}?action=approve&token=${token}`;

  // リクエスト通知（HTMLメール + 承認ボタン）
  const htmlBody = `
    <div style="font-family:sans-serif; line-height:1.7;">
      <p>閲覧リクエストがありました。</p>
      <table style="border-collapse:collapse; margin:16px 0;">
        <tr><td style="padding:6px 12px; color:#666;">会社名</td><td style="padding:6px 12px;"><b>${data.company}</b></td></tr>
        <tr><td style="padding:6px 12px; color:#666;">名前</td><td style="padding:6px 12px;"><b>${data.name}</b></td></tr>
        <tr><td style="padding:6px 12px; color:#666;">役職</td><td style="padding:6px 12px;">${data.title}</td></tr>
        <tr><td style="padding:6px 12px; color:#666;">メール</td><td style="padding:6px 12px;">${data.email}</td></tr>
        <tr><td style="padding:6px 12px; color:#666;">電話番号</td><td style="padding:6px 12px;">${data.phone}</td></tr>
        <tr><td style="padding:6px 12px; color:#666;">申し送り事項</td><td style="padding:6px 12px;">${data.note || 'なし'}</td></tr>
        <tr><td style="padding:6px 12px; color:#666;">日時</td><td style="padding:6px 12px;">${now.toLocaleString('ja-JP')}</td></tr>
      </table>
      <p style="margin-top:24px;">
        <a href="${approveUrl}" style="display:inline-block; background:#0D6E6E; color:#fff; text-decoration:none; padding:14px 32px; border-radius:8px; font-weight:600;">✓ 承認する</a>
      </p>
      <p style="font-size:12px; color:#888; margin-top:16px;">承認すると、自動で「承認済み」シートに追加されます。</p>
    </div>
  `;

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `【Resta】閲覧リクエスト: ${data.company} ${data.name} 様`,
    htmlBody: htmlBody
  });

  return jsonResponse({ status: 'ok' });
}

function processApproval(token) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const requests = sheet.getSheetByName('リクエスト');
  const data = requests.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][7] === token) { // H列: トークン
      const status = data[i][8]; // I列: ステータス

      if (status === '承認済み') {
        return htmlPage('既に承認済みです', `${data[i][1]} ${data[i][2]} 様のリクエストは既に承認されています。`, false);
      }

      const company = data[i][1];
      const name = data[i][2];
      const title = data[i][3];
      const email = data[i][4];
      const phone = data[i][5];

      // 承認済みシートに追加
      const approved = sheet.getSheetByName('承認済み');
      approved.appendRow([email, company, name, title, phone, '']);

      // ステータス更新
      requests.getRange(i + 1, 9).setValue('承認済み');

      return htmlPage('承認完了', `${company} ${name} 様を承認済みに登録しました。`, true);
    }
  }

  return htmlPage('エラー', '該当するリクエストが見つかりませんでした。', false);
}

function htmlPage(title, message, success) {
  const color = success ? '#12a0a0' : '#E07B54';
  const icon = success ? '✓' : '!';
  const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resta Admin | ${title}</title>
    <style>
      body { font-family: -apple-system, "Hiragino Sans", sans-serif; background: #0a0a0a; color: #f5f5f5; margin: 0; padding: 48px 20px; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
      .box { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 48px 40px; text-align: center; max-width: 480px; width: 100%; }
      .icon { font-size: 56px; color: ${color}; margin-bottom: 16px; line-height: 1; }
      h1 { font-size: 24px; margin: 0 0 16px; color: ${color}; }
      p { color: rgba(245,245,245,0.7); line-height: 1.7; margin: 0; }
    </style>
    </head>
    <body>
      <div class="box">
        <div class="icon">${icon}</div>
        <h1>${title}</h1>
        <p>${message}</p>
      </div>
    </body>
    </html>
  `;
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'approve' && e.parameter.token) {
    return processApproval(e.parameter.token);
  }
  return jsonResponse({ status: 'ok', message: 'Resta Auth API' });
}
