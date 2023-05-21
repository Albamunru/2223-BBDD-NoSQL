// Seleccionamos la base de datos.
use('ZOO');

// Modificamos la especie de la jirafa
const cambioNombre = db.getCollection("Animales").update({Id_Animal: "JirafaM1"},{$set:{Especie:"Jirafa CuelloLargo"}});

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos el animal con un id específico\n");
console.log(`${cambioNombre.modifiedCount} modificados`);
console.log("______________________________________\n");

