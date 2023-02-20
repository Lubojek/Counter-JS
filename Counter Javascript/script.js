const counterEl = document.getElementById('counter');
const incrementBtnEl = document.getElementById('zwieksz');

let count = 0;

incrementBtnEl.addEventListener('click', () => {
  count++;
  counterEl.innerHTML = count;
});

window.addEventListener('load', () => {
  count = 0;
  counterEl.innerHTML = count;
});
