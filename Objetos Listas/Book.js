class Book {
    constructor(ISBN, title) {
        this.ISBN = ISBN;
        this.title = title;
    }

    toString() {
        return this.title;
    }
}

export default Book