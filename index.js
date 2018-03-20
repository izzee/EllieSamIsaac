let counter = -1;
let cooldown = false;
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const img = document.getElementById('main-img')
const imgCaption = document.getElementById('img-caption')
const letters = document.getElementById('topbar').children
const imgs = [
  {"url" : "img/6legs66660000.png", "word" : "Extroverted"},
  {"url" : "img/plastic0000.png", "word" : "Lovely"},
  {"url" : "img/squeeeeus0000.png", "word" : "Ladylike"}
]


window.setInterval(()=>{slideshow()}, 2000)

plus.addEventListener('click', ()=> switchImg(+1))
minus.addEventListener('click', ()=> switchImg(-1))

function slideshow(){ !cooldown ? switchImg(1) : cooldown = false; }

function switchImg(n){
  (n>0) ? imgNext() : imgBack();
  renderNew();
  cooldown = true;
}

function imgNext(){ (counter < imgs.length-1) ? counter++ : counter = 0; }

function imgBack(){ (counter > 0) ? counter-- : counter = imgs.length-1; }

function renderNew(){
  img.src = imgs[counter]["url"];
  imgCaption.innerText = imgs[counter]["word"]
  for(let i=0; i<letters.length; i++) { letters[i].style.color = '' }
  letters[counter*2].style.color = 'white';
}
