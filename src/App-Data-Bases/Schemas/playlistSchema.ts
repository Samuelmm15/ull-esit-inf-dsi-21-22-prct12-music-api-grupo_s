import {Playlists} from "../Interfaces/interfaces";
import {Schema} from 'mongoose';

export const PlaylistsSchema = new Schema<Playlists>({
  name: {
    type: String,
    required: true,
  },
  songs: {
    type: [Number],
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
});