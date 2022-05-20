import express from 'express';
import './db/databaseConnect';
import {getRouterSong} from './routers/Songs/get';
import {postRouterSong} from './routers/Songs/post';
import {patchRouterSong} from './routers/Songs/patch';
import {deleteRouterSong} from './routers/Songs/delete';
import {defaultRouterSong} from './routers/Songs/default';

import {getRouterArtist} from './routers/Artists/get';
import {postRouterArtist} from './routers/Artists/post';
import {patchRouterArtist} from './routers/Artists/patch';
import {deleteRouterArtist} from './routers/Artists/delete';
import {defaultRouterArtist} from './routers/Artists/default';

import {getRouterPlaylist} from './routers/Playlists/get';
import {postRouterPlaylist} from './routers/Playlists/post';
import {patchRouterPlaylist} from './routers/Playlists/patch';
import {deleteRouterPlaylist} from './routers/Playlists/delete';
import {defaultRouterPlaylist} from './routers/Playlists/default';

const app = express();
app.use(express.json());

app.use(postRouterSong, postRouterArtist, postRouterPlaylist);
app.use(getRouterSong, getRouterArtist, getRouterPlaylist);
app.use(patchRouterSong, patchRouterArtist, patchRouterPlaylist);
app.use(deleteRouterSong, deleteRouterArtist, deleteRouterPlaylist);
app.use(defaultRouterSong, defaultRouterArtist, defaultRouterPlaylist);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
