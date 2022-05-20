import {Playlists} from "../Interfaces/playlistInterface";
import {Schema} from 'mongoose';
const validator = require('validator');

export const PlaylistSchema = new Schema<Playlists>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  songs: {
    type: [String],
    required: true,
  },
  duration: {
    required: true,
    trim: true,
    type: String,
    validate: (value: string) => {
      const pattern = /(([0-9]*) hrs ([0-5]?[0-9]) min ([0-5]?[0-9]) seg)$/g;
      const result = value.match(pattern)?.toString();
      if (result === undefined) {
        throw new Error('Time format not valid, try again with this format -> HH hrs MM min SS seg');
      }
    },
  },
  genre: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Playlist genre must contain alphabet characters');
        }
      });
    },
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
});
