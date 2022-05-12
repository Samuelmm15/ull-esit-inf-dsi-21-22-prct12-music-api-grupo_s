export interface Song {
  name: string,
  author: string,
  duration: string,
  genre: string[],
  single: boolean,
  reproductionNumber: string
}

export interface Artist {
  name: string,
  genre: string[],
  publishedSongs: Song[],
  monthlyListeners: string
}

export interface Playlists {
  name: string,
  songs: Song[],
  duration: string,
  genre: string[]
}
