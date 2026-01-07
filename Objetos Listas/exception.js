class ListException {
    constructor(message) {
        this.message = message;
        this.name = this.constructor.name;
    }
}

class FullListException extends ListException {}
class EmptyListException extends ListException {}
class IndexOutOfBoundsException extends ListException {}
class InvalidTypeException extends ListException {}
class DuplicateElementException extends ListException {}

export { ListException, FullListException, EmptyListException, IndexOutOfBoundsException, InvalidTypeException, DuplicateElementException };
