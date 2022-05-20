# Práctica 12 - API Node/Express de gestión de información musical
- [Práctica 12 - API Node/Express de gestión de información musical](#práctica-12---api-nodeexpress-de-gestión-de-información-musical)
  - [Introducción](#introducción)
  - [Organización de los directorios](#organización-de-los-directorios)
  - [Procedimiento](#procedimiento)
    - [Conectividad](#conectividad)
    - [Interfaces](#interfaces)
    - [Modelos](#modelos)
    - [Routers](#routers)
    - [Schemas](#schemas)
    - [Aplicación](#aplicación)
- [Resumen de pruebas](#resumen-de-pruebas)
- [Conclusión](#conclusión)
## Introducción

- Para esta práctica se debe de implementar un API REST haciendo uso de Node/Express que permita llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de canciones, artistas y playlists. Donde cada elemento tiene sus atributos correspondientes; toda está información se tendrá que guardar en una playlist. En las playlists existentes en la biblioteca los usuarios van a poder visualizar toda la información asociada a una playlist, como lo son el nombre de la playlist, los géneros incluidos y la duración de dicha playlist en horas, minutos y segundos. En la playlist también se debería navegar por está para ver las canciones que se incluyen en está siguiendo una serie de criterios para ordenar la información y por último un usuario debería poder crear alguna playlist y borrar su propia playlist.

- Para poder realizarla se hará uso de MongoDB/MongoDB Atlas como sistema de base de datos no relacional, además de Mongoose, para gestionar la base de datos desde Node.js. También se hara un despliego de la API en Heroku, para poder ejecutarla mediante HTTP.

## Organización de los directorios

- En esta sección, se comentará todo lo relacionado con la implementación que se ha elegido para realizar la API REST que se pretende conseguir.

- Antes de empezar, podemos observar todo el contenido del directorio `src` donde se encuentra todo nuestro código. Podemos ver 4 directorios principales y el fichero `index.ts`.

```
📦src
 ┣ 📂db
 ┃ ┗ 📜databaseConnect.ts
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
 ┃ ┗ 📂Songs
 ┃ ┃ ┣ 📜default.ts
 ┃ ┃ ┣ 📜delete.ts
 ┃ ┃ ┣ 📜get.ts
 ┃ ┃ ┣ 📜patch.ts
 ┃ ┃ ┗ 📜post.ts
 ┣ 📂Schemas
 ┃ ┣ 📜artistSchema.ts
 ┃ ┣ 📜playlistSchema.ts
 ┃ ┗ 📜songSchema.ts
 ┗ 📜index.ts
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

### Interfaces

- En segundo lugar nos encontramos con la carpeta [Interfaces](src/Interfaces/) donde se crean las interfaces para artista, canción y playlist.

- Para el caso de artista vemos que se hace uso de strings para todos los atributos, en el caso del género y canciones publicadas son arrays de strings:
```ts
/**
 * Artist Interface
 */
export interface Artist {
  name: string,
  genre: string[],
  publishedSongs: string[],
  monthlyListeners: string
}

```
- Para el caso de playlist vemos que se hace uso de strings para todos los atributos, en el caso de duración y canciones publicadas son arrays de strings:
```ts
/**
 * Playlist Interface
 */
export interface Playlists {
  name: string,
  songs: string[],
  duration: string,
  genre: string[]
}

```
- Para el caso de song vemos que se hace uso de strings para todos los atributos, en el caso del géneros son arrays de strings:
```ts
/**
 * Song Interface
 */
export interface Song {
  name: string,
  author: string,
  duration: string,
  genre: string[],
  single: boolean,
  reproductionNumber: string
}
```
### Modelos
- Además, podemos ver que existe una carpeta [models](src/models/) donde tiene un fichero por interfaz ([artistModel](src/models/artistModel.ts), [playlistModel](src/models/playlistModel.ts) y [songModel](src/models/songModel.ts)). Donde en cada fichero se crea un modelo por interfaz. Para ello importamos `model` de mongoose, y creamos el modelo poniendo como tipo el nombre de la interfaz y como argumentos el nombre del modelo y el schema que lo veremos más adelante. Un ejemplo sería observar cualquiera de los 3 ficheros nombrados, como `songModel`:

```ts
import {SongSchema} from '../Schemas/songSchema';
import {model} from 'mongoose';
import {Song} from '../Interfaces/songInterface';

/**
 * Song Model
 */
export const song = model<Song>('Song', SongSchema);

```
### Routers

- Por si fuera poco, nos encontramos con el directorio [routers](src/routers/) donde se encuentran todas las operaciones principales de la base de datos en artistas ([Artist](src/routers/Artists/)), playlists ([Playlists](src/routers/Playlists/)) y canciones ([Songs](src/routers/Songs/)). Donde en cada carpeta se guardan los mismos 5 ficheros, como ya se mostró con anterioridad:
```
📦routers
 ┣ 📂Artists
 ┃ ┣ 📜default.ts
 ┃ ┣ 📜delete.ts
 ┃ ┣ 📜get.ts
 ┃ ┣ 📜patch.ts
 ┃ ┗ 📜post.ts
 ┣ 📂Playlists
 ┃ ┣ 📜default.ts
 ┃ ┣ 📜delete.ts
 ┃ ┣ 📜get.ts
 ┃ ┣ 📜patch.ts
 ┃ ┗ 📜post.ts
 ┗ 📂Songs
 ┃ ┣ 📜default.ts
 ┃ ┣ 📜delete.ts
 ┃ ┣ 📜get.ts
 ┃ ┣ 📜patch.ts
 ┃ ┗ 📜post.ts
```
  - El fichero `default` se basa en lanzar un mensaje HTTP 501, que aparecerá cuando se usa un método desconocido desde un cliente de Internet.
  - El fichero `delete`  se basa en lanzar un mensaje HTTP en caso de no funcionar. Si el error es 404, es porque el artista/canción/playlist no fue encontrado para ser eliminado. Si el mensaje de error es 400, es porque no se ha introducido bien el parámetro del nombre. Si funciona, elimina correctamente.
  - El fichero `get` se basa en lanzar un mensaje HTTP en caso de no funcionar. Si el error es 404, es porque el artista/canción/playlist no fue encontrado para ser eliminado. Si el mensaje de error es 400, es porque no se ha introducido bien el parámetro del nombre. Si el error es 500 es porque falta algún argumento del artista/canción/playlist. Si funciona, se obtiene los datos correctamente.
  - El fichero `patch` se basa en lanzar un mensaje HTTP en caso de no funcionar. Si el error es 404, es porque el artista/canción/playlist no fue encontrado para ser eliminado. Si el mensaje de error es 400, es porque no se ha introducido bien el parámetro del nombre. Si funciona, se actualiza correctamente.
  - El fichero `post` se basa en lanzar un mensaje HTTP en caso de no funcionar. Si el mensaje de error es 400, es porque no se ha introducido bien el parámetro del nombre. Si funciona, crea correctamente con el mensaje 201.

### Schemas

- Ahora veamos cómo se plantearon los schemas que nombramos antes a la hora de hacer los modelos. Aquí se crea la estructura que tendrá la interfaz de la canción/playlist/artista, esta estructura será que tendremos que seguir a la hora de hacer operaciones en la API y también para tener un orden en los registros de las bases de datos.
  - En caso del schema del artista se ve así:

```ts
import {Artist} from "../Interfaces/artistInterface";
import {Schema} from 'mongoose';
const validator = require('validator');

/**
 * Artist Schema
 */
export const ArtistSchema = new Schema<Artist>({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  genre: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Artist genre must contain alphabet characters');
        }
      });
    },
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
  publishedSongs: {
    type: [String],
    required: true,
  },
  monthlyListeners: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!validator.isDecimal(value)) {
        throw new Error('Monthly Listeners must be a number');
      }
    },
  },
});

```

- Como podemos ver, sigue el orden de los atributos de la interfaz. Indicamos que el name será de tipo string, será un nombre único.
  - El genre será un array de strings, como bien se expuso anteriormente en la interfaz y le indicamos qué géneros pueden ponerse. En caso de no añadir un género del `enum`, saldrá un mensaje de error del mongoose `is not a valid enum value for path `.
  - En publishedSongs pide un array de strings.
  - En monthlyListeners pide un string donde nos aseguramos de que al pasarlo a número, sea un valor númerico. En caso de no serlo saltará un error `Monthly Listeners must be a number`.
  - Hay que observar que todos los parámetros son obligatorios ponerlos.

- Para el resto de schemas varían algunas cosas.
  - Schema de playlists:

```ts
name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  songs: {
    type: [String],
    required: true,
  },
  duration: {
    required: true,
    trim: true,
    type: String,
    validate: (value: string) => {
      const pattern = /(([0-9]*) hrs ([0-5]?[0-9]) min ([0-5]?[0-9]) seg)$/g;
      const result = value.match(pattern)?.toString();
      if (result === undefined) {
        throw new Error('Time format not valid, try again with this format -> HH hrs MM min SS seg');
      }
    },
  },
  genre: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Playlist genre must contain alphabet characters');
        }
      });
    },
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
```

- La diferencia que más se ve, aparte de que hay atributos distintos, se puede observar que `duration` exige un formato para poner la duración, en caso de no ponerlo, le damos feedback al cliente con el mensaje `Time format not valid, try again with this format -> HH hrs MM min SS seg`.

  - Schema de song:

```ts
name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      let pattern = /([0-5]?[0-9]):(?:[012345]\d)$/g;
      let result = value.match(pattern)?.toString();
      if (result === undefined) {
        throw new Error('Time format not valid, try again with this format -> MM:SS');
      }
    },
  },
  genre: {
    type: [String],
    required: true,
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Song genre must contain alphabet characters');
        }
      });
    },
  },
  single: {
    type: Boolean,
    required: true,
  },
  reproductionNumber: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!validator.isDecimal(value)) {
        throw new Error('Reproduction Number must be a number');
      }
    },
  },
```

- Aquí podemos ver que hay un poco del schema de playlist y artista. Añadiendo eso sí el atributo `single` de tipo booleano para indicar si es o no un single. De resto, tiene los mismos mensajases de error en atributos como reproductionNumber, genre y duration.

### Aplicación

- La aplicación se ejecuta en el archivo [index.ts](src/index.ts). Aquí importamos todas las operaciones de creación, lectura, modificación y borrado de playlists/artistas/canciones.

- Podemos observar que hacemos uso de `app.use(express.json())` para parsear por defecto el cuerpo de la petición y así ahorrarnos los JSON.parse. Además, podemos ver que tenemos el código mucho más legible y modular:

```ts
const app = express();
app.use(express.json());

app.use(postRouterSong, postRouterArtist, postRouterPlaylist);
app.use(getRouterSong, getRouterArtist, getRouterPlaylist);
app.use(patchRouterSong, patchRouterArtist, patchRouterPlaylist);
app.use(deleteRouterSong, deleteRouterArtist, deleteRouterPlaylist);
app.use(defaultRouterSong, defaultRouterArtist, defaultRouterPlaylist);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
```

# Resumen de pruebas

# Conclusión