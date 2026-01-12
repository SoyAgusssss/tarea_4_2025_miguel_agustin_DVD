// Clase categoría
class Category {
    #name
    #description
    constructor(name, description = "") {
        this.name = name
        this.description = description
    }
    // Getters y Setters
    get name() {
        return this.#name
    }

    set name(v){
        if(!v || typeof v !== 'string') {
            throw new Error("Error al poner el nombre de la categoría")
        }
        this.#name = v
    }

    get description() {
        return this.#description
    }

    set description(v) {
        if(typeof v !== 'string') {
            throw new Error("Error al poner la descripción")
        }
        this.#description = v
    }
    // Método toString
    toString() {
        return `Nombre: ${this.name} | Descripción: ${this.description}`
    }
}

export default Category
