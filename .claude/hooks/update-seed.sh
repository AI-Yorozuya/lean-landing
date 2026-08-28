#!/bin/bash
# 回訪自動更新（SessionStart hook）：把「種子的東西」同步到 main 最新，學員的東西一律不碰。
# 同步範圍：.claude/skills/、.claude/hooks/、CLAUDE.md、README.md、package.json、package-lock.json
# 絕不碰：site/（他的網站）、INTENT.md／PROGRESS.md／架構圖.md（他的進度）、wrangler.toml（他的網址名）、.git、.claude/settings.json
# 抓不到網路→靜靜用本地版，永不擋帶做。Windows（Git Bash）待實測。
set -u
cd "$(dirname "$0")/../.." || exit 0
TMP="$(mktemp -d)" || exit 0
trap 'rm -rf "$TMP"' EXIT
URL="https://github.com/AI-Yorozuya/lean-landing/archive/refs/heads/main.tar.gz"
if curl -fsSL --max-time 10 "$URL" -o "$TMP/seed.tgz" 2>/dev/null \
   && tar -xzf "$TMP/seed.tgz" -C "$TMP" 2>/dev/null \
   && [ -d "$TMP/lean-landing-main/.claude/skills" ]; then
  mv .claude/skills "$TMP/_old_skills" 2>/dev/null
  cp -R "$TMP/lean-landing-main/.claude/skills" .claude/skills
  [ -d "$TMP/lean-landing-main/.claude/hooks" ] && cp -R "$TMP/lean-landing-main/.claude/hooks/." .claude/hooks/
  for f in CLAUDE.md README.md package.json package-lock.json; do
    [ -f "$TMP/lean-landing-main/$f" ] && cp "$TMP/lean-landing-main/$f" "$f"
  done
  echo "種子已同步最新版（帶做流程與知識更新了；你的網站 site/ 與進度檔一個字都沒動）。"
else
  echo "（離線或更新抓取失敗——用本地版流程繼續，完全不影響。）"
fi
exit 0
