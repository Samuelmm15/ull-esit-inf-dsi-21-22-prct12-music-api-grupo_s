import {Song} from "../Interfaces/interfaces";
import {Schema} from 'mongoose';

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
  },
  genre: {
    type: [String],
    required: true,
    enum: ['Rock', 'Pop', 'Rap', 'Jazz', 'Country', 'Electronic',
      'Folk', 'Hip-Hop', 'Classic', 'Merengue', 'Metal', 'Electro',
      'Reggaeton', 'Salsa', 'Samba', 'Tango', 'Techno', 'Other'],
  },
  single: {
    type: Boolean,
    required: true,
  },
  reproductionNumber: {
    type: Number,
    required: true,
  },
});