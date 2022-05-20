# Práctica 12 - API Node/Express de gestión de información musical
- [Práctica 12 - API Node/Express de gestión de información musical](#práctica-12---api-nodeexpress-de-gestión-de-información-musical)
  - [Introducción](#introducción)
  - [Organización de los directorios](#organización-de-los-directorios)
  - [Procedimiento](#procedimiento)
    - [Conectividad](#conectividad)
## Introducción

- Para esta práctica se debe de implementar un API REST haciendo uso de Node/Express que permita llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de canciones, artistas y playlists. Donde cada elemento tiene sus atributos correspondientes; toda está información se tendrá que guardar en una playlist. En las playlists existentes en la biblioteca los usuarios van a poder visualizar toda la información asociada a una playlist, como lo son el nombre de la playlist, los géneros incluidos y la duración de dicha playlist en horas, minutos y segundos. En la playlist también se debería navegar por está para ver las canciones que se incluyen en está siguiendo una serie de criterios para ordenar la información y por último un usuario debería poder crear alguna playlist y borrar su propia playlist.

- Para poder realizarla se hará uso de MongoDB/MongoDB Atlas como sistema de base de datos no relacional, además de Mongoose, para gestionar la base de datos desde Node.js. También se hara un despliego de la API en Heroku, para poder ejecutarla mediante HTTP.

## Organización de los directorios

- En esta sección, se comentará todo lo relacionado con la implementación que se ha elegido para realizar la API REST que se pretende conseguir.

- Antes de empezar, podemos observar todo el contenido del directorio ``src`` donde se encuentra todo nuestro código. Podemos ver 4 directorios principales y 2 ficheros.

```
📦src
 ┣ 📂db
 ┃ ┗📜databaseConnect.ts
 ┣ 📂Interfaces
 ┃ ┣ 📜artistInterface.ts
 ┃ ┣ 📜playlistInterface.ts
 ┃ ┗ 📜songInterface.ts
 ┣ 📂models
 ┃ ┣ 📜artistModel.ts
 ┃ ┣ 📜playlistModel.ts
 ┃ ┗ 📜songModel.ts
 ┣ 📂routers
 ┃ ┣ 📂Artists
 ┃ ┃ ┣ 📜default.ts
 ┃ ┃ ┣ 📜delete.ts
 ┃ ┃ ┣ 📜get.ts
 ┃ ┃ ┣ 📜patch.ts
 ┃ ┃ ┗ 📜post.ts
 ┃ ┣ 📂Playlists
 ┃ ┃ ┣ 📜default.ts
 ┃ ┃ ┣ 📜delete.ts
 ┃ ┃ ┣ 📜get.ts
 ┃ ┃ ┣ 📜patch.ts
 ┃ ┃ ┗ 📜post.ts
 ┃ ┣ 📂Songs
 ┃ ┃ ┣ 📜default.ts
 ┃ ┃ ┣ 📜delete.ts
 ┃ ┃ ┣ 📜get.ts
 ┃ ┃ ┣ 📜patch.ts
 ┃ ┃ ┗ 📜post.ts
 ┣ 📂Schemas
 ┃ ┣ 📜artistSchema.ts
 ┃ ┣ 📜playlistSchema.ts
 ┃ ┗ 📜songSchema.ts
 ┣ 📜index.ts
 ┗ 📜pruebas.ts
```

 ## Procedimiento
 ### Conectividad 
- En primer lugar, tenemos el directorio [db](src/db/) donde se establece la conexión de la url de mongodb con mongoose:
```ts
import {connect} from 'mongoose';

const mongodb_url = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/music-db';

connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unnable to connect to MongoDB server');
});
```
- Como se puede observar en el fichero [darabaseConnect](src/db/databaseConnect.ts), se hace uso de promesas, en el caso de haber conexión, notificará por consola `Connection to MongoDB server established`, en caso de existir un error de conexión, notificará `Unnable to connect to MongoDB server`.

- En segundo lugar
 donde se encuentran todas las operaciones principales de la base de datos de artistas ([ArtistDBOperations](src/App-Data-Bases-Operations/ArtistDBOperations/)), playlists ([PlaylistDBOperations](src/App-Data-Bases-Operations/PlaylistDBOperations/)) y canciones ([SongDBOperations](src/App-Data-Bases-Operations/SongDBOperations/)). Donde en cada carpeta se inserta un objeto según la interfaz.
- 
   se encuentran las clases base del proyecto, por otro lado el directorio GestorClass donde, se encuentra la clase gestor y por último el directorio LowdbFiles donde se encuentra todo lo relacionado con Lowdb.