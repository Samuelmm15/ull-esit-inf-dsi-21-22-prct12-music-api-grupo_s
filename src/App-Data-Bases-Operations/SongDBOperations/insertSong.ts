import {SongSchema} from "../Schemas/songSchema";
import {connect, model} from 'mongoose';
import {Song} from "../Interfaces/songInterface";

connect('mongodb://127.0.0.1:27017/music-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

const Song = model<Song>('Song', SongSchema);

const rhymesLikeDimes = new Song({
  name: 'Rhymes Like Dimes',
  author: 'MF DOOM',
  duration: '4:19',
  genre: ['Rap'],
  single: true,
  reproductionNumber: '49142581',
});

rhymesLikeDimes.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});