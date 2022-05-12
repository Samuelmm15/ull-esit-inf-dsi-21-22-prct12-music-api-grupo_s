import {PlaylistSchema} from "../Schemas/playlistSchema";
import {connect, model} from 'mongoose';
import {Playlists} from "../Interfaces/playlistInterface";

connect('mongodb://127.0.0.1:27017/music-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

const Playlist = model<Playlists>('Playlist', PlaylistSchema);

const Fiestuki = new Playlist({
  name: 'Fiestuki',
  songs: [{
    name: '120',
    author: 'Bad Bunny',
    duration: '2:30',
    genre: ['Reggaeton'],
    single: true,
    reproductionNumber: '400',
  }],
  genre: ['Reggaeton'],
});

Fiestuki.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});