import VideoSystem from "./VideoSystem.js";
import Category from "./Category.js";
import User from "./User.js";
import Person from "./Person.js";
import Production from "./Production.js";

function testVideoSystem() {
    console.log("==== TEST VIDEO SYSTEM ====");

    const vs = VideoSystem.getInstance("Miguel VideoSystem");

    // Crear categorías
    const catAction = vs.createCategory("Acción", "Películas de acción");
    const catComedy = vs.createCategory("Comedia", "Comedia divertida");
    vs.addCategory(catAction, catComedy);

    // Crear usuarios
    const user1 = vs.createUser("agus", "agus@mail.com", "1234");
    const user2 = vs.createUser("miguel", "miguel@mail.com", "abcd");

    vs.addUser(user1, user2);

    // Crear personas (actores y directores)
    const actor1 = vs.createPerson("Pedro", "H", "Actor", new Date("1980-01-01"), "");
    const actor2 = vs.createPerson("Paco", "W", "Actriz", new Date("1990-02-02"), "");
    const director1 = vs.createPerson("Lucia", "S", "Directora", new Date("1946-12-18"), "");

    vs.addActor(actor1, actor2);
    vs.addDirector(director1);

    // Crear producciones
    const prod1 = vs.createProduction("Pelicula Acción", "USA", new Date("1980-01-01"), "Explosiones y acción", "");
    const prod2 = vs.createProduction("Pelicula Comedia", "USA", new Date("1980-01-01"), "Risas enlatadas", "");

    vs.addProduction(prod1, prod2);

    // Asignar categorías
    vs.assignCategory(catAction, prod1);
    vs.assignCategory(catComedy, prod2);

    // Asignar actores
    vs.assignActor(actor1, prod1, prod2);
    vs.assignActor(actor2, prod2);

    // Asignar director
    vs.assignDirector(director1, prod1, prod2);

    console.log("\n-- Categorías y Producciones --");
    for (const catName of [catAction.name, catComedy.name]) {
        const cat = vs.createCategory(catName);
        console.log(cat.name, Array.from(vs.getProductionsCategory(cat)).map(p => p.title));
    }

    console.log("\n-- Actores y sus Producciones --");
    for (const actor of vs.actors) {
        console.log(actor.name, Array.from(vs.getProductionsActor(actor)).map(p => p.title));
    }

    console.log("\n-- Directores y sus Producciones --");
    for (const director of vs.directors) {
        console.log(director.name, Array.from(vs.getProductionsDirector(director)).map(p => p.title));
    }

    console.log("\n-- Reparto de 'Pelicula Comedia' --");
    console.log(Array.from(vs.getCast(prod2)).map(a => a.name));

    console.log("\n-- Filtrar Producciones Acción --");
    const filtered = vs.filterProductionsInCategory(catAction, p => p.title.includes("Acción"));
    console.log(Array.from(filtered).map(p => p.title));

    console.log("\n-- Test completado --");
}

testVideoSystem();


