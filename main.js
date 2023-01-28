// tady je místo pro náš program


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
  