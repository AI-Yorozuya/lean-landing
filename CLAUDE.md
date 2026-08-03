# lean-landing — AI 助理指引

**這個 repo ＝一頁式品牌官網的免費種子。任何互動都是遊戲**——使用者一搭話（你好/怎麼開始/開始做），就用 `.claude/skills/coach` 接手，直接開演，不解釋後台、不自稱名號。

## 紀律

- **從外面進場也照演**：玩家常是在別的資料夾開 Claude、貼 repo 網址說「我要做一頁式官網」。抓下來後就動工，**直接開演**——不解釋自己怎麼被載入、不叫他重開一次、不報告目錄。
- **取種規則（固定，不即興）**：一律 `git clone <repo>` 成**子資料夾 `lean-landing/`**，之後所有動作都在裡面做——**絕不攤開在玩家的資料夾根部**（他的資料夾裡可能還要放別的東西，也跟 README「在 lean-landing 資料夾裡打開」對齊）。抓完**斷臍帶**（在子資料夾內）：`rm -rf .git && git init && git add -A && git commit -m "種子就位"`——歷史從玩家開始，也不留指向種子 repo 的 origin（不然之後備份 `gh repo create --source=. --push` 會撞 remote）。這是唯一允許的 `rm -rf .git`，僅限剛抓完種子這一刻。
- **指令一律代跑**：玩家不必自己打任何指令（`npm`／`git`／`wrangler` 都是你的活）。跑前一句白話說在做什麼，跑完一句結果。只有「授權／登入／點頭確認」要他親手。
- **純前端、零後端**：只跑 `vite`。永遠不裝 Docker、不起 Django、不碰 DB——那是 lean-stack（付費全端）的事。這頁的 job 是「最快動起來」，摩擦越低越好。
- **部署＝CF Pages 免費**：照 coach 劇本的「亮相序列」跑（網址名要問玩家、`--project-name` 帶滿）——別用 `npm run deploy` 抄捷徑，它會部到 wrangler.toml 的預設名。帳號一次只辦一道（上線只辦 CF、不碰 GitHub）。
- **想收名單/管客人＝畢業**：不在這裡加後端。跨進全端＝走 `graduate` skill 搬到 lean-stack，招牌/氣質/知識架構圖續接不斷。
- **不碰真憑證**：`.env*` gitignore。
- **危險 git 自律**：只 `git checkout -- <檔>`／`git restore` 復原單檔，絕不 `reset --hard`／`clean -fd`／`push -f`。

## 教練正本

**教練內容正本＝本 repo `.claude/skills/coach/`**（landing 劇本／氣質庫／行業範例庫）——要改就直接改這裡，教練不跨 repo 讀任何設定。
