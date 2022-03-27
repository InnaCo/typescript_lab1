"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var direction_1 = require("./direction");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
// Persona 1
var telefRafael = new telefono_1.Telefono("movil", 645378390);
var mailRafael = new mail_1.Mail("personal", "rafa@gmail.com");
var dirRafael = new direction_1.Direction("Calle Palestina", 17, "6", "A", 28822, "Coslada", "Madrid");
var persRafael = new person_1.Persona("Rafael", "Fernandes", 34, "98765432C", new Date(1988 / 3 / 27), "blanco", "hombre", [dirRafael], [mailRafael], [telefRafael], "No tiene telefono de trabajo");
// Persona 2
var telefAlex = new telefono_1.Telefono("movil", 647893405);
var mailAlex = new mail_1.Mail("trabajo", "alex@hotmail.com");
var dirAlex = new direction_1.Direction("Calle Buenos Aires", 40, "Bj", "B", 28300, "Aranjuez", "Madrid");
var persAlex = new person_1.Persona("Alex", "Martinez", 50, "45687349M", new Date(1972 / 4 / 23), "negro", "hombre", [dirAlex], [mailAlex], [telefAlex], "No tiene telefono fijo");
// Persona 3
var telefLaura = new telefono_1.Telefono("fijo", 9574839473);
var mailLaura = new mail_1.Mail("personal", "laura@gmail.com");
var dirLaura = new direction_1.Direction("Calle Peru", 65, "34", "A", 36006, "Aguila", "Alicante");
var persLaura = new person_1.Persona("Laura", "Diaz", 27, "60795432Y", new Date(1995 / 5 / 21), "verde", "mujer", [dirLaura], [mailLaura], [telefLaura], "No tiene telefono movil");
console.log("Los contactos introducidos:");
console.log(persRafael);
console.log(persAlex);
console.log(persLaura);
if (persLaura.dni === "60795432Y") {
    var name_1 = "Laura Diaz";
    var newDir = [new direction_1.Direction("Calle San Blas", 9, "Bajo", "A", 34987, "Torrejon", "Madrid")];
    Object.assign(persLaura.getDireccion, newDir);
    var newMail = [new mail_1.Mail("trabajo", "l.p@gmail.com")];
    Object.assign(persLaura.getMail, newMail);
    var newTel = [new telefono_1.Telefono("movil", 6378450083)];
    Object.assign(persLaura.getTelefono, newTel);
    console.log("Updated datas:", name_1, newDir, newMail, newTel);
}
