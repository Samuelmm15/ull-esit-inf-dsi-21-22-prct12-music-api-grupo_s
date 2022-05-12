import {Playlists} from "../Interfaces/playlistInterface";
import {Schema} from 'mongoose';
import {SongSchema} from "./songSchema";
let validator = require('validator');

export const PlaylistSchema = new Schema<Playlists>({
  name: {
    type: String,
    required: true,
  },
  songs: {
    type: [SongSchema],
    required: true,
  },
  duration: {
    type: String,
  },
  genre: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Note title must contain alphabet characters');
        }
      });
    },
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
});