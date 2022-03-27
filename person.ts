import { Direction } from "./direction";
import { Mail } from "./mail";
import { Telefono } from "./telefono";



export class Persona {
   private nombre: string;
   private apellido: string;
   private edad: number;
   public dni: string;
   private cumple: Date;
   public colorFavorito: string;
   private sexo: string;
   private direccion: Array<Direction>;
   private mail: Array<Mail>;
   private telefono: Array<Telefono>;
   private notas: string;


constructor(nombrePersona: string, apellidoPersona: string, edadPersona: number, dniPersona: string, cumpleanosPersona: Date, colorFavPers: string, sexoPersona: string, direccionP: Array<Direction>, mailP: Array<Mail>, telefonoP: Array<Telefono>, notasP: string)

{
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

public getNombre(): string {
    return this.nombre;
}

public setNombre(value: string){
    this.nombre = value;
}

public getApellido(): string {
    return this.apellido;
}

public setApellido(value: string){
    this.apellido = value;
}

public getEdad(): number {
    return this.edad;
}

public setEdad(value: number){
    this.edad = value;
}

public getDni(): string {
    return this.dni;
}

public setDni(value: string){
    this.dni = value;
}

public getCumple(): Date {
    return this.cumple;
}

public setCumple(value: Date){
    this.cumple = value;
}

public getColor(): string {
    return this.colorFavorito;
}

public setColor(value: string) {
    this.colorFavorito = value;
}

public getSexo(): string {
    return this.sexo;
}

public setSexo(value: string) {
    this.sexo = value;
}

public getDireccion(): Array<Direction> {
    return this.direccion;
}

public setDireccion(value: Array<Direction> ) {
    this.direccion = value;
}

public getMail(): Array<Mail> {
    return this.mail;
}

public setMail(value: Array<Mail>) {
    this.mail = value;
}

public getTelefono():  Array<Telefono> {
    return this.telefono;
}

public setTelefono(value: Array<Telefono>) {
    this.telefono = value;
}

public getNotas(): string {
    return this.notas;
}

public setNotas(value: string) {
    this.notas = value;
}


addNewDirection(direction: Direction) {
    this.direccion.push(direction);
}

addNewPhone(telefono: Telefono) {
    this.telefono.push(telefono);
}

addNewMail(mail: Mail) {
    this.mail.push(mail);
}
}
