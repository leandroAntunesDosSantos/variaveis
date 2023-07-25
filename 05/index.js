let valorX1 = 1;
let valorX2 = 1;

const distX = (valorX2 - valorX1) ** 2;

let valorY1 = 1;
let valorY2 = 4;

const distY = (valorY2 - valorY1) ** 2;

const distanciaEntrePontos = Math.sqrt(distX + distY);

console.log(distanciaEntrePontos);
