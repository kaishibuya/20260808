# エンドポイントとバグの解説

## エンドポイントとは

データをもらうためのURL。APIの窓口。

GitHubは「このURLにリクエストを送ったら、こういうデータを返すよ」というルールを公開している。

---

## GitHub APIの2つの窓口

### 窓口A：1人のユーザー情報を取得

**URL:** `https://api.github.com/users/kaishibuya`

**意味：** 「kaishibuyaの情報を1人分ください」

**返ってくるデータ：**

```json
{
  "name": "Kai Shibuya",
  "avatar_url": "https://...",
  "bio": "大学生",
  "followers": 10
}
```

→ オブジェクトが1個、そのまま返ってくる。

---

### 窓口B：ユーザーを検索（複数人）

**URL:** `https://api.github.com/search/users?q=kai`

**意味：** 「kaiという文字に一致するユーザーを検索してください」

**返ってくるデータ：**

```json
{
  "items": [
    { "name": "Kai Shibuya", "avatar_url": "...", ... },
    { "name": "Kaito", "avatar_url": "...", ... },
    { "name": "Kaiser", "avatar_url": "...", ... }
  ]
}
```

→ 複数人がヒットするから、`items`という配列に入って返ってくる。

---

## 後輩のコードのバグ

| 項目 | 実際のコード |
|------|-------------|
| URL | 窓口A（1人取得）を使っている |
| データの取り出し方 | `userData.items` で窓口Bの形を想定している |

**結果：** 窓口Aの返答に `.items` は存在しない → `undefined` → `||[]` で空配列 → 何も表示されない。

---

## 修正方法

### 方法1：1人のユーザーを表示したい場合（URLはそのまま）

```js
const userData = await response.json();
const users = [userData]; // 1人を配列に入れてforEachで回す
```

### 方法2：ユーザー検索（複数件）をしたい場合（URLを変える）

```js
const response = await fetch(`https://api.github.com/search/users?q=${username}`);
const userData = await response.json();
const users = userData.items || [];
```

---

## まとめ

「URLが返すデータの形」と「コードが期待しているデータの形」が一致していなかった。

エンドポイントごとに返ってくるデータの構造は決まっているので、使うURLに合わせてデータの取り出し方を書く必要がある。
