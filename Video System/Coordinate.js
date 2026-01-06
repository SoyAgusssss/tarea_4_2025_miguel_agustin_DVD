class Coordinate {
    #latitude
    #longitude

    constructor(latitude, longitude) {
        this.latitude = latitude
        this.longitude = longitude
    }

    get latitude() {
        return this.#latitude
    }

    set latitude(v) {
        if(!v || typeof v !== 'number') {
            throw new Error("Error en la latitud")
        }
        this.#latitude = v
    }

    get longitude() {
        return this.#longitude
    }

    set longitude(v) {
        if(!v || typeof v !== 'number') {
            throw new Error("Error en la longitud")
        }
        this.#longitude = v
    }
    
    toString() {
        return `Latitud: ${this.latitude} | Longitud: ${this.longitude}`
    }
}

export default Coordinate