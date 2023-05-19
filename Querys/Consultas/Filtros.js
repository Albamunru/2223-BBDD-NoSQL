// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Realizamos consultas de filtro

    // 1ª)Buscamos los animales mayores de 10 años
const animalesMayoresDiez = db.getCollection("Animales").find({
  Edad: { $gte: 10 }
});
console.log("\nAnimales de más de 10 años\n");
    // Mostramos la colección
animalesMayoresDiez.forEach(Animal => {
    console.log(("Nombre: "+Animal.Nombre +" - "+ Animal.Edad)+ " años");
  });
  console.log("______________________________________\n");

    // 2ª)Buscamos los animales que empiezan por M
  const animalesEmpiezanPorM = db.getCollection("Animales").find({ Nombre: /^M/ });

  console.log("\nAnimales que empiezan por M\n");
    // Mostramos la colección
  animalesEmpiezanPorM.forEach(Animal => {
      console.log(("Nombre: "+Animal.Nombre));
    });
    console.log("______________________________________\n");

    // 3ª)Buscamos los espectáculos con aforo máximo menor de 300
  const aforoMenor = db.getCollection("Espectaculo").find({ Aforo_Maximo: {$lt :360} });

  console.log("\nEspectáculos con aforo menor de 360\n");
    // Mostramos la colección
    aforoMenor.forEach(Espectaculo => {
      console.log(("Nombre: "+Espectaculo.Nombre)+ " - Aforo: "+Espectaculo.Aforo_Maximo+" personas")
    });
    console.log("______________________________________\n");
  
    // 4ª)Buscamos los empleados que sean veterinarios y que ganen más de 2300€
    const puestoSalario = db.getCollection("Empleados").find({ Salario: {$gte :2200}, Puesto: "Veterinario" });

    console.log("\nVeterinarios que ganan más de 2300€\n");
      // Mostramos la colección
      puestoSalario.forEach(Empleados => {
        console.log(("Datos: "+Empleados.Datos_Empleado.nombre)+ " - Salario: "+Empleados.Salario+" €")
      });
      console.log("______________________________________\n");
    
  