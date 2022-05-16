import {Song} from "./songInterface"

export interface Playlists {
  name: string,
  songs: Song[],
  duration: string,
  genre: string[]
}