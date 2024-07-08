var firstName; //Undefined
firstName = "Luis";
console.log(firstName);

var lastName = "Malagon"; // Declarar / Asignar
lastName = "Palma"; // Reasignar
console.log(lastName);

var secondName = "Armando"; // Declarando / Asignando
var secondName = "Fernando"; // Reasignado
console.log(secondName);

//Let  Se puede reasignar pero no redeclarar
let fruit = "Apple"; //declarar y asignar
fruit = "Kiwi";
console.log("Kiwi")

//Const No podemos reasignar ni redeclarar
const animal = 'Dog'; //Declara y Asigna
animal = 'Cat'; //Reasignado
console.log(animal);

//Const permite segun el uso de lo que tenga podemos trabajar
const vehicles = [];

vehicles.push("🚗​");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);