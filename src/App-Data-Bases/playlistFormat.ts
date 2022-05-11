import {Playlists} from "../interfaces";
import {Document, connect, model, Schema} from 'mongoose';

const PlaylistsSchema = new Schema<Playlists>({
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

const Playlists = model<Playlists>('Playlists', PlaylistsSchema);
