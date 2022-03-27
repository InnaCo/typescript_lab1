"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(_tipoMail, _direccionMail) {
        this.tipoMail = _tipoMail;
        this.direccionMail = _direccionMail;
    }
    Mail.prototype.getTipo = function () {
        return this.tipoMail;
    };
    Mail.prototype.setTipo = function (value) {
        this.tipoMail = value;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccionMail;
    };
    Mail.prototype.setDireccion = function (value) {
        this.direccionMail = value;
    };
    return Mail;
}());
exports.Mail = Mail;
