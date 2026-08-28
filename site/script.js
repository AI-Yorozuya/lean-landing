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
