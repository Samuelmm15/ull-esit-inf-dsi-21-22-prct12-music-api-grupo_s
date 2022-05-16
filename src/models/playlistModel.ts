import {PlaylistSchema} from "../Schemas/playlistSchema";
import {model} from 'mongoose';
import {Playlists} from "../Interfaces/playlistInterface";

export const playlist = model<Playlists>('Playlist', PlaylistSchema);
