import Production from "./Production.js";
import Resource from "./Resource.js";
import Coordinate from "./Coordinate.js";

class Movie extends Production {
    #resource
    #locations
    constructor(title, nationality, publication, sypnopsis, image, resource = null, locations = []) {
        super(resource, locations)
        this.resource = resource
        this.locations = locations
    }

    get resource() {
        return this.#resource
    }

    set resource(v) {
        if(v !== null && !(v instanceof Resource)) {
            throw new Error("Error en el recurso. Debe ser una instancia de Resource")
        }
        this.#resource = v
    }

    get locations() {
        return this.#locations
    }

    set locations(v) {
        if(!Array.isArray(v)) {
            throw new Error("La localización debe de ser un Array")
        }

        for(const c of v) {
            if(!(c instanceof Coordinate)) {
                throw new Error("La localización debe ser una instancia de Coordinate")
            }
        }
        this.#locations = v
    }

    toString() {
        return `Produccion: ${super.toString()} | Recurso: ${this.resource} | Localización: ${this.locations} `
    }
}

/*
1.5. Objeto Movie
Representa un recurso película que podremos reproducir en el sistema. Hereda de Producción.
Propiedad Tipo Obligatorio Descripción
resource Resource No Recurso con el contenido de la película.
locations [Coordinate] No Array con diferentes ubicaciones donde
transcurre la película.
*/
