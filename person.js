"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombrePersona, apellidoPersona, edadPersona, dniPersona, cumpleanosPersona, colorFavPers, sexoPersona, direccionP, mailP, telefonoP, notasP) {
        this.nombre = nombrePersona;
        this.apellido = apellidoPersona;
        this.edad = edadPersona;
        this.dni = dniPersona;
        this.cumple = cumpleanosPersona;
        this.colorFavorito = colorFavPers;
        this.sexo = sexoPersona;
        this.direccion = direccionP;
        this.mail = mailP;
        this.telefono = telefonoP;
        this.notas = notasP;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (value) {
        this.nombre = value;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (value) {
        this.apellido = value;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (value) {
        this.edad = value;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (value) {
        this.dni = value;
    };
    Persona.prototype.getCumple = function () {
        return this.cumple;
    };
    Persona.prototype.setCumple = function (value) {
        this.cumple = value;
    };
    Persona.prototype.getColor = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColor = function (value) {
        this.colorFavorito = value;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (value) {
        this.sexo = value;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (value) {
        this.direccion = value;
    };
    Persona.prototype.getMail = function () {
        return this.mail;
    };
    Persona.prototype.setMail = function (value) {
        this.mail = value;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (value) {
        this.telefono = value;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (value) {
        this.notas = value;
    };
    Persona.prototype.addNewDirection = function (direction) {
        this.direccion.push(direction);
    };
    Persona.prototype.addNewPhone = function (telefono) {
        this.telefono.push(telefono);
    };
    Persona.prototype.addNewMail = function (mail) {
        this.mail.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
