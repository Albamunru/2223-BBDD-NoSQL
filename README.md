# 22/23-BBDD-NoSQL-Raul.D-Alba.M
**Base de datos NoSql Zoo** <br>
Gestionaremos una bbdd de un ZOO.<br>
 * **Creacción de las entidades y sus atributos.**<br>
    1.1 Creación del modelo Entidad-Relación.<br>
    1.2 Creación del modelo Relacional.<br>
 * **Diseño de JsonSchema.**<br>
     En este apartado crearemos un JsonSchema para la validación de cada una de las colecciones que hemos creado anteriormente.<br>
     ANIMAL<br>
     HÁBITAT<br>
     ALIMENTACIÓN<br>
     EMPLEADO<br>
     ESPECTÁCULO<br>
     ENTRADA<br>

 * **Creación del fichero Docker-Compose.**<br>
    En este apartado Crearemos el fichero docker-compose.yml para levantar MongoDB.<br>
    Instrucciones:<br>
    1. Crearemos una carpeta en la que guardaremos el fichero generado.<br>
    2. Abrimos esa carperta con nuestro Visual Studio Code y dentro creamos "docker-compose.yml" y ahí dentro copiaremos la imagen de mongoDB de Docker, hay ciertos apartados que podemos modificar a nuestro gusto como puede ser el puerto desde el que queremos conectar, nombre de usuario, contraseña o poder elegir la versión que queremos instalar de MongoDB.
    3. Una vez hecho esto abrimos un terminal desde Visual Studio Code y accedemos a la ruta donde está guardado el documento, una vez situados ahí ejecutaremos el siguiente comando **docker-compose up**  o si queremos que se ejecute en segundo plano **docker-compose up -d** con esto hemos conseguido levantar en Docker el contenedor de MongoDB una vez levantado podemos acceder a nuestro navegador e introducir **http://localhost:8085** el puerto que hemos seleccionado en nuestro caso y si todo ha ido correctamente veremos en nuestro navegador el entorno gráfico de MongoDB en el cual también podemos trabajar desde ahí con el en el cual nos pedirá las credenciales que le habiamos indicado anteriormente, si queremos parar el contenedor desde el cmd introduciremos **docker-compose down** todo esto tambien se puede hacer desde el entorno gráfico de Docker, este contenedor quedara guardado hasta que decidamos borrarlo.
    **Cada vez que levantenemos algun contenedor de Docker tenemos que tenemos muy en cuenta los puertos que le asignamos ya que nos pueden dar fallos porque otra cosa lo esté usando y aveces nos resulta muy complicado saber que es y nos puede dar fallos y no conseguir lo que deseamos.**
  
