# AI Dev Control Plane - Status Page

開発環境の動作確認用ステータスページです。

## ファイル構成

```
ai-dev-test/
├── public/
│   ├── index.html   # ステータスページのメインHTML
│   ├── health.html  # ヘルスチェックページ
│   ├── style.css    # スタイルシート
│   └── script.js    # 日時・ヘルスステータスの表示スクリプト
├── test/
│   └── script.test.js  # Vitestによるユニットテスト
└── tests/
    └── e2e/
        └── basic.spec.js  # PlaywrightによるE2Eテスト
```

## ファイル説明

| ファイル | 役割 |
|---------|------|
| `public/index.html` | ステータスページ本体。プロジェクト名・稼働状態・最終更新日時・Health Status を表示する。 |
| `public/health.html` | ヘルスチェックページ。Status と Checked At を表示する。 |
| `public/style.css` | ページのスタイル定義。レイアウト・色・フォントを管理する。 |
| `public/script.js` | 現在の日本時間・Health Status の動的表示と Check Health ボタン処理を担う。 |
| `test/script.test.js` | Vitestによる `script.js` のユニットテスト。`getHealthStatus` 関数の動作を検証する。 |
| `tests/e2e/basic.spec.js` | PlaywrightによるE2Eテスト。ページ表示・ボタン動作・ヘルスステータス更新を検証する。 |

## 表示方法

`public/index.html` をブラウザで直接開くか、任意の静的ファイルサーバで配信してください。

## 表示内容

- プロジェクト名: AI Dev Control Plane
- 現在の状態: Running
- 最終更新日時: ページロード時の日時を自動表示
- Health Status: OK（初期値）
- Checked At: Check Health ボタン押下時の日時を表示

## Health Status 機能

### 概要

`index.html` のトップページで、ヘルスチェック結果をリアルタイムで確認できます。
`health.html` でも同じロジックを共有しています。

### Check Health ボタン

- トップページの「Check Health」ボタンを押すと、Health Status と Checked At が更新されます
- Health Status の初期値は `OK` です
- Checked At にはボタンを押した時刻（日本時間）が表示されます

### script.js の主な関数

| 関数 | 説明 |
|------|------|
| `getHealthStatus(status)` | ステータスコード（'ok' など）を表示文字列（'OK' など）に変換する |
| `updateHealthDisplay()` | `#health-status` と `#health-checked-at` の DOM 要素を更新する |
| `getJapanTimeString()` | 現在の日本時間を文字列で返す |

## Lint

```bash
npm install
npm run lint
```

## Unit Test

```bash
npm install
npm run test
```

## TypeCheck

```bash
npm install
npm run typecheck
```

## E2E Test

```bash
npm install
npx playwright install chromium  # 初回のみ
npm run test:e2e
```

> **注意**: `playwright.config.js` の `webServer` 設定により、テスト実行時に Python の HTTP サーバーが自動起動します。手動でサーバーを起動する必要はありません。

## 全品質チェック実行

```bash
npm install
npx playwright install chromium  # 初回のみ
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```
