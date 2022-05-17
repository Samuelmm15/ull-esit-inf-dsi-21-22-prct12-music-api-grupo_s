import {Playlists} from "../Interfaces/playlistInterface";
import {Song} from "../Interfaces/songInterface";
import {Schema} from 'mongoose';
const validator = require('validator');

const songPlaylistSchema = new Schema<Song>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      const pattern = /([0-5]?[0-9]):(?:[012345]\d)$/g;
      const result = value.match(pattern)?.toString();
      if (result === undefined) {
        throw new Error('Time format not valid, try again with this format -> MM:SS');
      }
    },
  },
  genre: {
    type: [String],
    required: true,
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Note title must contain alphabet characters');
        }
      });
    },
  },
  single: {
    type: Boolean,
    required: true,
  },
  reproductionNumber: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!validator.isDecimal(value)) {
        throw new Error('Reproduction Number must be a number');
      }
    },
  },
});

export const PlaylistSchema = new Schema<Playlists>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  songs: {
    type: [songPlaylistSchema],
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
          throw new Error('Note title must contain alphabet characters');
        }
      });
    },
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
});
