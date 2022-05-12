import {MongoClient} from 'mongodb';
// import {playlistFormat} from './App-Data-Bases/playlistFormat';
import {Playlists} from './Interfaces/interfaces';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'music-db';

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<Playlists>('Playlists').insertOne({
    name: 'Fiestuki',
    songs: [{
      name: '120',
      author: 'Bad Bunny',
      duration: '2:30',
      genre: ['Reggaeton'],
      single: true,
      reproductionNumber: 400,
    }],
    duration: '2000',
    genre: ['Reggaeton']
  });
}).then((result) => {
  console.log(`Se ha añadido una playlist`);
}).catch((error) => {
  console.log(error);
});
