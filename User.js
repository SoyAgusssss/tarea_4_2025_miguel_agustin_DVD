class User {
    #username
    #mail
    #password
    constructor(username, mail, password) {
        this.username = username
        this.mail = mail
        this.password = password
    }

    get username() {
        return this.#username
    }

    set username(v) {
        if(!v || typeof v !== 'string') {
            throw new Error("Error en el nombre de usuario")
        }
        this.#username = v
    }

    get mail() {
        return this.#mail
    }

    set mail(v) {
        if(!v || typeof mail !== 'string') {
            throw new Error("Error en el mail")
        }
        this.#mail =  v
    }

    get password() {
        return this.#password
    }

    set password(v) {
        if(!v || typeof v !== 'string') {
            throw new Error("Error en la contraseña")
        }
        this.#password = v
    }
    toString() {
        return `Usuario: ${this.username} | Email: ${this.mail}`
    }
}
export default User
