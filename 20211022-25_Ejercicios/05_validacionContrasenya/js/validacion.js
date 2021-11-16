// Declaración de variables
let nombre, contrasenya;
let seguir = true;
let nombreOK=true;
let contrasenyaOK;
let hayMinusculas = false;
let hayMayusculas = false;
let hayNumeros = false;
let hayOtros = false;
let caracter;
const minusculas = 'aáàbcçdeéèfghiíìjklmnñoóòpqrstuúùüvwxyz';
const numeros = '0123456789';

do {
    nombre = prompt('Escriba su nombre de usuario deseado');
    if (nombre == null) seguir = false;
    if (seguir) {
        let contador = 0;
        let numMayusculas = 0;
        let numNumeros = 0;
        let numSimbolos = 0;
        nombreOK = true;
        while (contador<nombre.length) {

            if (minusculas.indexOf(nombre.charAt(contador)) == -1) {
                if (minusculas.toUpperCase().indexOf(nombre.charAt(contador)) != -1) {
                    numMayusculas++;
                } else if (numeros.indexOf(nombre.charAt(contador)) != -1) {
                    numNumeros++;
                } else {
                    numSimbolos++;
                } 
            }
            contador++;
        }

        if (numMayusculas > 0 || numNumeros == 0 || numSimbolos > 0) {
            nombreOK = false;
            alert(`El usuario es incorrecto.\nDebe contener minúsculas y números.`);
        }
        
    }
} while (seguir && !nombreOK);

if (seguir) {
    do {
        hayMinusculas = false;
        hayMayusculas = false;
        hayNumeros = false;
        hayOtros = false;

        contrasenya = prompt('Escriba su contraseña deseada');

        if (contrasenya == null) seguir = false;

        if (seguir) {
            contrasenyaOK = true;
            let i = 0;

            while (contrasenyaOK && i<contrasenya.length) {
                caracter = contrasenya.charAt(i);

                if (minusculas.indexOf(caracter) != -1) {
                    hayMinusculas = true;
                } else if (minusculas.toUpperCase().indexOf(caracter) != -1) {
                    hayMayusculas = true;
                } else if (numeros.indexOf(caracter) != -1) {
                    hayNumeros = true;
                } else {
                    hayOtros = true;
                }
                i++;
            }
            contrasenyaOK = (hayMinusculas && hayMayusculas
                && hayNumeros  && hayOtros );

            if (!contrasenyaOK) {
                alert ('La contraseña es incorrecta\n' + 
                'Debe contener minúsculas, mayúsculas, número y ' + 
                'otros símbolos');
            }
        }

    } while (seguir && !contrasenyaOK);
}

if (seguir) {
    document.write('<p>Se almacenó correctamente la información</p>');
} else {
    document.write('<p>La operación ha sido cancelada</p>');
}