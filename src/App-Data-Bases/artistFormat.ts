import {Artist} from "./Interfaces/interfaces";
import {SongSchema} from "./songFormat";
import {Document, connect, model, Schema} from 'mongoose';

const ArtistSchema = new Schema<Artist>({
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

const Artist = model<Artist>('Artist', ArtistSchema);

