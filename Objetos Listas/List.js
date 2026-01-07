import { FullListException, EmptyListException, IndexOutOfBoundsException } from "./exception.js";

class List {
    #elements;
    #capacity;

    constructor(capacity = 10) {
        this.#capacity = capacity;
        this.#elements = [];
    }

    isEmpty() {
        return this.#elements.length === 0;
    }

    isFull() {
        return this.#elements.length >= this.#capacity;
    }

    size() {
        return this.#elements.length;
    }

    capacity() {
        return this.#capacity;
    }

    add(elem) {
        if (this.isFull()) throw new FullListException("La lista está llena");
        this.#elements.push(elem);
        return this.size();
    }

    addAt(elem, index) {
        if (this.isFull()) throw new FullListException("La lista está llena");
        if (index < 0 || index > this.size())
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        this.#elements.splice(index, 0, elem);
        return this.size();
    }

    get(index) {
        if (index < 0 || index >= this.size())
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        return this.#elements[index];
    }

    indexOf(elem) {
        return this.#elements.indexOf(elem);
    }

    lastIndexOf(elem) {
        return this.#elements.lastIndexOf(elem);
    }

    firstElement() {
        if (this.isEmpty()) throw new EmptyListException("Lista vacía");
        return this.#elements[0];
    }

    lastElement() {
        if (this.isEmpty()) throw new EmptyListException("Lista vacía");
        return this.#elements[this.size() - 1];
    }

    remove(index) {
        if (index < 0 || index >= this.size())
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        return this.#elements.splice(index, 1)[0];
    }

    removeElement(elem) {
        const index = this.indexOf(elem);
        if (index !== -1) {
            return this.remove(index);
        }
        return null;
    }

    set(elem, index) {
        if (index < 0 || index >= this.size())
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        this.#elements[index] = elem;
    }

    contains(elem) {
        return this.indexOf(elem) !== -1;
    }

    subList(from, to) {
        if (from < 0 || to > this.size() || from > to)
            throw new IndexOutOfBoundsException("Rango inválido");
        const sub = new List(this.capacity());
        for (let i = from; i < to; i++) {
            sub.add(this.#elements[i]);
        }
        return sub;
    }

    clear() {
        this.#elements.length = 0;
    }

    toString() {
        return this.#elements.join(" - ");
    }

    _getElements() {
        return this.#elements;
    }
}

export default List