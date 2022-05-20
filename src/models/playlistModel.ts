import {PlaylistSchema} from "../Schemas/playlistSchema";
import {model} from 'mongoose';
import {Playlists} from "../Interfaces/playlistInterface";

/**
 * Playlist Model
 */
export const playlist = model<Playlists>('Playlist', PlaylistSchema);
