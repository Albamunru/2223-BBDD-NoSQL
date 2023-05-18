
// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Insertamos varios documento en las colecciones seleccionadas (Poblamos la BBDD).


db.getCollection('Empleados').insertMany([
    {
    Id_Empleado: "emp1",
    Datos_Empleado: { nombre: "Lucio", apellido: "Vilanova Perez", direccion: "plazuela redonda 3 Madrid", telefono: "698741233" },
    Puesto: "Veterinario",
    Salario: 2300
  },
  {
    Id_Empleado: "emp2",
    Datos_Empleado: { nombre: "Maria", apellido: "Vecino Casado", direccion: "plazuela cuadrada 14 Barcelona", telefono: "600258968" },
    Puesto: "Administrativo",
    Salario: 1550
  },
  {
    Id_Empleado: "emp3",
    Datos_Empleado: { nombre: "Alba", apellido: "Casado Redondo", direccion: "olivi 89 Plasencia", telefono: "699874123" },
    Puesto: "Cuidador",
    Salario: 2000
  },
  {
    Id_Empleado: "emp4",
    Datos_Empleado: { nombre: "Pedro", apellido: "Jimenez Rodriguez", direccion: "gran via 25 Madrid", telefono: "623232314" },
    Puesto: "Limpiador",
    Salario: 2300
  },
  {
    Id_Empleado: "emp5",
    Datos_Empleado: { nombre: "Petronila", apellido: "Cuadrado Redondo", direccion: "paz 20 Cuenca", telefono: "624569800" },
    Puesto: "Servicios Multiples",
    Salario: 1300
  },
  {
    Id_Empleado: "emp6",
    Datos_Empleado: { nombre: "María", apellido: "López", direccion: "Calle Principal 123", telefono: "987654321" },
    Puesto: "Veterinario",
    Salario: 1800
  },
  {
    Id_Empleado: "emp7",
    Datos_Empleado: { nombre: "Juan", apellido: "Martínez", direccion: "Avenida Central 456", telefono: "654987321" },
    Puesto: "Veterinario",
    Salario: 2000
  },
  {
    Id_Empleado: "emp8",
    Datos_Empleado: { nombre: "Laura", apellido: "García", direccion: "Plaza Mayor 789", telefono: "789321654" },
    Puesto: "Veterinario",
    Salario: 2200
  },
  {
    Id_Empleado: "emp9",
    Datos_Empleado: { nombre: "Pedro", apellido: "Sánchez", direccion: "Calle Secundaria 10", telefono: "123456789" },
    Puesto: "Veterinario",
    Salario: 1900
  },
  {
    Id_Empleado: "emp10",
    Datos_Empleado: { nombre: "Andrea", apellido: "López", direccion: "Avenida Principal 456", telefono: "123456789" },
    Puesto: "Veterinario",
    Salario: 1700
  },
  {
    Id_Empleado: "emp11",
    Datos_Empleado: { nombre: "Roberto", apellido: "García", direccion: "Calle Secundaria 789", telefono: "987654321" },
    Puesto: "Veterinario",
    Salario: 1950
  },
  {
    Id_Empleado: "emp12",
    Datos_Empleado: { nombre: "María", apellido: "Sánchez", direccion: "Plaza Mayor 456", telefono: "654987321" },
    Puesto: "Contador",
    Salario: 2100
  },
  {
    Id_Empleado: "emp13",
    Datos_Empleado: { nombre: "Alejandro", apellido: "Martínez", direccion: "Avenida Central 789", telefono: "789321654" },
    Puesto: "Gerente",
    Salario: 5250
  },
  {
    Id_Empleado: "emp14",
    Datos_Empleado: { nombre: "Laura", apellido: "Hernández", direccion: "Calle Principal 456", telefono: "123456789" },
    Puesto: "Recepcionista",
    Salario: 1800
  },


  
 
  
]);