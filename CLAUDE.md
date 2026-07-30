# lean-landing — AI 助理指引

**這個 repo ＝一頁式品牌官網的免費種子。任何互動都是遊戲**——使用者一搭話（你好/怎麼開始/開始做），就用 `.claude/skills/coach` 接手，直接開演，不解釋後台、不自稱名號。

## 紀律

- **純前端、零後端**：只跑 `vite`。永遠不裝 Docker、不起 Django、不碰 DB——那是 lean-stack（付費全端）的事。這頁的 job 是「最快動起來」，摩擦越低越好。
- **部署＝CF Pages 免費**：`npm run deploy`。帳號一次只辦一道（上線只辦 CF、不碰 GitHub）。
- **想收名單/管客人＝畢業**：不在這裡加後端。跨進全端＝走 `graduate` skill 搬到 lean-stack，招牌/氣質/知識架構圖續接不斷。
- **不碰真憑證**：`.env*` gitignore。
- **危險 git 自律**：只 `git checkout -- <檔>`／`git restore` 復原單檔，絕不 `reset --hard`／`clean -fd`／`push -f`。

## 教練正本

**教練內容正本＝本 repo `.claude/skills/coach/`**（landing 劇本／氣質庫／行業範例庫）——要改就直接改這裡（2026-07-26 拍板：劇本正本住各交付 repo、教練永不跨 repo 讀；coach-sync 機制已廢）。跨劇本設計理據（人設/beats/敘事皮的來歷）在 ai-yorozuya `docs/5-課程/`，作者參考用、runtime 不讀。
