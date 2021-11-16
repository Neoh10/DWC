// Declaración de variables
var cont, numero;
let mapa = new Map();
const MAX_FRECUENCIAS = 10;
const MAX_REPETICIONES = 10000;

for (i=1;i<=MAX_FRECUENCIAS;i++) {
    mapa.set(i,0);
}

for (i=1;i<=MAX_REPETICIONES;i++) {
    numero = parseInt(Math.random()* 10) + 1;
    mapa.set(numero, (mapa.get(numero) + 1));
}

document.write(`<h1>Frecuencias</h1>`);
document.write('<ul>');
for (i=1;i<MAX_FRECUENCIAS;i++) {
    document.write(`<li><strong>Número ${i}:</strong> ${mapa.get(i)}</li>`);
}
document.write('</ul>');