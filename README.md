# 梅子の色暦

静的HTML/CSS/JavaScriptで作った、無料ホスティング向けの小さな色の図鑑です。ビルド手順や有料サービスは不要です。

## 編集する場所

- `index.html`：ページ本文とナビゲーション
- `data/colors.js`：色カード。色名、読み、HEX、系統、説明、画像名を編集
- `script.js`：検索・系統フィルター
- `style.css`：見た目
- `assets/`：色の画像

69色の正式マスターが揃ったら `data/colors.js` の `UMekoColors` 配列へ追加してください。現時点の候補4色（梅重、薄梅鼠、勿忘草色、浅葱色）は `provisional: true` と明記してあります。色コード・説明文は公開前に正式資料と照合してください。星座の例は季節の提案です。

Instagramとショップのリンク先は `script.js` の `UMekoLinks` に設定できます。未設定の場合はInstagramトップとショップ導線の仮状態です。

## Cloudflare Pages の初期設定

1. GitHubにこのフォルダのファイルを追加して `main` ブランチへ push。
2. Cloudflare ダッシュボードで **Workers & Pages → Create application → Pages → Connect to Git** を選択。
3. GitHubを接続し `atelierme000-spec/umeko-irogoyomi` を選択。
4. Production branch を `main`、Build command は空欄、Build output directory は `/`（または `.`）にして保存・デプロイ。
5. 完了後の `*.pages.dev` URLで確認。以降 `main` へのpushで自動更新されます。
