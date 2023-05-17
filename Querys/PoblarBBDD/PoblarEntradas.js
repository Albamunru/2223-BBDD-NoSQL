// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Insertamos varios documento en las colecciones seleccionadas (Poblamos la BBDD).

db.getCollection("Entrada").insertMany([
    { Id_Entrada: "00000001", Datos_Visitante: "Pep Guardiola", Fecha_Visita: "17-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000002", Datos_Visitante: "Luisa Rodríguez", Fecha_Visita: "18-05-2023", Precio: 18.75, Categoria: "Adulto" },
    { Id_Entrada: "00000004", Datos_Visitante: "María Gómez", Fecha_Visita: "20-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000005", Datos_Visitante: "Ana López", Fecha_Visita: "21-05-2023", Precio: 18.50, Categoria: "Adulto" },
    { Id_Entrada: "00000006", Datos_Visitante: "Pedro Hernández", Fecha_Visita: "22-05-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000007", Datos_Visitante: "María Rodríguez", Fecha_Visita: "23-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000008", Datos_Visitante: "Carlos Gutiérrez", Fecha_Visita: "24-05-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000009", Datos_Visitante: "Laura Sánchez", Fecha_Visita: "25-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000010", Datos_Visitante: "David Martínez", Fecha_Visita: "26-05-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000011", Datos_Visitante: "Sofía Ramírez", Fecha_Visita: "27-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000012", Datos_Visitante: "Javier Torres", Fecha_Visita: "28-05-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000013", Datos_Visitante: "Carolina González", Fecha_Visita: "29-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000014", Datos_Visitante: "Óscar Ramírez", Fecha_Visita: "30-05-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000015", Datos_Visitante: "Marta López", Fecha_Visita: "31-05-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000016", Datos_Visitante: "Roberto Gómez", Fecha_Visita: "01-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000017", Datos_Visitante: "Luisa Torres", Fecha_Visita: "02-06-2023", Precio: 18.50, Categoria: "Adulto" },
    { Id_Entrada: "00000018", Datos_Visitante: "Ricardo Herrera", Fecha_Visita: "03-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000019", Datos_Visitante: "Marina García", Fecha_Visita: "04-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000020", Datos_Visitante: "Andrés Morales", Fecha_Visita: "05-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000021", Datos_Visitante: "Valentina Suárez", Fecha_Visita: "06-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000022", Datos_Visitante: "Gabriel Castro", Fecha_Visita: "07-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000023", Datos_Visitante: "Paula Jiménez", Fecha_Visita: "08-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000024", Datos_Visitante: "Alejandro Ortega", Fecha_Visita: "09-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000025", Datos_Visitante: "Lucía Méndez", Fecha_Visita: "10-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000026", Datos_Visitante: "Diego Herrera", Fecha_Visita: "11-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000027", Datos_Visitante: "María Navarro", Fecha_Visita: "12-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000028", Datos_Visitante: "Andrea Medina", Fecha_Visita: "13-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000029", Datos_Visitante: "Daniel Cruz", Fecha_Visita: "14-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000030", Datos_Visitante: "Carolina Torres", Fecha_Visita: "15-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000031", Datos_Visitante: "Jorge Ramírez", Fecha_Visita: "16-06-2023", Precio: 25.50, Categoria: "Adulto" },
    { Id_Entrada: "00000032", Datos_Visitante: "Laura Pérez", Fecha_Visita: "17-06-2023", Precio: 12.50, Categoria: "Niño" },
    { Id_Entrada: "00000033", Datos_Visitante: "Héctor Gómez", Fecha_Visita: "18-06-2023", Precio: 25.50, Categoria: "Adulto" }
]);


