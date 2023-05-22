// Seleccionamos la base de datos.
use('ZOO');

// Modificamos la especie de la jirafa
const cambioNombre = db.getCollection("Animales").update({Id_Animal: "JirafaM1"},{$set:{Especie:"Jirafa CuelloLargo"}});

//Mostramos el número de elementos que se han modificado
console.log("\nModificamos el animal con un id específico\n");
console.log(`${cambioNombre.modifiedCount} modificados`);
console.log("______________________________________\n");

// Modificamos el salario de los que cobran menos de 2200€ incrementándolos 300€
const subidaSalario = db.getCollection("Empleados").updateMany({Salario: {$lt:2200}},{$inc:{Salario:300}});

//Mostramos el número de empleados a los que se les ha incrementado el salario
console.log("\nIncrementamos el salario\n");
console.log(`${subidaSalario.modifiedCount} modificados`);
console.log("______________________________________\n");

const cambioDeCategoria = db.getCollection("Entrada").updateMany({ Id_Entrada: /8$/ },{ $set: { Categoria: "ESPECIAL" } });
  
  // Mostramos la consulta de modificación
  console.log("\nModificamos las entradas cuya ID terminan en 8\n");
  console.log(`${cambioDeCategoria.modifiedCount} modificados`);
  console.log("______________________________________\n");