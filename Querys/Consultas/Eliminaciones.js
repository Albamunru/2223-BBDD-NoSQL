// Seleecionamos la base de datos a utilizar.
use("ZOO");

// 1ºRealizamos consultas de filtro

const borrar = db.getCollection("Animales").deleteMany({ Nombre: "Yogi" });

console.log("\nBorramos los animales que se llamen Yogi\n");
// Mostramos la colección
console.log(`${borrar.deletedCount} animal/es borrados`);


console.log("\n___________________________________________");

// 2ºRealizamos consultas de filtro
const borrarEspectaculos = db.getCollection("Espectaculo").deleteMany({ Aforo_Maximo: { $gte: 350 } });

console.log("\nBorramos los espectáculos que tengan un aforo máximo de 350\n");
// Mostramos la colección
console.log(`${borrarEspectaculos.deletedCount} espectáculos borrados`);

console.log("\n___________________________________________");

// 3ºRealizamos consultas de filtro
const borrarEntradas = db.getCollection("Entrada").deleteMany({$or: [{Precio: 18.75 }, {Precio:18.50}]});

console.log("\nBorramos las entradas que tengan un precio de 18.75 o 18.50€\n");
// Mostramos la colección
console.log(`${borrarEntradas.deletedCount} entradas borradas`);

console.log("\n___________________________________________");

// 4ºRealizamos consultas de filtro
const borrarAlimentacion = db.getCollection("Alimentacion").deleteMany({ Cantidad_Diaria: { $lt: 10 } });

console.log("\nBorramos la alimentación con una cantidad diaria menor a 10\n");
// Mostramos la colección
console.log(`${borrarAlimentacion.deletedCount} alimenatcion borradas`);

console.log("\n___________________________________________");

// 5ºRealizamos consultas de filtro
const borrarVeterinario = db.getCollection("Empleados").deleteOne({ Puesto: ("Veterinario") });

console.log("\nBorramos un veterinario (El primero que encuentre)\n");
// Mostramos la colección
console.log(`${borrarVeterinario.deletedCount} veterinario borrado`);

console.log("\n___________________________________________");

// 6ºRealizamos consultas de filtro
const borrarEmpleado = db.getCollection("Empleados").deleteOne({ _id: ObjectId("6467a55f7593908880b5beb7") })

console.log("\nBorramos al empleado con un id específico\n");
// Mostramos la colección
console.log(`${borrarEmpleado.deletedCount} empleado borrado`);

console.log("\n___________________________________________");