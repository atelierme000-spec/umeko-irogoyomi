const grid = document.querySelector('#color-grid');
const search = document.querySelector('#search');
const count = document.querySelector('#color-count');
const colors = window.UMekoColors || [];

function renderColors() {
  const query = search.value.trim().toLocaleLowerCase('ja');
  const shown = colors.filter(color =>
    (String(color.number).padStart(2, '0') + ' ' + color.name + ' ' + color.hex).toLocaleLowerCase('ja').includes(query)
  );

  grid.className = 'color-grid';
  grid.innerHTML = shown.map(color =>
    '<article class="color-card">' +
      '<img class="swatch-image" src="' + color.image + '" alt="No.' + String(color.number).padStart(2, '0') + ' ' + color.name + 'の和柄色見本" loading="lazy">' +
      '<div class="card-copy"><span class="color-number">NO. ' + String(color.number).padStart(2, '0') + '</span><span class="hex">' + color.hex + '</span></div>' +
      '<h3>' + color.name + '</h3>' +
    '</article>'
  ).join('');
  count.textContent = query ? (shown.length + ' / ' + colors.length + '色') : ('全' + colors.length + '色');
}

search.addEventListener('input', renderColors);
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  document.querySelector('#main-nav').classList.toggle('open', !open);
});
document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  document.querySelector('#main-nav').classList.remove('open');
}));
const links = window.UMekoLinks || {};
document.querySelector('[data-link="instagram"]').href = links.instagram || 'https://www.instagram.com/';
document.querySelector('[data-link="shop"]').href = links.shop || '#';
document.querySelector('#year').textContent = new Date().getFullYear();
renderColors();
