<script setup>
// 一頁式品牌官網——純前端起手種子（本 repo main 即種子）。
// 教練照對話答案（取名＋事實題／Q1 行業／Q3 氣質／Q4 怎麼找你），只改 site 物件 + style.css 的 token（四個 block 全換）。
// 純展示、不打後端 → npm run dev 就跑、npm run build 出靜態檔、免 Docker/DB。
// 「要收名單/預約」＝畢業訊號：記升級意向、走 graduate 到 lean-stack——本 repo 永不加後端。
import { ref } from 'vue'

// ── 教練改這裡（來自對話答案）─────────────────────────────────
const site = {
  brand: '你的招牌',                          // 取名（序章）
  tagline: '一句話說清楚，你替誰解決什麼。',    // 標語（教練代擬）
  intro: '把你最想讓人知道的一段話放這裡——你是誰、為什麼值得信任。',
  // Q4「客人怎麼找你」決定這顆按鈕（純前端＝連結）：
  cta: { label: '聯絡我', href: 'mailto:hello@example.com' },
  // 主視覺：null＝用內建的預設圖形（會跟著氣質變色，永遠不會是破圖）。
  // 玩家把自己的照片拖給教練 → 存進 public/ → 這裡改成 '/你的檔名.jpg' 就換掉。
  hero: null,
  // Q1 決定這三張亮點卡的內容：
  features: [
    { title: '亮點一', desc: '你最強的一件事，用客人聽得懂的話講。' },
    { title: '亮點二', desc: '第二個讓人選你的理由。' },
    { title: '亮點三', desc: '第三個。三張剛好，別貪多。' },
  ],
}
// ───────────────────────────────────────────────────────────────

const navOpen = ref(false)
const scrollTo = (id) => {
  navOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="nav">
    <a class="brand" href="#top" @click.prevent="scrollTo('top')">{{ site.brand }}</a>
    <nav :class="['links', { open: navOpen }]">
      <a href="#features" @click.prevent="scrollTo('features')">亮點</a>
      <a href="#about" @click.prevent="scrollTo('about')">關於</a>
      <a class="cta-sm" :href="site.cta.href">{{ site.cta.label }}</a>
    </nav>
    <button class="burger" aria-label="選單" @click="navOpen = !navOpen">≡</button>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-text">
        <h1>{{ site.tagline }}</h1>
        <p class="lede">{{ site.intro }}</p>
        <a class="cta" :href="site.cta.href">{{ site.cta.label }}</a>
      </div>
      <div class="hero-art">
        <img v-if="site.hero" :src="site.hero" :alt="site.brand" />
        <!-- 預設圖形：全部用主題 token 上色 → 換氣質時它自己跟著換，不用另外做圖 -->
        <svg v-else viewBox="0 0 400 400" role="img" :aria-label="site.brand">
          <circle cx="230" cy="150" r="120" fill="var(--accent)" opacity=".14" />
          <circle cx="230" cy="150" r="74" fill="var(--accent)" opacity=".22" />
          <rect x="40" y="196" width="250" height="150" rx="18" fill="var(--surface)" stroke="var(--line)" />
          <rect x="66" y="226" width="112" height="11" rx="5.5" fill="var(--accent)" />
          <rect x="66" y="252" width="196" height="8" rx="4" fill="var(--muted)" opacity=".32" />
          <rect x="66" y="272" width="160" height="8" rx="4" fill="var(--muted)" opacity=".32" />
          <rect x="66" y="302" width="84" height="24" rx="12" fill="var(--accent)" />
          <circle cx="316" cy="286" r="30" fill="var(--accent)" opacity=".16" />
        </svg>
      </div>
    </section>

    <section id="features" class="features">
      <article v-for="(f, i) in site.features" :key="i" class="card">
        <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </article>
    </section>

    <section id="about" class="about">
      <h2>關於 {{ site.brand }}</h2>
      <p>{{ site.intro }}</p>
      <a class="cta ghost" :href="site.cta.href">{{ site.cta.label }}</a>
    </section>
  </main>

  <footer class="foot">
    <span>© {{ site.brand }}</span>
    <a class="made" href="https://aiyorozuya.com/learn" target="_blank" rel="noopener">用 AI 萬事屋做的 🐻</a>
  </footer>
</template>
