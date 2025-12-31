class Person {
    #name
    #lastname1
    #lastname2
    #born
    #picture
    constructor(name, lastname1, lastname2, born, picture) {
        this.name = name;
        this.lastname1 = lastname1
        this.lastname2 = lastname2;
        this.born = born;
        this.picture = picture
    }

    get name() {
        return this.#name
    }

    set name(v){
        if(!v || typeof v !== 'string') {
            throw new Error("Error al poner el nombre")
        }
        this.#name = v
    }

    get lastname1() {
        return this.#lastname1
    }

    set lastname1(v){
        if(!v || typeof v !== 'string') {
            throw new Error("Error al poner el primer Apellido")
        }
        return this.#lastname1 = v
    }

    get lastname2() {
        return this.#lastname2
    }

    set lastname2(v) {
        if(typeof v !== 'string') {
            throw new Error("Error al poner el segundo apellido")
        }
        return this.#lastname2 = v
    }

    get born() {
        return this.#born
    }

    set born(v){
        if(!v || !(v instanceof Date)) {
            throw new Error("Error al poner la fecha de nacimiento")
        }
        return this.#born = v
    }

    get picture() {
        return this.#picture
    }

    set picture(v) {
        if(typeof v !== 'string') {
            throw new Error("Error al poner la imagen")
        }
        return this.#picture = v
    }

    toString() {
        return `Nombre: ${this.name} | Primer Apellido: ${this.lastname1} | Segundo Apellido: ${this.lastname2} | Nacimiento: ${this.born} | Imagen: ${this.picture}`
    }
}

export default Person