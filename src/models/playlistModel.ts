import {PlaylistSchema} from "../App-Data-Bases-Operations/Schemas/playlistSchema";
import {model} from 'mongoose';
import {Playlists} from "../App-Data-Bases-Operations/Interfaces/playlistInterface";

export const playlist = model<Playlists>('Playlist', PlaylistSchema);
