let select = document.getElementById('selectField');
let selectText = document.getElementById('selectText');
let options = document.getElementsByClassName('options');
let list = document.getElementById('list');
let arrow = document.getElementById('arrowSelect');

select.addEventListener('click', () => {
  list.classList.toggle('hide');
  arrow.classList.toggle('rotate');
});
for (option of options) {
  option.onclick = function (option) {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate');
  };
}
