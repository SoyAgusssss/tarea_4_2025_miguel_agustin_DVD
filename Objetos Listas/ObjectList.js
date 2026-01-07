import List from "./List.js";
import { InvalidTypeException } from "./exception.js";

class ObjectList extends List {
    #type;

    constructor(type, capacity = 10) {
        super(capacity);
        this.#type = type;
    }

    add(elem) {
        if (!(elem instanceof this.#type))
            throw new InvalidTypeException("Tipo de objeto no permitido");
        return super.add(elem);
    }

    addAt(elem, index) {
        if (!(elem instanceof this.#type))
            throw new InvalidTypeException("Tipo de objeto no permitido");
        return super.addAt(elem, index);
    }

    get type() {
        return this.#type;
    }
}

export default ObjectList