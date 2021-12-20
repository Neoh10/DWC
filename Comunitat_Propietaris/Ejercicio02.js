
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
            
            this.mapaPropietariosEdificio.get(nume
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
            let resultado = '';
            for (let planta of Object.keys(this.mapaPropietariosEdificio)) {
                resultado += `<h2>Planta: ${planta}</h2><br/>`;
                for (let puerta of Object.keys(this.mapaPropietariosEdificio[planta])) {
                    resultado += `&nbsp;&nbsp;&nbsp;&nbsp;<h3>Puerta: ${puerta}</h3><br/>`;
                    for (let propietarios of Object.values(this.mapaPropietariosEdificio[planta][puerta])) {
                        resultado += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${propietarios}<br/>`;
                    }
                }
            }
            return resultado;
        };


        this.imprimirTipoVia = function () {
            return this.tipoVia;
        };


        this.imprimirNombreVia = function () {
            return this.nombreVia;
        };


        this.imprimirNumeroEdificio = function () {
            return this.numeroEdificio;
        };


        this.imprimirCodigoPostal = function () {
            return this.codigoPostal;
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



let edificio1 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;


edificio1 = JSON.parse(edificio1);


let edificio2 = new Edificio();


edificio2 = Object.assign(edificio2, edificio1);


document.getElementById("edificio").innerHTML = "<h2>COMUNIDAD DE PROPIETARIOS</h2><br/>" + edificio2.imprimirTipoVia() + "&nbsp" + edificio2.imprimirNombreVia() + ", " + edificio2.imprimirNumeroEdificio() + "<br/>" + edificio2.imprimirCodigoPostal();
document.getElementById("propietarios").innerHTML = edificio2.imprimirTodosPropietarios();
