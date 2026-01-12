// Clase Resource.js
class Resource{
    #duration
    #link
    constructor(duration, link) {
        this.duration = duration
        this.link = link
    }

    // Getters y Setters
    get duration() {
        return this.#duration
    }

    set duration(v){
        if(!v || typeof v !== 'number') {
            throw new Error("Error en la duración")
        }
        this.#duration = v
    }

    get link() {
        return this.#link
    }

    set link(v){
        if(typeof v !== 'string') {
            throw new Error("Error en el link")
        }
        this.#link = v
    }

    // Método toString
    toString() {
        return  `Duración ${this.duration} | Link: ${this.link}`
    }
}

export default Resource