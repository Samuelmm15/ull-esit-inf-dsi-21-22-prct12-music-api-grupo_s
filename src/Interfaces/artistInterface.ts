import {Document} from 'mongoose';
/**
 * Artist Interface
 */
export interface Artist extends Document {
  name: string,
  genre: string[],
  publishedSongs: string[],
  monthlyListeners: string
}
