// Seleccionamos la base de datos.
use('ZOO');

// 1ºModificamos la especie de la jirafa
const cambioNombre = db.getCollection("Animales").update({Id_Animal: "JirafaM1"},{$set:{Especie:"Jirafa Cuello Largo"}});

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos el animal con un id específico\n");
console.log(`${cambioNombre.modifiedCount} modificados`);
console.log("______________________________________\n");


// 2ºModificamos el salario de los que cobran menos de 2200€ incrementándolos 300€
const subidaSalario = db.getCollection("Empleados").updateMany({Salario: {$lt:2200}},{$inc:{Salario:300}});

//Mostramos el número de empleados a los que se les ha incrementado el salario
console.log("\nIncrementamos el salario\n");
console.log(`${subidaSalario.modifiedCount} modificados`);
console.log("______________________________________\n");


// 3ºModificamos la categoria de las  entradas que terminan en 8
const cambioDeCategoria = db.getCollection("Entrada").updateMany({ Id_Entrada: /8$/ },{ $set: { Categoria: "ESPECIAL" } });

// Mostramos la consulta de modificación
console.log("\nModificamos las entradas cuya ID terminan en 8\n");
console.log(`${cambioDeCategoria.modifiedCount} modificados`);
console.log("______________________________________\n");


// 4ºModificamos las alimentaciones con una cantidad diaria mayor de 50 añandiéndole un nuevo campo Observación
const cambioAlimentacion = db.getCollection("Alimentacion").update({Cantidad_Diaria: {$gte: 50} },{$set:{Observacion:"Comen mucho"}});

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos las alimentaciones con una cantidad diaria mayor de 50\n");
console.log(`${cambioAlimentacion.modifiedCount} modificados`);
console.log("______________________________________\n");


// 5ºModificamos los espectáculos de aves que contengan "Av" poniéndoles un precio especial
const cambioEspectaculo = db.getCollection("Espectaculo").update({Id_Espectaculo: /Av/},{$set:{PrecioEspecial:3}});

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos los espectáculos de aves\n");
console.log(`${cambioEspectaculo.modifiedCount} modificados`);
console.log("______________________________________\n");


// 6ºModificamos los hábitats de tipo tierra con los animales cuyo nombre acaben en a y le aumentamos su capacidad un 20%
const cambioHabitat = db.getCollection("Habitat").updateMany({ Tipo: "Tierra", Nombre: /a$/ },{ $mul: { Capacidad_Maxima: 1.2 } });

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos los hábitats\n");
console.log(`${cambioHabitat.modifiedCount} modificados`);
console.log("______________________________________\n");


// 7ºModificamos los animales por id y le sumamos 3 años a su edad
const cambioAnimalPorId = db.getCollection("Animales").updateMany({ _id: ObjectId("6464b25081632ad5f58db318") },{ $inc: { Edad: 3 } });

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos los animales\n");
console.log(`${cambioAnimalPorId.modifiedCount} modificados`);
console.log("______________________________________\n");