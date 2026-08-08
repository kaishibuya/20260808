# WBS（作業分解構造）

## 概要

- チーム人数：3人
- 合計Issue数：6
- 1人あたり：2Issue
- 全タスク：指定されたHTMLを指定の場所にコピペするだけで完成
- CSS / JS は完成済み。触る必要なし。

---

## 前提

`starMatch/` ディレクトリに以下のファイルが用意されている：

| ファイル | 状態 |
|----------|------|
| index.html | 骨格のみ。各セクションのコンテンツがTODOコメントで空欄 |
| style.css | 完成済み |
| main.js | 完成済み |

---

## Issue一覧

---

### Issue #1：ヒーローセクションのコンテンツ追加

**作業場所：** `index.html` のヒーローセクション内

**置き換え対象①：** `<!-- TODO: キャッチコピーを入れる -->`

**追加するテキスト：**
```html
地球人×異星人、新しい出会い。
```

**置き換え対象②：** `<!-- TODO: サブコピーを入れる -->`

**追加するテキスト：**
```html
銀河系最大級のマッチングサービス。あなたの運命の星人、見つけませんか？
```

**受入条件：**
- キャッチコピー「地球人×異星人、新しい出会い。」が画面中央に大きく表示される
- サブコピーがキャッチコピーの下にグレーの文字で表示される

---

### Issue #2：星人一覧セクションのコンテンツ追加

**作業場所：** `index.html` の星人一覧セクション内

**置き換え対象：** `<!-- TODO: 星人カードを3枚以上追加する -->` から閉じコメント `-->` まで全て削除し、以下に置き換える

**追加するHTML：**
```html
<div class="alien-card">
  <div class="alien-card__emoji">🔴</div>
  <h3 class="alien-card__name">マルス・レッドフィールド</h3>
  <p class="alien-card__origin">出身星：火星</p>
  <p class="alien-card__personality">性格：真面目・几帳面</p>
  <p class="alien-card__comment">「約束の時間は0.001秒単位で守ります」</p>
</div>

<div class="alien-card">
  <div class="alien-card__emoji">💛</div>
  <h3 class="alien-card__name">ヴィーナス・ラブリー</h3>
  <p class="alien-card__origin">出身星：金星</p>
  <p class="alien-card__personality">性格：情熱的・ロマンチスト</p>
  <p class="alien-card__comment">「デートは毎回サプライズじゃないと物足りないの」</p>
</div>

<div class="alien-card">
  <div class="alien-card__emoji">🟣</div>
  <h3 class="alien-card__name">プルート・シャドウ</h3>
  <p class="alien-card__origin">出身星：冥王星</p>
  <p class="alien-card__personality">性格：ミステリアス・無口</p>
  <p class="alien-card__comment">「……（沈黙が心地いい関係、求む）」</p>
</div>

<div class="alien-card">
  <div class="alien-card__emoji">🪐</div>
  <h3 class="alien-card__name">サターン・リングス</h3>
  <p class="alien-card__origin">出身星：土星</p>
  <p class="alien-card__personality">性格：おおらか・マイペース</p>
  <p class="alien-card__comment">「輪っかの数だけ愛を注ぎます」</p>
</div>
```

**受入条件：**
- カードが4枚横並び（PCの場合）で表示される
- 各カードに絵文字・名前・出身星・性格・コメントが全て含まれる

---

### Issue #3：利用の流れセクションのコンテンツ追加

**作業場所：** `index.html` の利用の流れセクション内

**置き換え対象：** `<!-- TODO: 3〜4ステップを追加する -->` から閉じコメント `-->` まで全て削除し、以下に置き換える

**追加するHTML：**
```html
<div class="flow__step">
  <span class="flow__step-number">1</span>
  <span class="flow__step-icon">📝</span>
  <p class="flow__step-text">プロフィール登録<br>好きな星座や理想のデートを入力</p>
</div>

<div class="flow__step">
  <span class="flow__step-number">2</span>
  <span class="flow__step-icon">🛸</span>
  <p class="flow__step-text">星間マッチング<br>AIが銀河中からぴったりの相手を探索</p>
</div>

<div class="flow__step">
  <span class="flow__step-number">3</span>
  <span class="flow__step-icon">💬</span>
  <p class="flow__step-text">メッセージ<br>翻訳機能付きで異星語もバッチリ</p>
</div>

<div class="flow__step">
  <span class="flow__step-number">4</span>
  <span class="flow__step-icon">🌙</span>
  <p class="flow__step-text">初デートは月面で<br>ロマンチックな無重力ディナーをどうぞ</p>
</div>
```

**受入条件：**
- 4つのステップが横並び（PC）/ 縦積み（スマホ）で表示される
- 各ステップに紫色の番号バッジ・絵文字・説明テキストが含まれる

---

### Issue #4：成功事例 + 料金プランセクションのコンテンツ追加

**作業場所：** `index.html` の成功事例セクションと料金プランセクション内

#### 成功事例

**置き換え対象：** `<!-- TODO: 2〜3件の事例を追加する -->` から閉じコメント `-->` まで全て削除し、以下に置き換える

**追加するHTML：**
```html
<div class="story-card">
  <p class="story-card__comment">"触手が多いのが最初は気になりましたが、手を繋ぐ時の選択肢が増えたと思えば最高です。今は幸せです。"</p>
  <p class="story-card__couple">田中太郎 & オクトパリア</p>
  <p class="story-card__type">地球人 × 海王星人</p>
</div>

<div class="story-card">
  <p class="story-card__comment">"彼女は体温が800℃あるので冬場のデートが最高に暖かい。夏はちょっとつらいですが、愛で乗り越えてます。"</p>
  <p class="story-card__couple">佐藤花子 & イグニス・フレア</p>
  <p class="story-card__type">地球人 × 火星人</p>
</div>

<div class="story-card">
  <p class="story-card__comment">"無口な彼ですが、3年目にして初めて『好き』と言ってくれました。冥王星時間では1週間分の告白らしいです。"</p>
  <p class="story-card__couple">鈴木美月 & プルート・ノワール</p>
  <p class="story-card__type">地球人 × 冥王星人</p>
</div>
```

#### 料金プラン

**置き換え対象：** `<!-- TODO: 2〜3プランを追加する -->` から閉じコメント `-->` まで全て削除し、以下に置き換える

**追加するHTML：**
```html
<div class="pricing-card">
  <h3 class="pricing-card__name">フリープラン</h3>
  <p class="pricing-card__price">月額 0地球円<br><span class="pricing-card__sub-price">（0銀河共通ポイント）</span></p>
  <ul class="pricing-card__features">
    <li>星人プロフィール閲覧（1日3件まで）</li>
    <li>メッセージ送信（1日1通まで）</li>
    <li>地球内マッチングのみ</li>
  </ul>
</div>

<div class="pricing-card">
  <h3 class="pricing-card__name">スタンダードプラン</h3>
  <p class="pricing-card__price">月額 2,980地球円<br><span class="pricing-card__sub-price">（150銀河共通ポイント）</span></p>
  <ul class="pricing-card__features">
    <li>星人プロフィール閲覧（無制限）</li>
    <li>メッセージ送信（無制限）</li>
    <li>太陽系内マッチング</li>
    <li>翻訳機能付き</li>
  </ul>
</div>

<div class="pricing-card">
  <h3 class="pricing-card__name">ギャラクシープラン</h3>
  <p class="pricing-card__price">月額 9,800地球円<br><span class="pricing-card__sub-price">（500銀河共通ポイント）</span></p>
  <ul class="pricing-card__features">
    <li>全機能無制限</li>
    <li>銀河系全域マッチング</li>
    <li>月面デートプラン予約</li>
    <li>専属マッチングAI付き</li>
    <li>ワープ交通費補助</li>
  </ul>
</div>
```

**受入条件：**
- 成功事例が3件表示され、各事例にコメント・カップル名・星人種別がある
- 料金プランが3個横並び（PC）で表示され、各プランにプラン名・価格・機能一覧がある

---

### Issue #5：登録フォームの選択肢追加

**作業場所：** `index.html` の登録フォームセクション内

#### プルダウン

**置き換え対象：** `<!-- TODO: 選択肢を追加する -->`

**追加するHTML：**
```html
<option value="earth">地球人</option>
<option value="mars">火星人</option>
<option value="venus">金星人</option>
<option value="pluto">冥王星人</option>
<option value="saturn">土星人</option>
<option value="neptune">海王星人</option>
<option value="other">その他の星人</option>
```

#### ラジオボタン

**置き換え対象：** `<!-- TODO: ラジオボタンの選択肢を追加する -->` から閉じコメント `-->` まで全て削除し、以下に置き換える

**追加するHTML：**
```html
<label class="register__radio-label">
  <input type="radio" name="meeting-style" value="moon-dinner">
  月面ディナー
</label>
<label class="register__radio-label">
  <input type="radio" name="meeting-style" value="space-walk">
  宇宙遊泳デート
</label>
<label class="register__radio-label">
  <input type="radio" name="meeting-style" value="planet-tour">
  惑星巡りツアー
</label>
<label class="register__radio-label">
  <input type="radio" name="meeting-style" value="online">
  星間オンライン通話
</label>
```

**受入条件：**
- プルダウンに7つの選択肢が表示される
- ラジオボタンが4つ表示され、1つだけ選択できる
- 送信ボタンを押すと「登録完了！」アラートが出る

---

### Issue #6：フッターのコンテンツ追加

**作業場所：** `index.html` のフッター内

**置き換え対象：** `<!-- TODO: フッターの内容を追加する -->` から閉じコメント `-->` まで全て削除し、以下に置き換える

**追加するHTML：**
```html
<p>StarMatch - 銀河系最大級のマッチングサービス</p>
<p>
  <a href="#">Twitter</a>
  <a href="#">Instagram</a>
  <a href="#">TikTok</a>
</p>
<p>&copy; 2026 StarMatch Inc. All rights reserved.</p>
```

**受入条件：**
- 「StarMatch」の表記がフッターに表示される
- SNSリンクが3つ横並びで表示される
- コピーライト表記がある

---

## 依存関係図

```
全Issue独立（並行着手可能）

#1 ヒーローのコンテンツ
#2 星人一覧のコンテンツ
#3 利用の流れのコンテンツ
#4 成功事例 + 料金プランのコンテンツ
#5 登録フォームの選択肢
#6 フッターのコンテンツ
```

---

## 担当割り振り例（3人）

| メンバー | 担当Issue |
|----------|-----------|
| A | #1 ヒーロー / #2 星人一覧 |
| B | #3 利用の流れ / #4 成功事例 + 料金プラン |
| C | #5 登録フォーム選択肢 / #6 フッター |
