// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Realizamos consultas de filtro

// 1ª)Buscamos los animales mayores de 10 años
const animalesMayoresDiez = db.getCollection("Animales").find({
  Edad: { $gte: 10 },
});
console.log("\nAnimales de más de 10 años\n");
// Mostramos la colección
animalesMayoresDiez.forEach((Animal) => {
  console.log("Nombre: " + Animal.Nombre + " - " + Animal.Edad + " años");
});
console.log("______________________________________\n");

// 2ª)Buscamos los animales que empiezan por M
const animalesEmpiezanPorM = db.getCollection("Animales").find({ Nombre: /^M/ });

console.log("\nAnimales que empiezan por M\n");
// Mostramos la colección
animalesEmpiezanPorM.forEach((Animal) => {
  console.log("Nombre: " + Animal.Nombre);
});
console.log("______________________________________\n");

// 3ª)Buscamos los espectáculos con aforo máximo menor de 300
const aforoMenor = db.getCollection("Espectaculo").find({ Aforo_Maximo: { $lt: 360 } });

console.log("\nEspectáculos con aforo menor de 360\n");
// Mostramos la colección
aforoMenor.forEach((Espectaculo) => {
  console.log(
    "Nombre: " +
      Espectaculo.Nombre +
      " - Aforo: " +
      Espectaculo.Aforo_Maximo +
      " personas"
  );
});
console.log("______________________________________\n");

// 4ª)Buscamos los empleados que sean veterinarios y que ganen más de 2300€
const puestoSalario = db.getCollection("Empleados").find({ Salario: { $gte: 2200 }, Puesto: "Veterinario" });

console.log("\nVeterinarios que ganan más de 2300€\n");
// Mostramos la colección
puestoSalario.forEach((Empleados) => {
  console.log(
    "Datos: " +
      Empleados.Datos_Empleado.nombre +
      " - Salario: " +
      Empleados.Salario +
      " €"
  );
});
console.log("______________________________________\n");
// 5ª) Buscar las entradas que tengan un precio de 25,50€ o 12,50€
const entradasPrecios = db.getCollection("Entrada").find({$or: [{Precio: 25.5 }, {Precio:12.5}]});

console.log("\nEntradas con un precio de 25,50€ o 12,50€\n");
// Mostramos la colección
entradasPrecios.forEach((Entrada) => {
  console.log(
    "Categoria: " +
      Entrada.Categoria +
      " - Precio: " +
      Entrada.Precio +
      " €"
  );
});
console.log("______________________________________\n");
// 6ª) Buscar la cantidad diaria sea 5,10 y 50 Kg
const cantidadDiaria = db.getCollection("Alimentacion").find({Cantidad_Diaria:{$in:[5,10,50]}});

console.log("\nCantidad diaria de 5,10 y 50 Kg\n");
// Mostramos la colección
cantidadDiaria.forEach((Alimentacion) => {
  console.log(
    "Nombre: " +
      Alimentacion.Nombre +
      " - Cantidad: " +
      Alimentacion.Cantidad_Diaria +
      " Kg"
  );
});
console.log("______________________________________\n");

// 6ª) Ordenar los hátitats por capacidad máxima descendente
const cantidadDesc = db.getCollection("Habitat").find({ Nombre: { $exists: true } }).sort({Capacidad_Maxima:-1})

console.log("\nHábitats por capacidad máxima descendente\n");
// Mostramos la colección
cantidadDesc.forEach((Habitat) => {
  console.log(
    "Nombre: " +
      Habitat.Nombre +
      " - Capacidad Máxima: " +
      Habitat.Capacidad_Maxima
  );
});
console.log("______________________________________\n");
// 6ª) Ordenar los visitantes por nombre ascendente
const nombreAsc = db.getCollection("Entrada").find({ Datos_Visitante: { $exists: true } }).sort({Datos_Visitante:1})

console.log("\nVisitantes ascendentemente\n");
// Mostramos la colección
nombreAsc.forEach((Entrada) => {
  console.log(
    "Nombre: " +
      Entrada.Datos_Visitante);
});
console.log("______________________________________\n");
// 7ª) Cuenta de todos los empleados
const totalEmpleados = db.getCollection("Empleados").find({}).count([]);

console.log("\nEmpleados\n");
// Mostramos la colección
console.log(
    "Total empleados: " +
    totalEmpleados);
console.log("______________________________________\n");
// 8ª) Cuenta de todos los empleados solo los que sean veterinarios
const totalveterinarios = db.getCollection("Empleados").find({Puesto:"Veterinario"}).count([]);

console.log("\nVeterinarios\n");
// Mostramos la colección
console.log(
    "Total veterinarios: " +
    totalveterinarios);
console.log("______________________________________\n");
// 9ª) Los hábitats que no sean acuáticos
const habitatNOAcuaticos = db.getCollection("Habitat").find({Tipo:{ $ne: "Agua" } });

console.log("\nHábitats no acuáticos\n");
// Mostramos la colección
habitatNOAcuaticos.forEach((Habitat) => {
    console.log(
        "Nombre: "+ Habitat.Nombre+
        " - Tipo: " +
        Habitat.Tipo)
  });
console.log("______________________________________\n");
// 10ª) Datos de los espectáculos
const espect = db.getCollection('Espectaculo').find({});

console.log("\nLista de espectáculos\n");
// Mostramos la colección
espect.forEach((Espectaculo) => {
    console.log(
        "\nId: " + Espectaculo.Id_Espectaculo +
        "\n - Nombre: " + Espectaculo.Nombre +
        "\n - Descripción: " + Espectaculo.Descripcion +
        "\n - Fecha: " + Espectaculo.Fecha_Hora +
        "\n - Aforo máximo: " + Espectaculo.Aforo_Maximo
    );
});

console.log("______________________________________\n");