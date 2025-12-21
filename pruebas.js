import Person from "./Person.js"
import Category from "./Category.js"
import Resource from "./Resource.js"
import Production from "./Production.js"
import Movie from "./Movie.js"

const naci = new Date(2025,11,12)

const hola = new Production("Hola", "Hola", naci, "a", "image")

console.log(hola.toString())


