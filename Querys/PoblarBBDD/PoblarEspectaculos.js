// Seleecionamos la base de datos a utilizar.
use("ZOO");

// Insertamos varios documento en las colecciones seleccionadas (Poblamos la BBDD).

db.getCollection('Espectaculo').insertMany([
    {
        Id_Espectaculo:"Av1",
        Nombre:"El vuelo encantador",
        Descripcion:"Nuestras aves volaran velozmente por nuestras instalaciones",
        Fecha_Hora:"23-02-2021",
        Aforo_Maximo:350
    },
    {
        Id_Espectaculo: "AvM1",
        Nombre: "Aves y delfines en acción",
        Descripcion: "Disfruta de un increíble espectáculo donde nuestras aves y delfines interactúan en un entorno acuático",
        Fecha_Hora: "20-07-2023",
        Aforo_Maximo: 400
      },
      {
        Id_Espectaculo: "AvM2",
        Nombre: "Vuelo libre y acrobacias marinas",
        Descripcion: "Admira el vuelo elegante de las aves combinado con las acrobacias de nuestros leones marinos",
        Fecha_Hora: "12-08-2023",
        Aforo_Maximo: 300
      },
      {
        Id_Espectaculo: "AvM3",
        Nombre: "Aves y osos marinos en armonía",
        Descripcion: "Sumérgete en un espectáculo lleno de gracia y diversión con nuestras aves y osos marinos",
        Fecha_Hora: "05-09-2023",
        Aforo_Maximo: 350
      },
      {
        Id_Espectaculo: "Ag1",
        Nombre: "El reino submarino",
        Descripcion: "Descubre la magia del mundo acuático con un espectáculo que combina delfines, focas y aves marinas",
        Fecha_Hora: "25-07-2023",
        Aforo_Maximo: 500
      },
      {
        Id_Espectaculo: "Ag2",
        Nombre: "Aves y pingüinos en la Antártida",
        Descripcion: "Viaja a la Antártida y maravíllate con la convivencia entre aves y pingüinos en un entorno gélido",
        Fecha_Hora: "18-08-2023",
        Aforo_Maximo: 250
      },
      {
        Id_Espectaculo: "Ag3",
        Nombre: "Vuelo libre y acrobacias acuáticas",
        Descripcion: "Disfruta de la libertad en el aire y el agua con nuestras aves y focas en un espectáculo fascinante",
        Fecha_Hora: "30-09-2023",
        Aforo_Maximo: 400
      },
      {
        Id_Espectaculo: "Ag4",
        Nombre: "Aves y nutrias en la costa",
        Descripcion: "Observa cómo nuestras aves interactúan con las juguetonas nutrias en un entorno costero",
        Fecha_Hora: "10-07-2023",
        Aforo_Maximo: 300
      },
      {
        Id_Espectaculo: "Ag5",
        Nombre: "Aves y manatíes en el manglar",
        Descripcion: "Sumérgete en un espectáculo donde las aves comparten su hábitat con los adorables manatíes en un manglar tropical",
        Fecha_Hora: "22-08-2023",
        Aforo_Maximo: 350
      },
      {
        Id_Espectaculo: "AvM4",
        Nombre: "Aves y lobos marinos en acción",
        Descripcion: "Disfruta de un emocionante espectáculo donde las aves realizan acrobacias junto a los ágiles lobos marinos",
        Fecha_Hora: "15-09-2023",
        Aforo_Maximo: 320
      },
      {
        Id_Espectaculo: "AvM5",
        Nombre: "Vuelo acuático y saltos con delfines",
        Descripcion: "Maravíllate con el vuelo y los saltos de las aves mientras interactúan con los inteligentes delfines",
        Fecha_Hora: "28-07-2023",
        Aforo_Maximo: 380
      },
      {
        Id_Espectaculo: "AvM6",
        Nombre: "Aves y tigres en la jungla",
        Descripcion: "Sumérgete en un espectáculo lleno de adrenalina con las aves y los majestuosos tigres en su hábitat natural",
        Fecha_Hora: "03-08-2023",
        Aforo_Maximo: 400
      },
      {
        Id_Espectaculo: "Ag6",
        Nombre: "El mundo submarino de las aves",
        Descripcion: "Explora el fascinante mundo submarino mientras las aves nadan y vuelan en perfecta armonía",
        Fecha_Hora: "09-09-2023",
        Aforo_Maximo: 450
      },
      {
        Id_Espectaculo: "Ag7",
        Nombre: "Aves y manatíes: una danza acuática",
        Descripcion: "Déjate cautivar por la elegante danza acuática que realizan las aves junto a los cariñosos manatíes",
        Fecha_Hora: "14-08-2023",
        Aforo_Maximo: 300
      }
    
    
      
      



])