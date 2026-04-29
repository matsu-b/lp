// ============================================================
// Google Apps Script — スプレッドシートに貼り付けるコード
// ============================================================
//
// 【セットアップ手順】
// 1. Google スプレッドシートを新規作成
// 2. シート名を「承認済み」にリネームし、1行目に以下のヘッダーを入力:
//    A1: メールアドレス / B1: 会社名 / C1: 名前 / D1: 役職 / E1: 電話番号 / F1: 最終閲覧日時
// 3. シートを追加し「リクエスト」にリネーム、1行目に以下のヘッダーを入力:
//    A1: 申請日時 / B1: 会社名 / C1: 名前 / D1: 役職 / E1: メールアドレス / F1: 電話番号 / G1: 申し送り事項
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
  requests.appendRow([
    new Date(),
    data.company,
    data.name,
    data.title,
    data.email,
    data.phone,
    data.note
  ]);

  // リクエスト通知
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `【Resta】閲覧リクエスト: ${data.company} ${data.name} 様`,
    body: [
      '会社説明資料の閲覧リクエストがありました。',
      '',
      `会社名: ${data.company}`,
      `名前: ${data.name}`,
      `役職: ${data.title}`,
      `メール: ${data.email}`,
      `電話番号: ${data.phone}`,
      `申し送り事項: ${data.note || 'なし'}`,
      '',
      `日時: ${new Date().toLocaleString('ja-JP')}`,
      '',
      '承認する場合は「承認済み」シートにメールアドレスを追加してください。'
    ].join('\n')
  });

  return jsonResponse({ status: 'ok' });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// CORSプリフライト対応
function doGet(e) {
  return jsonResponse({ status: 'ok', message: 'Resta Auth API' });
}
