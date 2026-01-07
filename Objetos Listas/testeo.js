import Book from "./Book.js"
import List from "./List.js"
import ObjectList from "./ObjectList.js"
import OrderedObjectList from "./OrderedObjectList.js";

function testLists() {
    console.log(" -TEST LIST - ");
    const list = new List(5);
    console.log("Lista creada con capacidad 5");
    console.log("isEmpty():", list.isEmpty());
    console.log("isFull():", list.isFull());
    console.log("size():", list.size());
    console.log("capacity():", list.capacity());

    // Agregar elementos
    list.add(1);
    list.add(2);
    list.add(3);
    console.log("Después de add(1), add(2), add(3):", list.toString());
    console.log("size():", list.size());
    console.log("isEmpty():", list.isEmpty());

    // addAt
    list.addAt(0, 0);
    console.log("Después de addAt(0, 0):", list.toString());

    // get
    console.log("get(1):", list.get(1));

    // set
    list.set(99, 1);
    console.log("Después de set(99, 1):", list.toString());

    // indexOf, lastIndexOf, contains
    console.log("indexOf(2):", list.indexOf(2));
    console.log("lastIndexOf(2):", list.lastIndexOf(2));
    console.log("contains(99):", list.contains(99));

    // firstElement, lastElement
    console.log("firstElement():", list.firstElement());
    console.log("lastElement():", list.lastElement());

    // subList
    console.log("subList(1, 3):", list.subList(1, 3).toString());

    // remove
    list.remove(1);
    console.log("Después de remove(1):", list.toString());

    // removeElement
    list.removeElement(3);
    console.log("Después de removeElement(3):", list.toString());

    // clear
    list.clear();
    console.log("Después de clear():", list.toString());
    console.log("size():", list.size());

    // Probar excepciones
    try {
        list.get(0);
    } catch (e) {
        console.error("get(0) en lista vacía:", e.name + ": " + e.message);
    }

    try {
        const fullList = new List(2);
        fullList.add(1);
        fullList.add(2);
        fullList.add(3);
    } catch (e) {
        console.error("add en lista llena:", e.name + ": " + e.message);
    }

    try {
        list.get(-1);
    } catch (e) {
        console.error("get(-1):", e.name + ": " + e.message);
    }

    console.log("\n=== TEST OBJECT LIST ===");
    const books = new ObjectList(Book, 5);
    console.log("ObjectList creada para tipo Book, capacidad 5");
    console.log("type:", books.type.name);

    const b1 = new Book("978-84-1111-111-1", "Libro A");
    const b2 = new Book("978-84-2222-222-2", "Libro B");
    const b3 = new Book("978-84-3333-333-3", "Libro C");

    books.add(b1);
    books.add(b2);
    console.log("Después de add(b1), add(b2):", books.toString());

    // Heredar métodos de List
    console.log("size():", books.size());
    console.log("get(0).title:", books.get(0).title);
    books.addAt(b3, 1);
    console.log("Después de addAt(b3, 1):", books.toString());

    // Excepción de tipo inválido
    try {
        books.add({});
    } catch (e) {
        console.error("add({}) en ObjectList:", e.name + ": " + e.message);
    }

    console.log("- TEST ORDERED OBJECT LIST -");
    const orderedBooks = new OrderedObjectList(
        Book,
        (a, b) => a.ISBN.localeCompare(b.ISBN),
        5
    );
    console.log("OrderedObjectList creada, orden por ISBN");
    console.log("type:", orderedBooks.type.name);
    console.log("order (función):", typeof orderedBooks.order);

    // Agregar en orden inverso, pero se ordena automáticamente
    orderedBooks.add(b2)
    orderedBooks.add(b1);
    orderedBooks.add(b3);
    console.log("Después de add(b2), add(b1), add(b3) (ordenado por ISBN):", orderedBooks.toString());

    // Heredar métodos
    console.log("size():", orderedBooks.size());
    console.log("contains(b1):", orderedBooks.contains(b1));

    // Excepción de tipo inválido
    try {
        orderedBooks.add("string");
    } catch (e) {
        console.error("add('string') en OrderedObjectList:", e.name + ": " + e.message);
    }
}

testLists();
