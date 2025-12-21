import Category from "./Category.js"
import User from "./User.js"
import Production from "./Production.js"

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

        get users() {
            return this.#users.values()
        }

        addUser(...users) {
            for(const u of users) {
                if (u === null || !(u instanceof User)) {
                    throw new Error("El usuario no puede ser null o no es un objeto User");
                }
                if(this.#users.has(u.username)) {
                    throw new Error("El nombre ya existe")
                }
                for(const mal of this.#users.values()) {
                    if(mal.mail === u.mail) {
                        throw new Error("El correo ya existe")
                    }
                }
                this.#users.set(u.username, u)  
            }
            return this.#users.size
        }

        removeUser(...users){
            for(const u of users) {
                if(u === null || !(u instanceof User)) {
                    throw new Error("El usuario no puede ser null o no ser un susuario")
                }
                if(!this.#users.has(u.username)) {
                    throw new Error("El usuario no existe")
                }
                this.#users.delete(u.username)
            }
            return this.#users.size
        }

        get productions() {
            return this.#productions.values()
        }

        addProductions(...productions){
            for(const p of productions) {
                if(p === null || !(p instanceof Production)) {
                    throw new Error("La producción no puede ser null o no ser una Producción")
                }
                if(this.#productions.has(p.title)) {
                    throw new Error("Ya existe una producción")
                }
                this.#productions.set(p.title, p)
            }
            return this.#productions.size
        }

        removeProductions(...productions) {
            for(const p of productions) {
                if(p  === null || !(p instanceof Production)) {
                    throw new Error("No puede ser null o no ser una producción")
                }
                if(!this.#productions.has(p.title)) {
                    throw new Error("Error la producción debe de existir")
                }
                this.#productions.delete(p.title)
            }
        }


}