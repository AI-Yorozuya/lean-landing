# lean-landing — 一頁式品牌官網（免費鉤子）

> AI-agent 進場：**這個 repo 裡任何開場搭話都由教練接手**（`.claude/skills/coach`）。打招呼、問「怎麼開始」、說「開始玩」都算敲門——直接開演，別解釋自己是誰。

**這是什麼**：一個純前端一頁式官網的種子。clone 下來、跟 AI 說一句話，就能做出一版真的能收諮詢、免費上線到真網址的官網。**零後端、零 Docker、零資料庫**——只跑 Vite。

**在 lean-X 家族的位置**：這是 **lean-web 前端基座的 zero-backend 邊緣**（不是有蒸餾後端的垂直，所以不叫 lean-erp 那種）。它的 job 是**免費鉤子**：最快動起來、最低摩擦、對我們零主機成本。

**免費/付費線**：免費＝這頁純前端、自己免費上線 CF Pages。想「收名單自己管、管客人、接單、讓客人預約」＝跨進**全端**＝畢業到 [lean-stack](../lean-stack)（走 `graduate` skill，招牌/氣質/心智圖搬過去、續接不斷）＋私有能力包/劇本＋managed。**gate 在方法與服務、不在 code**——這裡的 code 全開源。

## 跑起來

```bash
npm install
npm run dev        # http://localhost:5175
```

## 上線（免費）

```bash
npm run deploy     # vite build → Cloudflare Pages，拿到 *.pages.dev 真網址
```

## 結構

```
lean-landing/
├── index.html            單頁（title = 招牌名）
├── src/{App.vue,main.js,style.css}   Hero→亮點×3→關於→CTA；style.css :root = 換膚 token
├── public/               favicon / 行業照片包
├── vite.config.js        純前端，無 /api proxy
├── wrangler.toml         CF Pages 部署
└── .claude/skills/coach/ 教練（landing speedrun；正本＝ai-yorozuya docs/5-課程，coach-sync 生成）
```
