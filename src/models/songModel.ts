import {SongSchema} from '../Schemas/songSchema';
import {model} from 'mongoose';
import {Song} from '../Interfaces/songInterface';

/**
 * Song Model
 */
export const song = model<Song>('Song', SongSchema);
