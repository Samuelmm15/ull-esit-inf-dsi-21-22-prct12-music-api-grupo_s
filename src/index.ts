// /* eslint-disable new-cap */
// import express from 'express';
// import './db/mongoose';
// import {song} from './models/songModel';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server is up on port ${port}`);
// });

import express from 'express';
import './db/databaseConnect';
import {postRouterSong} from './routers/postSong';
import {getRouterSong} from './routers/getSong';
import {patchRouterSong} from './routers/patchSong';
import {deleteRouterSong} from './routers/deleteSong';
import {defaultRouterSong} from './routers/defaultSong';

const app = express();
app.use(express.json());
app.use(postRouterSong);
app.use(getRouterSong);
app.use(patchRouterSong);
app.use(deleteRouterSong);
app.use(defaultRouterSong);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
