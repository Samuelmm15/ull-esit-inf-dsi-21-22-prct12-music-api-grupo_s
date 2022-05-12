// import {Document, Schema, model} from 'mongoose';

// interface NoteDocumentInterface extends Document {
//   title: string,
//   body: string,
//   color?: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// const NoteSchema = new Schema<NoteDocumentInterface>({
//   title: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true,
//     validate: (value: string) => {
//       if (!value.match(/^[A-Z]/)) {
//         throw new Error('Note title must start with a capital letter');
//       }
//     },
//   },
//   body: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   color: {
//     type: String,
//     trim: true,
//     default: 'yellow',
//     enum: ['blue', 'green', 'red', 'yellow', 'magenta'],
//   },
// });

// export const Note = model<NoteDocumentInterface>('Note', NoteSchema);

import {SongSchema} from '../App-Data-Bases-Operations/Schemas/songSchema';
import {connect, model} from 'mongoose';
import {Song} from '../App-Data-Bases-Operations/Interfaces/songInterface';

connect('mongodb://127.0.0.1:27017/songs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindNadModify: false,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

export const song = model<Song>('Song', SongSchema);

const PEPE = new song({
  name: 'PEPE',
  author: 'MF DOOM',
  duration: '4:19',
  genre: ['Rap'],
  single: true,
  reproductionNumber: '49142581',
});

PEPE.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});