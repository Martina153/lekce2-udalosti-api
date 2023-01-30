// Domaci ukol


let odstavec = document.createElement("p");
let text = document.createTextNode("V elipse spi lev.");
odstavec.appendChild(text);
odstavec.style.fontSize = "16px";
document.body.appendChild(odstavec);

let tlacitko = document.createElement("button");
let buttonText = document.createTextNode("červený po kliknutí");
tlacitko.appendChild(buttonText);
document.body.appendChild(tlacitko);

odstavec.onmouseover = function() {
    odstavec.style.fontWeight = "bold";
  }

let tlacitko2 = document.createElement("button");
let buttonText2 = document.createTextNode("větší po kliknutí");
tlacitko2.appendChild(buttonText2);
document.body.appendChild(tlacitko2);


tlacitko.addEventListener("click", function() {
  odstavec.classList.add('mojaTrieda');
});

tlacitko2.addEventListener("click", function() {
  let currentSize = parseInt(window.getComputedStyle(odstavec).fontSize);
  odstavec.style.fontSize = (currentSize + 1) + "px";
});

let prehravac = document.querySelector('.mujPrehravac')
function spustAudio(){
  prehravac.play()
}

function zastavAudio(){
  prehravac.pause()
}

function resetAudio(){
  prehravac.currentTime = 0;
}
function volume3(){
  prehravac.volume=1;
}
function volume1(){
  prehravac.volume=0;
}
function volume2(){
  prehravac.volume=0.5;
}









/*Praca na lekci

/*let nadpis = document.querySelector('h1')
nadpis.classList.add('csstrida')
/** removing CSS clasees*/
/*let ctverecek = document.querySelector('#ctverecek-1')
ctverecek.classList.remove('zluty')
ctverecek.classList.remove('ctverecek')*/
/*allows me to change the CSS class of the element*/
/*function zmenBarvu(){
  let ctverecek = document.querySelector('#ctverecek-1')
  ctverecek.classList.toggle('mujstyl')
}

let tlacitko = document.querySelector('.tlacitko')
/* event needs to be in html to work with event in javascript, in function its our first parameter*/
/*function zavolejUdalost(udalost){
  let prvek = udalost.target
  console.log(prvek)
  console.log(udalost)
}
let prehravac = document.querySelector('.mujPrehravac')
function spustAudio(){
  prehravac.play()
}

function zastavAudio(){
  prehravac.pause()
}

function resetAudio(){
  prehravac.currentTime = 0;
} */

