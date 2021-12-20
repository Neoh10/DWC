
class Edificio {
    constructor(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();


        this.agregarPlanta 
class Edificio {
    constructor(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();


        this.agregarPlanta = function (numeroPlanta) {
        
          this.mapaPropietariosEdificio.set(numeroPlanta, new Map());
            
        };


        this.agregarPuerta = function (numeroPlanta, numeroPuerta) {
           
            this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, new Array());
            
        };


        this.agregarPropietario = function (nombrePropietario, numeroPlanta, numeroPuerta) {
           
            this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
            
        };


        this.imprimirTodosPropietarios = function () {
            let resultado = "";
            for (let planta of this.mapaPropietariosEdificio.keys()) {
                resultado += "Planta: " + planta + "\n";
                for (let puerta of this.mapaPropietariosEdificio.get(planta).keys()) {
                    resultado += "\tPuerta: " + puerta + "\n";
                    for (let propietarios of this.mapaPropietariosEdificio.get(planta).get(puerta).values()) {
                        resultado += "\t\t" + propietarios + "\n";
                    }
                }
            }
            return resultado;
        };

        this.imprimirTipoVia = function () {
            return "Tipo de vía: " + this.tipoVia;
        };


        this.imprimirNombreVia = function () {
            return "Nombre de la vía: " + this.nombreVia;
        };


        this.imprimirNumeroEdificio = function () {
            return "Número del edificio: " + this.numeroEdificio;
        };


        this.imprimirCodigoPostal = function () {
            return "Código postal: " + this.codigoPostal;
        };


        this.modificarTipoVia = function (nuevoTipoVia) {
            this.tipoVia = nuevoTipoVia;
        };


        this.modificarNombreVia = function (nuevoNombreVia) {
            this.nombreVia = nuevoNombreVia;
        };


        this.modificarNumeroEdificio = function (nuevoNumeroEdificio) {
            this.numeroEdificio = nuevoNumeroEdificio;
        };


        this.modificarCodigoPostal = function (nuevoCodigoPostal) {
            this.codigoPostal = nuevoCodigoPostal;
        };
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }

   function setRandomColor() {
       document.body.style.backgroundColor = getRandomColor();
   }

setRandomColor();


const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');

edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1');
console.log(edificio1);


edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
console.log(edificio1.imprimirTodosPropietarios());


edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');
console.log(edificio1);


console.log(edificio1.imprimirTipoVia());
console.log(edificio1.imprimirNombreVia());
console.log(edificio1.imprimirNumeroEdificio());
console.log(edificio1.imprimirCodigoPostal());
