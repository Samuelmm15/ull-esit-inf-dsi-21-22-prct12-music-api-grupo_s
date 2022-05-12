// Añadir canciones
import {SongSchema} from "./App-Data-Bases-Operations/Schemas/songSchema";
import {connect, model} from 'mongoose';
import {Song} from "./App-Data-Bases-Operations/Interfaces/interfaces";

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

const BadBunny = new Song({
  name: 'Rhymes Like Dimes',
  author: 'MF DOOM',
  duration: '04:19',
  genre: ['Rap'],
  single: true,
  reproductionNumber: '49142581',
});

BadBunny.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// Cambiar Formato del tiempo
// // function fromMSToSeconds(value: string): number {
// //   const prueba: string[] = value.split(':');
// //   const minutes2Seconds: number = parseInt(prueba[0]) * 60;
// //   const result: number = minutes2Seconds + parseInt(prueba[1]);

// //   return result;
// // }

// // function convertHMS(value: number) : string {
// //   let hours = Math.floor(value / 3600); // get hours
// //   let minutes = Math.floor((value - (hours * 3600)) / 60); // get minutes
// //   let seconds = value - (hours * 3600) - (minutes * 60); //  get seconds

// //   if (hours < 10) {
// //     hours = hours;
// //   }
// //   if (minutes < 10) {
// //     minutes = minutes;
// //   }
// //   if (seconds < 10) {
// //     seconds = seconds;
// //   }

// //   return hours+' hrs '+minutes+' min '+seconds+' segs';
// // }

// // console.log(convertHMS(fromMSToSeconds('2:40')));