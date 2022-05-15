import express from 'express';
import './db/databaseConnect';
import {postRouterSong} from './routers/Songs/post';
import {getRouterSong} from './routers/Songs/get';
import {patchRouterSong} from './routers/Songs/patch';
import {deleteRouterSong} from './routers/Songs/delete';
import {defaultRouterSong} from './routers/Songs/default';
import {postRouterArtist} from './routers/Artists/post';
import {getRouterArtist} from './routers/Artists/get';
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
app.use(postRouterSong);
app.use(getRouterSong);
app.use(patchRouterSong);
app.use(deleteRouterSong);
app.use(defaultRouterSong);
app.use(postRouterArtist);
app.use(getRouterArtist);
app.use(patchRouterArtist);
app.use(deleteRouterArtist);
app.use(defaultRouterArtist);
app.use(postRouterPlaylist);
app.use(getRouterPlaylist);
app.use(patchRouterPlaylist);
app.use(deleteRouterPlaylist);
app.use(defaultRouterPlaylist);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
