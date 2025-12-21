import Category from "./Category.js"

class VideoSystem {
    static #instance
    #actors
    #productions
    #categories
    #users
    #directors
    #name
        constructor(name = "Nombre del sistema") {
            if(VideoSystem.#instance) {
                return VideoSystem.#instance
            }
            this.#name = name
            this.#actors = new Map()
            this.#productions = new Map()
            this.#categories = new Map()
            this.#users = new Map()
            this.#directors = new Map()

           VideoSystem.#instance = this
        }

        static getInstance(name) {
            if(VideoSystem.#instance) {
                return VideoSystem.#instance = new VideoSystem(name)
            }
            return VideoSystem.#instance
        }

        get name() {
            return this.#name
        }

        set name(v) {
            if (!v || typeof v !== 'string') {
                 throw new Error('Nombre inválido Video System');
            }
        this.#name = v;
        }

        addCategory(...categories) {
            for(const c of categories) {
                if(!c || !(c instanceof Category)) {
                    throw new Error("Error al añadir una categoría")     
                }
                if(this.#categories.has(c.name)) {
                    throw new Error("La categoría ya existe")
                }
                this.#categories.set(c.name, c)
            }
            return this.#categories.size
        }

        removeCategory(...categories){
            for(const c of categories) {
                if(!(c instanceof Category)) {
                    throw new Error("Debe de ser una categoría")
                }
                if(!this.#categories.has(c.name)) {
                    throw new Error("La categoría no existe")
                }
                this.#categories.delete(c.name)
            }
            return this.#categories.size
        }
}