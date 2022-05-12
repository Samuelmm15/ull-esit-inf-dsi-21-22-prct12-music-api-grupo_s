import {Song} from "./songInterface"

export interface Artist {
  name: string,
  genre: string[],
  publishedSongs: Song[],
  monthlyListeners: string
}