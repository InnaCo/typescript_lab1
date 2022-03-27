"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipoTel, numeroTel) {
        this.tipoTelefono = tipoTel;
        this.numeroTelefono = numeroTel;
    }
    Telefono.prototype.getTipo = function () {
        return this.tipoTelefono;
    };
    Telefono.prototype.setTipo = function (value) {
        this.tipoTelefono = value;
    };
    Telefono.prototype.getNumero = function () {
        return this.numeroTelefono;
    };
    Telefono.prototype.setNumero = function (value) {
        this.numeroTelefono = value;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
