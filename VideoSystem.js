import Category from "./Category.js"
import User from "./User.js"
import Production from "./Production.js"
import Person from "./Person.js"


class VideoSystem {
    static #instance
    #actors
    #productions
    #categories
    #users
    #directors
    #name
    #categoryToProduction
    #directorToProduction
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
            this.#categoryToProduction = new Map()
            this.#categoryToProduction = new Map()

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
            return this.#users.size()
        }

        get productions() {
            return this.#productions.values
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
            return this.#productions.size
        }

        get actors() {
            return this.#actors.values
        }

        addActor(...actors) {
            for(const a of actors) {
                if(a === null || !(a instanceof Person)) {
                    throw new Error("El actor no puede ser null o no se un Person")
                }
                if(this.#actors.has(a.name)) {
                    throw new Error("Error. Ya existe ese actor")
                }
                this.#actors.set(a.name, a)
            }
            return this.#actors.size
        }

        removeActor(...actors) {
            for(const a of actors) {
                if(a ===  null || !(a instanceof Person)) {
                    throw new Error("Error. El actor no debe ser null o ser una Persona")
                }
                if(!this.#actors.has(a.name)) {
                    throw new Error("Error: El actor debe de existir")
                }
                this.#actors.delete(a.name)
            }
            return this.#directors.size

        }

        get directors() {
            return this.#directors.values()
        }

        addDirectors(...directors) {
            for(const d of directors) {
                if(d === null || !(d instanceof Person)) {
                    throw new Error("Error el director no puede ser null o no ser una Persona")
                }
                if(this.#directors.has(d.name)) {
                    throw new Error("El director ya existe")
                }
                this.#directors.set(d.name, d)
            }
            return this.#directors.size
        }

        removeDirectors() {
            for(const d of directors) {
                if(d === null || !(d instanceof Person)) {
                    throw new Error("Error el director no puede ser null o no ser una Persona")
                }
                if(!this.#directors.has(d.name)) {
                    throw new Error("El director ya existe")
                }
                this.#directors.delete(d.name)
            }
        }

        assignCategory(category, ...productions) {
            if(!(category instanceof Category)) {
                throw new Error("Error no es una categoría")
            }
            if(!this.#categories.has(category.name)) {
                this.#categories.set(category.name, category)
            }
            if(!this.#categoryToProduction.has(category)) {
                this.#categoryToProduction.set(category, new Set())
            }

            for(const p of productions) {
                if(!(p instanceof Production)) {
                    throw new Error("Error no es una producción")
                }
                if(!this.#productions.has(p.title)) {
                    this.#productions.set(p.title, p)
                }
                this.#categoryToProduction.get(category).add(p)
            }

            return this.#categoryToProduction.get(category).size
        }

        deassignCategory(category, ...productions) {
            if (category === null || !(category instanceof Category)) {
                throw new Error("Category es null o no válida");
            }
             if (!this.#categoryToProduction.has(category)) {
                throw new Error("La categoría no tiene producciones asignadas");
            }
            for (const p of productions) {
                if (p === null || !(p instanceof Production)) {
                    throw new Error("Production es null o no válida");
                }
                this.#categoryToProduction.get(category).delete(p);
            }
            return this.#categoryToProduction.get(category).size;
        }

        assignDirector(director, ...productions) {
            if(director === null || !(director instanceof Person)) {
                throw new Error("Error en asignar director, no puede ser null o no ser una persona")
            }

            if(!this.#directors.has(director.name)) {
                this.#directors.set(director.name, director)
            }
            if(!this.#directorToProduction.has(director)) {
                this.#directorToProduction.set(director, new Set())
            }

            for(const p of productions) {
                if(p === null || !(p instanceof Production)) {
                    throw new Error("Error en asignar director, no puede ser null o ser una Persona")
                }
                if(!this.#productions.has(p.title)) {
                    this.#productions.set(p.title, p)
                }
                this.#directorToProduction.get(director).add(p)
            }
        }

        deassingDirector(director, ...productions) {
            if(director === null || !(director instanceof Person)) {
                throw new Error("Para deasignar no puede ser null y tiene que ser una persona")
            }
            if(!this.#directorToProduction.has(director)) {
                throw new Error("No hay producciones con ese director")
            }
            for(const p of productions) {
                if(p === null || !(p instanceof Production)) {
                    throw new Error("Para deasignar no puede ser null o no ser una Persona")
                }
                this.#directorToProduction.get(director).delete(p)
            }
            return this.#directorToProduction.get(director).size
        }






        /*
        assignCategory Asigna uno más producciones a una categoría.
Si el objeto Category o Production no existen se
añaden al sistema.
-Category
-Production
Number con el nº
total de producciones
asignadas a la
categoría.
- Category es null
- Production es null.

        */


}