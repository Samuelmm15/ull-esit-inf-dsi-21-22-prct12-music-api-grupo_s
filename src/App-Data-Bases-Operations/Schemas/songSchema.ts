import {Song} from "../Interfaces/interfaces";
import {Schema} from 'mongoose';
let validator = require('validator');

export const SongSchema = new Schema<Song>({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
    validate: (value: string) => {
      let pattern = /([0-5]?[0-9]):(?:[012345]\d)$/g;
      let result = value.match(pattern)?.toString();
      if(result === undefined) {
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
    validate: (value: string) => {
      if (!validator.isDecimal(value)) {
        throw new Error('Reproduction Number must be a number');
      }
    },
  },
});