import {SongSchema} from '../App-Data-Bases-Operations/Schemas/songSchema';
import {model} from 'mongoose';
import {Song} from '../App-Data-Bases-Operations/Interfaces/songInterface';

// connect('mongodb://127.0.0.1:27017/songs', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

export const song = model<Song>('Song', SongSchema);

