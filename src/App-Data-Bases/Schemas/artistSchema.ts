import {Artist} from "../Interfaces/interfaces";
import {SongSchema} from "./songSchema";
import {Schema} from 'mongoose';

export const ArtistSchema = new Schema<Artist>({
  name: {
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
  publishedSongs: {
    type: [SongSchema],
    required: true,
  },
  monthlyListeners: {
    type: Number,
    required: true,
  },
});