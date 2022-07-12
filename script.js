//Clase objeto "Amigo"

class Amigo {
    constructor(id, nombre, apellido, edad, ocupacion, novia) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.ocupacion = ocupacion
        this.novia = novia
    }
}

const amigo1 = new Amigo(1, "David", "Behar", 23, "Economista", ["Tiene novia"])
const amigo2 = new Amigo(2, "Braulio", "Moreno", 24, "Politólogo", ["Soltero"])
const amigo3 = new Amigo(3, "Gianfranco", "Rossi", 23, "Encargado", ["Tiene novia"])
const amigo4 = new Amigo(4, "José", "Fleitas", 26, "Médico", ["Soltero"])
const amigo5 = new Amigo(5, "Martín", "Cárdenas", 28, "Prof. Ed. Fisica", ["Soltero"])

//Array de objetos
const amigos = [amigo1, amigo2, amigo3, amigo4, amigo5]

console.log(amigos)

console.log(amigos[1].ocupacion)

console.log(amigos[4].novia)

//find

let amigoABuscar = prompt("Ingrese un nombre de un amigo")

console.log(amigos.find(amigo => amigo.nombre == amigoABuscar))

//push

amigos.push("Marcos")

//splice

amigos.splice(4,amigos.length)

