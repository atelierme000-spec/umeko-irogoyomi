const grid=document.querySelector('#color-grid');
const search=document.querySelector('#search');
let activeFilter='すべて';
const colors=window.UMekoColors||[];
function render(){
 const q=search.value.trim().toLowerCase();
 const shown=colors.filter(c=>(activeFilter==='すべて'||c.group===activeFilter)&&(!q||`${c.name} ${c.kana} ${c.note}`.toLowerCase().includes(q)));
 grid.innerHTML=shown.length?shown.map(c=>`<article class="color-card"><div class="swatch" style="--swatch:${c.hex}">${c.image?`<img src="${c.image}" alt="" loading="lazy">`:''}<span class="hex">${c.hex}</span></div><div class="card-copy"><div><h3>${c.name}</h3><span class="kana">${c.kana}</span></div><span class="group">${c.group}</span></div><p>${c.note}</p>${c.provisional?'<small class="candidate">差し替え候補・仮登録</small>':''}</article>`).join(''):'<p class="empty">見つかりませんでした。別の色名で探してみてください。</p>';
}
search.addEventListener('input',render);
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.chip.active').classList.remove('active');btn.classList.add('active');activeFilter=btn.dataset.filter;render()}));
const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));document.querySelector('#main-nav').classList.toggle('open',!open)});
document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.querySelector('#main-nav').classList.remove('open')}));
const links=window.UMekoLinks||{};document.querySelector('[data-link="instagram"]').href=links.instagram||'https://www.instagram.com/';document.querySelector('[data-link="shop"]').href=links.shop||'#';document.querySelector('#year').textContent=new Date().getFullYear();render();
