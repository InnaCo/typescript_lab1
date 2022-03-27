import { Persona } from "./person";
import { Direction } from "./direction";
import { Mail } from "./mail";
import { Telefono } from "./telefono";



// Persona 1
const telefRafael = new Telefono("movil", 645378390);
const mailRafael = new Mail("personal", "rafa@gmail.com");
const dirRafael = new Direction("Calle Palestina", 17, "6", "A", 28822, "Coslada", "Madrid");
const persRafael = new Persona ("Rafael", "Fernandes", 34, "98765432C", new Date(1988/3/27), "blanco", "hombre", [dirRafael], [mailRafael], [telefRafael], "No tiene telefono de trabajo");

// Persona 2
const telefAlex = new Telefono("movil", 647893405);
const mailAlex = new Mail("trabajo", "alex@hotmail.com");
const dirAlex = new Direction("Calle Buenos Aires", 40, "Bj", "B", 28300, "Aranjuez", "Madrid");
const persAlex = new Persona("Alex", "Martinez", 50, "45687349M", new Date(1972/4/23), "negro", "hombre", [dirAlex], [mailAlex], [telefAlex], "No tiene telefono fijo" );

// Persona 3
const telefLaura = new Telefono("fijo", 9574839473);
const mailLaura = new Mail("personal", "laura@gmail.com");
const dirLaura = new Direction("Calle Peru", 65, "34", "A", 36006, "Aguila", "Alicante");
const persLaura = new Persona("Laura", "Diaz", 27, "60795432Y", new Date(1995/5/21), "verde", "mujer", [dirLaura], [mailLaura], [telefLaura], "No tiene telefono movil");

console.log("Los contactos introducidos:")
console.log(persRafael);
console.log(persAlex);
console.log(persLaura);



if (persLaura.dni === "60795432Y") {

    let name = "Laura Diaz";

    let newDir = [new Direction("Calle San Blas", 9, "Bajo", "A", 34987, "Torrejon", "Madrid")];
    Object.assign(persLaura.getDireccion, newDir);

    let newMail = [new Mail("trabajo", "l.p@gmail.com")];
    Object.assign(persLaura.getMail, newMail);

    let newTel = [new Telefono("movil", 6378450083)];
    Object.assign(persLaura.getTelefono, newTel);

    console.log("Updated datas:", name, newDir, newMail, newTel);
}

