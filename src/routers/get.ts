// import * as express from 'express';
// import {song} from '../models/example';

// export const getRouter = express.Router();

// getRouter.get('/notes', (req, res) => {
//   const filter = req.query.title?{title: req.query.title.toString()}:{};

//   song.find(filter).then((song) => {
//     if (song.length !== 0) {
//       res.send(song);
//     } else {
//       res.status(404).send();
//     }
//   }).catch(() => {
//     res.status(500).send();
//   });
// });

// getRouter.get('/notes/:id', (req, res) => {
//     song.findById(req.params.id).then((song) => {
//     if (!song) {
//       res.status(404).send();
//     } else {
//       res.send(song);
//     }
//   }).catch(() => {
//     res.status(500).send();
//   });
// });