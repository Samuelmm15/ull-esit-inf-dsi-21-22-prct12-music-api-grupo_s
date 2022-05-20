import {SongSchema} from '../Schemas/songSchema';
import {model} from 'mongoose';
import {Song} from '../Interfaces/songInterface';

export const song = model<Song>('Song', SongSchema);

