import ObjectList from "./ObjectList.js";

class OrderedObjectList extends ObjectList {
    #order;

    constructor(type, orderFn, capacity = 10) {
        super(type, capacity);
        this.#order = orderFn;
    }

    add(elem) {
        super.add(elem);
        this._getElements().sort(this.#order);
        return this.size();
    }

    get order() {
        return this.#order;
    }
}

export default OrderedObjectList