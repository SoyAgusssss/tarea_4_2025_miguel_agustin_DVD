class Resource{
    #duration
    #link
    constructor(duration, link) {
        this.duration = duration
        this.link = link
    }

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

    toString() {
        return  `Duración ${this.duration} | Link: ${this.link}`
    }
}

export default Resource

/*
1.3. Objeto Resource
Representa un recurso audiovisual.
Propiedad Tipo Obligatorio Descripción
duration Number Si Nº de minutos de la película.
link String Si Ruta donde se ubica el recurso.

*/