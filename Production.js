class Production {
    #title
    #nationality
    #publication
    #sypnopsis
    #image
    constructor(title, nationality, publication, sypnopsis, image) {
        this.title = title
        this.nationality = nationality
        this.publication = publication
        this.sypnopsis = sypnopsis
        this.image = image
    }

    get title() {
        return this.#title
    }

    set title(v) {
        if(!v || typeof v !== 'string') {
            throw new Error("Error en el título")
        }
        this.#title = v
    }

    get nationality() {
        return this.#nationality
    }

    set nationality(v) {
        if(typeof v !== 'string') {
            throw new Error("Error en la nacionalidad")
        }
        this.#nationality = v
    }

    get publication() {
        return this.#publication
    }

    set publication(v) {
        if(!v || !(v instanceof Date)) {
            throw new Error("Error en la fecha de publicación")
        }
        this.#publication = v
    }

    get sypnopsis() {
        return this.#sypnopsis
    }

    set sypnopsis(v){
        if(typeof v !== 'string') {
            throw new Error("Error en la sipnopsis")
        }
        this.#sypnopsis = v
    }

    get image() {
        return this.#image
    }

    set image(v){
        if(typeof v !== 'string') {
            throw new Error("Error en la imagen")
        }
        this.#image = v
    }

    toString() {
        return `Título: ${this.title} | Nacionalidad: ${this.nationality} | Publicación: ${this.publication} | Sipnosis: ${this.sypnopsis} | Imagen: ${this.image}`
    }
}

export default Production

/*
1.4. Objeto Production
Este será un evento genérico para que tanto los siguientes objetos, Movie y Serie, hereden de
él, y así podamos tener una estructura homogénea a la hora de buscar recursos en el sistema.
Este objeto debe ser implementado de forma abstracta para que no se pueda instanciar objetos
de la misma, ya que solo se utiliza para la herencia.
Propiedad Tipo Obligatorio Descripción
title String Si Título de la producción.
nationality String No Define la nacionalidad de la producción.
publication Date Si Fecha de publicación de la producción.
synopsis String No Resumen del contenido de la producción.
image String No String con la ruta donde está ubicada la
imagen.
*/