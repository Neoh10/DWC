/* Declaración de variables */
var respuesta;
var factorial=1;
  
respuesta = prompt("Indica un número (debe ser un número " + 
            "entero positivo)");
if (respuesta < 0 || isNaN(Number(respuesta))) {
    alert(`El número introducido no es válido`);
} else {
    for (let i=1;i<=respuesta;i++) {
        factorial*=i;
    }
            
    alert (`El factorial de ${respuesta} es ${factorial}`);
}
