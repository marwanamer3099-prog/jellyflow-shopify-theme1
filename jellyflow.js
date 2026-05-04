let total = 167 * 60 + 33;
function tickTimer() {
  total--;
  if (total < 0) total = 3 * 60 * 60;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  ['cd-h','cd-m','cd-s'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String([h,m,s][i]).padStart(2,'0');
  });
}
setInterval(tickTimer, 1000);

function flickerViewers() {
  const el = document.getElementById('live-count');
  if (el) el.textContent = 38 + Math.floor(Math.random() * 18);
}
setInterval(flickerViewers, 4000);

let qty = 1;
function changeQty(d) {
  qty = Math.max(1, qty + d);
  const el = document.getElementById('qty-display');
  const hidden = document.getElementById('qty-hidden');
  if (el) el.textContent = qty;
  if (hidden) hidden.value = qty;
}

function selectBundle(el, price) {
  document.querySelectorAll('.bc').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  ['cur-price','sticky-price'].forEach(id => {
    const e = document.getElementById(id);
    if (e) e.textContent = price + ' CAD';
  });
}

function setImg(src, thumb) {
  const main = document.getElementById('main-img');
  if (main) {
    const img = main.querySelector('img');
    if (img) img.src = src;
  }
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('act'));
  if (thumb) thumb.classList.add('act');
}
