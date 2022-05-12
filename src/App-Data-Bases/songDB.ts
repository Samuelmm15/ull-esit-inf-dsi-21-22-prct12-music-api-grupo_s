import {MongoClient} from 'mongodb';
// import {songFormat} from './App-Data-Bases/songFormat';
import {Song} from './Interfaces/interfaces';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'music-db';

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  db.collection<Song>('Song').insertOne({
    name: '120',
    author: 'Bad Bunny',
    duration: '2:30',
    genre: ['Reggaeton'],
    single: true,
    reproductionNumber: 400,
  });
}).then((result) => {
  console.log(`Se ha añadido una canción`);
}).catch((error) => {
  console.log(error);
});
