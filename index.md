# Práctica 12 - API Node/Express de gestión de información musical

## Introducción

- Para esta práctica se debe de implementar un API REST haciendo uso de Node/Express que permita llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de canciones, artistas y playlists. Donde cada elemento tiene sus atributos correspondientes; toda está información se tendrá que guardar en una playlist. En las playlists existentes en la biblioteca los usuarios van a poder visualizar toda la información asociada a una playlist, como lo son el nombre de la playlist, los géneros incluidos y la duración de dicha playlist en horas, minutos y segundos. En la playlist también se debería navegar por está para ver las canciones que se incluyen en está siguiendo una serie de criterios para ordenar la información y por último un usuario debería poder crear alguna playlist y borrar su propia playlist.

- Para poder realizarla se hará uso de MongoDB/MongoDB Atlas como sistema de base de datos no relacional, además de Mongoose, para gestionar la base de datos desde Node.js. También se hara un despliego de la API en Heroku, para poder ejecutarla mediante HTTP.

## Organización de los directorios

- En esta sección, se comentará todo lo relacionado con la implementación que se ha elegido para realizar la API REST que se pretende conseguir.

- Antes de empezar, podemos observar todo el contenido del directorio ``src`` donde se encuentra todo nuestro código. Podemos ver 4 directorios principales y 3 ficheros. Por un lado, tenemos el directorio [App-Data-Bases-Operations](src/App-Data-Bases-Operations/) donde se encuentran todas las operaciones principales de la base de datos de artistas ([ArtistDBOperations](src/App-Data-Bases-Operations/ArtistDBOperations/)), playlists ([PlaylistDBOperations](src/App-Data-Bases-Operations/PlaylistDBOperations/)) y canciones ([SongDBOperations](src/App-Data-Bases-Operations/SongDBOperations/)). Donde en cada carpeta se inserta un objeto según la interfaz.
- 
   se encuentran las clases base del proyecto, por otro lado el directorio GestorClass donde, se encuentra la clase gestor y por último el directorio LowdbFiles donde se encuentra todo lo relacionado con Lowdb.