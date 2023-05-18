// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Insertamos varios documento en las colecciones seleccionadas (Poblamos la BBDD).

db.getCollection('Habitat').insertMany([
    {
        Id_Habitat: "Ag1",
        Nombre: "Acuario",
        Tipo: "Agua",
        Capacidad_Maxima: 10
    },

    {
        Id_Habitat: "T1",
        Nombre: "Desierto",
        Tipo: "Tierra",
        Capacidad_Maxima: 25
    },
    {
        Id_Habitat: "V1",
        Nombre: "Voladero",
        Tipo: "Aire",
        Capacidad_Maxima: 30
    },

    {
        Id_Habitat: "Ag2",
        Nombre: "Estanque",
        Tipo: "Agua",
        Capacidad_Maxima: 15
    },
    {
        Id_Habitat: "T2",
        Nombre: "Sabana",
        Tipo: "Tierra",
        Capacidad_Maxima: 50
    },
    {
        Id_Habitat: "V2",
        Nombre: "Jaula de aves",
        Tipo: "Aire",
        Capacidad_Maxima: 10
    },
    {
        Id_Habitat: "Ag3",
        Nombre: "Piscina",
        Tipo: "Agua",
        Capacidad_Maxima: 20
    },
    {
        Id_Habitat: "T3",
        Nombre: "Bosque",
        Tipo: "Tierra",
        Capacidad_Maxima: 40
    },
    {
        Id_Habitat: "V3",
        Nombre: "Aviario",
        Tipo: "Aire",
        Capacidad_Maxima: 15
    },
    {
        Id_Habitat: "Ag4",
        Nombre: "Lago",
        Tipo: "Agua",
        Capacidad_Maxima: 30
    },
    {
        Id_Habitat: "T4",
        Nombre: "Desierto rocoso",
        Tipo: "Tierra",
        Capacidad_Maxima: 20
    },
    {
        Id_Habitat: "V4",
        Nombre: "Pajarera",
        Tipo: "Aire",
        Capacidad_Maxima: 12
    },
    {
        Id_Habitat: "Ag5",
        Nombre: "Río",
        Tipo: "Agua",
        Capacidad_Maxima: 25
    },
    {
        Id_Habitat: "T5",
        Nombre: "Pradera",
        Tipo: "Tierra",
        Capacidad_Maxima: 35
    },
    {
        Id_Habitat: "V5",
        Nombre: "Nido de aves",
        Tipo: "Aire",
        Capacidad_Maxima: 8
    },
    {
        Id_Habitat: "Ag6",
        Nombre: "Estuario",
        Tipo: "Agua",
        Capacidad_Maxima: 18
    },
    {
        Id_Habitat: "T6",
        Nombre: "Montaña",
        Tipo: "Tierra",
        Capacidad_Maxima: 30
    },
    {
        Id_Habitat: "V6",
        Nombre: "Pajarera grande",
        Tipo: "Aire",
        Capacidad_Maxima: 20
    },
    {
        Id_Habitat: "Ag7",
        Nombre: "Mar",
        Tipo: "Agua",
        Capacidad_Maxima: 40
    },
    {
        Id_Habitat: "T7",
        Nombre: "Desierto arenoso",
        Tipo: "Tierra",
        Capacidad_Maxima: 15
    },
    {
        Id_Habitat: "V7",
        Nombre: "Vuelo libre",
        Tipo: "Aire",
        Capacidad_Maxima: 25
    },
    {
        Id_Habitat: "Ag8",
        Nombre: "Arrecife de coral",
        Tipo: "Agua",
        Capacidad_Maxima: 12
    },
    {
        Id_Habitat: "T8",
        Nombre: "Bosque tropical",
        Tipo: "Tierra",
        Capacidad_Maxima: 45
    },
    {
        Id_Habitat: "V8",
        Nombre: "Torre de aves",
        Tipo: "Aire",
        Capacidad_Maxima: 10
    }





])