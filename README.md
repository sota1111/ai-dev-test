# AI Dev Control Plane - Status Page

開発環境の動作確認用ステータスページです。

## ファイル構成

```
ai-dev-test/
└── public/
    ├── index.html   # ステータスページのメインHTML
    ├── style.css    # スタイルシート
    └── script.js    # 現在日時（日本時間）の自動表示スクリプト
```

## ファイル説明

| ファイル | 役割 |
|---------|------|
| `public/index.html` | ステータスページ本体。プロジェクト名・稼働状態・最終更新日時を表示する。 |
| `public/style.css` | ページのスタイル定義。レイアウト・色・フォントを管理する 。 |
| `public/script.js` | 最終更新日時エリアに現在の日本時間を動的に表示する。 |

## 表示方法

`public/index.html` をブラウザで直接開くか、任意の静的ファイルサーバで配信してください。

## 表示内容

- プロジェクト名: AI Dev Control Plane
- 現在の状態: Running
- 最終更新日時: ページロード時の日時を自動表示
