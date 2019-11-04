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
  for (const item of olItems){
    item.style.textDecoration = 'line-through';
  };
  for (const item of ulItems){
    item.style.opacity = '0';
  };
  for (const pic of pics){
    pic.style.width = '0px';
  };
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