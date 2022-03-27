"use strict";
exports.__esModule = true;
exports.Direction = void 0;
var Direction = /** @class */ (function () {
    function Direction(_calle, _numero, _piso, _letra, _codigoPostal, _poblacion, _provincia) {
        this.calle = _calle;
        this.numero = _numero;
        this.piso = _piso;
        this.letra = _letra;
        this.codigoPostal = _codigoPostal;
        this.poblacion = _poblacion;
        this.provincia = _provincia;
    }
    Direction.prototype.getCalle = function () {
        return this.calle;
    };
    Direction.prototype.setCalle = function (value) {
        this.calle = value;
    };
    Direction.prototype.getNumero = function () {
        return this.numero;
    };
    Direction.prototype.setNumero = function (value) {
        this.numero = value;
    };
    Direction.prototype.getPiso = function () {
        return this.piso;
    };
    Direction.prototype.setPiso = function (value) {
        this.piso = value;
    };
    Direction.prototype.getLetra = function () {
        return this.letra;
    };
    Direction.prototype.setLetra = function (value) {
        this.letra = value;
    };
    Direction.prototype.getCodigoPostal = function () {
        return this.codigoPostal;
    };
    Direction.prototype.setCodigoPostal = function (value) {
        this.codigoPostal = value;
    };
    Direction.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direction.prototype.setPoblacion = function (value) {
        this.poblacion = value;
    };
    Direction.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direction.prototype.setProvincia = function (value) {
        this.provincia = value;
    };
    return Direction;
}());
exports.Direction = Direction;
