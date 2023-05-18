// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Insertamos varios documento en las colecciones seleccionadas (Poblamos la BBDD).

db.getCollection('Alimentacion').insertMany([
  
    {
      Id_Alimentacion: "Alim1",
      Nombre: "Ratones",
      Descripcion: "Comida para búho blanco",
      Cantidad_Diaria: 5
    },
    {
      Id_Alimentacion: "Alim2",
      Nombre: "Carne",
      Descripcion: "Comida para león macho",
      Cantidad_Diaria: 10
    },
    {
      Id_Alimentacion: "Alim3",
      Nombre: "Ratones",
      Descripcion: "Comida para búho macho",
      Cantidad_Diaria: 5
    },
    {
      Id_Alimentacion: "Alim4",
      Nombre: "Carne",
      Descripcion: "Comida para león hembra",
      Cantidad_Diaria: 8
    },
    {
      Id_Alimentacion: "Alim5",
      Nombre: "Hojas y ramas",
      Descripcion: "Comida para jirafa macho",
      Cantidad_Diaria: 50
    },
    {
      Id_Alimentacion: "Alim6",
      Nombre: "Hojas y ramas",
      Descripcion: "Comida para jirafa hembra",
      Cantidad_Diaria: 45
    },
    {
      Id_Alimentacion: "Alim7",
      Nombre: "Hojas y ramas",
      Descripcion: "Comida para jirafa hembra",
      Cantidad_Diaria: 45
    },
    {
      Id_Alimentacion: "Alim8",
      Nombre: "Frutas y nueces",
      Descripcion: "Comida para mono macho",
      Cantidad_Diaria: 15
    },{
      Id_Alimentacion: "Alim1",
      Nombre: "Ratones",
      Descripcion: "Comida para búho blanco",
      Cantidad_Diaria: 5
    },
    {
      Id_Alimentacion: "Alim2",
      Nombre: "Carne",
      Descripcion: "Comida para león macho",
      Cantidad_Diaria: 10
    },
    {
      Id_Alimentacion: "Alim3",
      Nombre: "Ratones",
      Descripcion: "Comida para búho macho",
      Cantidad_Diaria: 5
    },
    {
      Id_Alimentacion: "Alim4",
      Nombre: "Carne",
      Descripcion: "Comida para león hembra",
      Cantidad_Diaria: 8
    },
    {
      Id_Alimentacion: "Alim5",
      Nombre: "Hojas y ramas",
      Descripcion: "Comida para jirafa macho",
      Cantidad_Diaria: 50
    },
    {
      Id_Alimentacion: "Alim6",
      Nombre: "Hojas y ramas",
      Descripcion: "Comida para jirafa hembra",
      Cantidad_Diaria: 45
    },
    {
      Id_Alimentacion: "Alim7",
      Nombre: "Hojas y ramas",
      Descripcion: "Comida para jirafa hembra",
      Cantidad_Diaria: 45
    },
    {
      Id_Alimentacion: "Alim8",
      Nombre: "Frutas y nueces",
      Descripcion: "Comida para mono macho",
      Cantidad_Diaria: 15
    },
    {
      Id_Alimentacion: "Alim41",
      Nombre: "Frutas y néctar",
      Descripcion: "Comida para colibrí macho",
      Cantidad_Diaria: 2
    },
    {
      Id_Alimentacion: "Alim42",
      Nombre: "Carne y pescado",
      Descripcion: "Comida para tigre macho",
      Cantidad_Diaria: 12
    },
    {
      Id_Alimentacion: "Alim43",
      Nombre: "Peces y crustáceos",
      Descripcion: "Comida para pingüino macho",
      Cantidad_Diaria: 6
    },
    {
      Id_Alimentacion: "Alim44",
      Nombre: "Hierbas y frutas",
      Descripcion: "Comida para gorila hembra",
      Cantidad_Diaria: 20
    },
    {
      Id_Alimentacion: "Alim45",
      Nombre: "Insectos y pequeños vertebrados",
      Descripcion: "Comida para camaleón macho",
      Cantidad_Diaria: 3
    },
    {
      Id_Alimentacion: "Alim46",
      Nombre: "Carne y pescado",
      Descripcion: "Comida para oso polar macho",
      Cantidad_Diaria: 15
    },
    {
      Id_Alimentacion: "Alim47",
      Nombre: "Peces y calamares",
      Descripcion: "Comida para delfín hembra",
      Cantidad_Diaria: 8
    },
    {
      Id_Alimentacion: "Alim48",
      Nombre: "Hojas y frutas",
      Descripcion: "Comida para orangután hembra",
      Cantidad_Diaria: 12
    },
    {
      Id_Alimentacion: "Alim49",
      Nombre: "Carne y pequeños mamíferos",
      Descripcion: "Comida para lince macho",
      Cantidad_Diaria: 6
    },
    {
      Id_Alimentacion: "Alim50",
      Nombre: "Hierbas y hojas",
      Descripcion: "Comida para conejo hembra",
      Cantidad_Diaria: 4
    },{
      Id_Alimentacion: "Alim51",
      Nombre: "Carne y huesos",
      Descripcion: "Comida para lobo hembra",
      Cantidad_Diaria: 10
    },
    {
      Id_Alimentacion: "Alim52",
      Nombre: "Frutas y semillas",
      Descripcion: "Comida para loro macho",
      Cantidad_Diaria: 3
    },
    {
      Id_Alimentacion: "Alim53",
      Nombre: "Insectos y gusanos",
      Descripcion: "Comida para gallina hembra",
      Cantidad_Diaria: 5
    },
    {
      Id_Alimentacion: "Alim54",
      Nombre: "Peces y crustáceos",
      Descripcion: "Comida para garza macho",
      Cantidad_Diaria: 4
    },
    {
      Id_Alimentacion: "Alim55",
      Nombre: "Hierbas y raíces",
      Descripcion: "Comida para elefante hembra",
      Cantidad_Diaria: 50
    },
    {
      Id_Alimentacion: "Alim56",
      Nombre: "Carne y pequeños animales",
      Descripcion: "Comida para zorro hembra",
      Cantidad_Diaria: 6
    },
    {
      Id_Alimentacion: "Alim57",
      Nombre: "Frutas y néctar",
      Descripcion: "Comida para murciélago macho",
      Cantidad_Diaria: 2
    },
    {
      Id_Alimentacion: "Alim58",
      Nombre: "Peces y mariscos",
      Descripcion: "Comida para pelícano hembra",
      Cantidad_Diaria: 10
    },
    {
      Id_Alimentacion: "Alim59",
      Nombre: "Hierbas y brotes",
      Descripcion: "Comida para canguro macho",
      Cantidad_Diaria: 8
    },
    {
      Id_Alimentacion: "Alim60",
      Nombre: "Insectos y pequeños invertebrados",
      Descripcion: "Comida para araña hembra",
      Cantidad_Diaria: 1
    }
  
  
    



]);
