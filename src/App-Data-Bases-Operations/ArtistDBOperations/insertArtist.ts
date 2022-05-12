import {ArtistSchema} from "../Schemas/artistSchema";
import {connect, model} from 'mongoose';
import {Artist} from "../Interfaces/artistInterface";

connect('mongodb://127.0.0.1:27017/music-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

const Artist = model<Artist>('Artist', ArtistSchema);

const MFDOOM = new Artist({
  name: 'MF DOOM',
  genre: ['Rap'],
  publishedSongs: [{
    name: 'Rhymes Like Dimes',
    author: 'MF DOOM',
    duration: '4:19',
    genre: ['Rap'],
    single: true,
    reproductionNumber: '49142581',
  }],
  monthlyListeners: '4222937',
});

MFDOOM.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});