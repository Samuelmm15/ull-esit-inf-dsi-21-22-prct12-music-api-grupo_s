import {Document} from 'mongoose';
/**
 * Song Interface
 */
export interface Song extends Document {
  name: string,
  author: string,
  duration: string,
  genre: string[],
  single: boolean,
  reproductionNumber: string
}
