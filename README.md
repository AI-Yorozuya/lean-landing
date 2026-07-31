# lean-landing — 一頁式官網種子

跟 AI 說一句話，做出一版真的能收客人的一頁式官網，並**免費上線到真網址**。

**不用會寫程式。** 你負責決定它長什麼樣，AI 負責動手。

## 你會做出什麼

一頁到底的品牌官網：招牌 → 你在做什麼 → 三個亮點 → 關於 → 怎麼找你。

換行業、換氣質（顏色與字體）都是一句話的事，改完馬上在瀏覽器看到。

## 開始

先裝好 [Node.js](https://nodejs.org)（選 LTS 版）和 [Claude Code](https://claude.com/claude-code)，然後：

```bash
git clone https://github.com/AI-Yorozuya/lean-landing.git
```

```bash
cd lean-landing && npm install && claude
```

跟它說一句「開始」——它會一步一步帶你走，你只要回答問題、看畫面、點頭。

## 自己下指令（想的話）

```bash
npm run dev
```

本機預覽，開 http://localhost:5175 ，改檔案畫面就跟著變。

```bash
npm run deploy
```

上線到 Cloudflare Pages（免費），會拿到一個 `*.pages.dev` 的真網址。第一次會請你登入 Cloudflare。

## 檔案在哪

| 檔案 | 是什麼 |
| --- | --- |
| `index.html` | 瀏覽器分頁上的標題（＝你的招牌名） |
| `src/App.vue` | 頁面內容：文案、三個亮點、聯絡方式 |
| `src/style.css` | 顏色與字體（換氣質改這裡的 `:root`） |
| `public/` | 圖片放這 |

## 放自己的照片

種子**不預載照片**——主視覺預設是一組跟著主題色變化的內建圖形，所以換氣質永遠不會出現破圖或不搭的佔位照。

想換成自己的：把圖丟進 `public/`，再把 `src/App.vue` 裡的 `site.hero` 改成 `'/你的檔名.jpg'`（可以叫 AI 代做）。順序是刻意的——**先有一個好看的頁，再換成真的你**，不是一開始就卡在「我沒有照片」。

## 這頁做不到的事

這是純前端的一頁官網：**沒有後端、沒有資料庫**，只跑 Vite，所以上線是免費的。

如果你想要「自己收名單、管客人、接單、讓客人線上預約」，那需要一套背後的生意系統。跟 AI 說一聲，它會帶你搬過去——**官網原封不動繼續掛在網路上**，招牌與氣質一起帶走。

---

用 AI 萬事屋做的 🐻 · [aiyorozuya.com/learn](https://aiyorozuya.com/learn)
