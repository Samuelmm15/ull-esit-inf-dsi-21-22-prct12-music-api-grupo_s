import {MongoClient} from 'mongodb';
// import {artistFormat} from './App-Data-Bases/artistFormat';
import {Artist} from "./Interfaces/interfaces";

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'music-db';

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<Artist>('Artist').insertOne({
    name: 'Bad Bunny',
    genre: ['Reggaeton', 'Pop'],
    publishedSongs: [{
      name: '120',
      author: 'Bad Bunny',
      duration: '2:30',
      genre: ['Reggaeton'],
      single: true,
      reproductionNumber: 400,
    }],
    monthlyListeners: 2000,
  });
}).then((result) => {
  console.log(`Se ha añadido un artista`);
}).catch((error) => {
  console.log(error);
});
