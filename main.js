const olItems = document.querySelectorAll('ol > li');
const ulItems = document.querySelectorAll('ul > li');
const pics = document.querySelectorAll('#row > img');
const deathBtn = document.querySelector('#toggle');

function strike(){
  event.target.style.textDecoration = 'line-through';
}

function fade(){
  event.target.style.opacity = '0';
}

function leaveEarth(){
  event.target.style.width = '0px';
}

function crashBoom(){
  for (const items of olItems){
    strike
  }
}

olItems.forEach(item => {
  item.addEventListener('click', strike)
})

ulItems.forEach(item => {
  item.addEventListener('click', fade)
})

pics.forEach(item => {
  item.addEventListener('click', leaveEarth)
})

deathBtn.addEventListener('click', crashBoom)