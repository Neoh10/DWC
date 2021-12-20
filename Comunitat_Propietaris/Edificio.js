
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

export {Edificio};