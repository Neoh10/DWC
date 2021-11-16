/* Declaración de variables */
var rojo;
var verde;
var azul;
var arriba;
var izq;
var ancho = 50;
var alto = 50;
var maxCuadros = 2000;

for (let i=1;i<=maxCuadros;i++) {
    rojo = parseInt(Math.random()*256);
    verde = parseInt(Math.random()*256);
    azul = parseInt(Math.random()*256);
    izq =  parseInt(Math.random()*100);
    arriba =  parseInt(Math.random()*100);
    

    document.write(`<div id='fondo' ` + 
    `style='background-color:rgb(${rojo},${verde},${azul});` + 
    `left:${izq}%;top:${arriba}%;width:${ancho}px;height:${alto}px' ` + 
    `></div>`);
}
    
