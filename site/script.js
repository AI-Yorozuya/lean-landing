// 這頁唯一的程式：手機選單開關＋點導覽平順捲動。
// 內容都寫在 index.html 裡，不是由這支程式產生的——看得到就改得到。
// 保持 classic script（無 import/export）→ 直接雙擊 index.html 也能跑。
const burger = document.getElementById('burger')
const links = document.getElementById('links')

burger.addEventListener('click', () => {
  const open = links.classList.toggle('open')
  burger.setAttribute('aria-expanded', String(open))
})

document.querySelectorAll('.links a[href^="#"], .brand').forEach((a) => {
  a.addEventListener('click', (e) => {
    const el = document.getElementById(a.getAttribute('href').slice(1))
    if (!el) return
    e.preventDefault()
    links.classList.remove('open')
    burger.setAttribute('aria-expanded', 'false')
    el.scrollIntoView({ behavior: 'smooth' })
  })
})

// 認識元件開關：只在自己電腦上預覽時出現，上線版連按鈕都不會有。
// 名字本來就寫在每塊的 data-name 上，這顆按鈕只負責開燈關燈。
const isLocal = location.protocol === 'file:' ||
  ['localhost', '127.0.0.1', ''].includes(location.hostname)

if (isLocal) {
  const btn = document.createElement('button')
  btn.className = 'label-toggle'
  btn.textContent = '顯示名字'
  btn.title = '每一塊都有名字，想改哪裡就跟 AI 說那個名字'
  btn.addEventListener('click', () => {
    const on = document.body.toggleAttribute('data-labels')
    btn.textContent = on ? '隱藏名字' : '顯示名字'
  })
  document.body.appendChild(btn)
}
