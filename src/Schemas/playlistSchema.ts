/* eslint-disable prefer-const */
import {Playlists} from "../Interfaces/playlistInterface";
import {Schema} from 'mongoose';
let validator = require('validator');

export const PlaylistSchema = new Schema<Playlists>({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  songs: {
    type: [{
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
          let pattern = /([0-5]?[0-9]):(?:[012345]\d)$/g;
          let result = value.match(pattern)?.toString();
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
    }],
    required: true,
  },
  duration: {
    required: true,
    trim: true,
    type: String,
    validate: (value: string) => {
      let pattern = /(([0-9]*) hrs ([0-5]?[0-9]) min ([0-5]?[0-9]) seg)$/g;
      let result = value.match(pattern)?.toString();
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
