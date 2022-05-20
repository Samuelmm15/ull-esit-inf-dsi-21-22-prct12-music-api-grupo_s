import {Document} from 'mongoose';
/**
 * Playlist Interface
 */
export interface Playlists extends Document{
  name: string,
  songs: string[],
  duration: string,
  genre: string[]
}
