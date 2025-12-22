import Person from "./Person.js"
import Category from "./Category.js"
import Resource from "./Resource.js"
import Production from "./Production.js"
import Movie from "./Movie.js"
import Coordinate from "./Coordinate.js"
import Coordinate from "./Coordinate.js"

const naci = new Date(2025,11,12)

const hola = new Production("Hola", "Hola", naci, "a", "image")

console.log(hola.toString())

const fecha = new Date(2024, 5, 10)

const recurso = new Resource(120, "https://pelicula.com")
const loc1 = new Coordinate(40.4168, -3.7038)
const loc2 = new Coordinate(48.8566, 2.3522)

const peli = new Movie(
    "Matrix",
    "Ciencia ficción",
    fecha,
    "USA",
    "matrix.jpg",
    recurso,
    [loc1, loc2]
)

console.log(peli.toString())
