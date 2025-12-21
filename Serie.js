import Production from "./Production.js";
import Resource from "./Resource.js";
import Resource from "./Coordinate.js";

class Serie {
    #resource
    #locations
    #seasons
    constructor(title, nationality, publication, sypnopsis, image, resource = [], locations = [], seasons) {
        super(title, nationality, publication, sypnopsis, image)
        this.resource = resource
        this.locations = locations
        this.seasons = seasons
    }

    get resource() {
        return this.#resource
    }

    set resource(v) {
        if(!Array.isArray(v)) {
            throw new Error("Debe de ser un array")
        }
        for(const r of v) {
            if(!(v instanceof Resource)) {
            throw new Error("Debe ser una instancia de Resource")
        }
        }
        this.#resource = v
    }

    get locations() {
        return this.#locations
    }

    set locations(v) {
         if(!Array.isArray(v)) {
            throw new Error("Debe de ser un array")
        }
        for(const r of v) {
            if(!(v instanceof Coordinate)) {
            throw new Error("Debe ser una instancia de Coordinate")
        }
        }
        this.#locations = v
    }

    get seasons() {
        return this.#seasons
    }

    set seasons(v) {
        if(typeof v !== 'number') {
            throw new Error("Error en el número de temporadas")
        }
        this.#seasons = v
    }

    toString() {
        return `Produccion: ${super.toString()} | Recursos: ${this.resource} | Localización: ${this.locations} | Temporadas: ${this.seasons}`
    }
}

export default Serie   