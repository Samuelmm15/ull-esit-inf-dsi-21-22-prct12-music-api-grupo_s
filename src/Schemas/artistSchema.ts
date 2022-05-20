/* eslint-disable prefer-const */
import {Artist} from "../Interfaces/artistInterface";
import {Schema} from 'mongoose';
let validator = require('validator');

/**
 * Artist Schema
 */
export const ArtistSchema = new Schema<Artist>({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  genre: {
    type: [String],
    required: true,
    validate: (value: string[]) => {
      value.forEach((genre) => {
        if (!validator.isAlpha(genre)) {
          throw new Error('Artist genre must contain alphabet characters');
        }
      });
    },
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
  publishedSongs: {
    type: [String],
    required: true,
  },
  monthlyListeners: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!validator.isDecimal(value)) {
        throw new Error('Monthly Listeners must be a number');
      }
    },
  },
});

