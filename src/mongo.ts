// import {MongoClient} from 'mongodb';
// // import {artistFormat} from './App-Data-Bases/artistFormat';
// // import {playlistFormat} from './App-Data-Bases/playlistFormat';
// // import {songFormat} from './App-Data-Bases/playlistFormat';
// import {Artist} from "./App-Data-Bases.Operations/Interfaces/interfaces";
// import {Song} from './App-Data-Bases.Operations/Interfaces/interfaces';
// import {Playlists} from './App-Data-Bases.Operations/Interfaces/interfaces';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'music-db';

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   // db.collection<Song>('Song').insertOne({
//   //   name: '120',
//   //   author: 'Bad Bunny',
//   //   duration: '2:30',
//   //   genre: ['Reggaeton'],
//   //   single: true,
//   //   reproductionNumber: 400,
//   // });

//   return db.collection<Artist>('Artist').insertOne({
//     name: 'Bad Bunny',
//     genre: ['Reggaeton', 'Pop'],
//     publishedSongs: [{
//       name: '120',
//       author: 'Bad Bunny',
//       duration: '2:30',
//       genre: ['Reggaeton'],
//       single: true,
//       reproductionNumber: 400,
//     }],
//     monthlyListeners: 2000,
//   });
// }).then((result) => {
//   console.log(`Se ha añadido un artista`);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').deleteOne({
//     title: 'Red note',
//   });
// }).then((result) => {
//   console.log(result.deletedCount);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').insertOne({
//     title: 'Red note',
//     body: 'This is a red note',
//     color: 'red',
//   });
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });


