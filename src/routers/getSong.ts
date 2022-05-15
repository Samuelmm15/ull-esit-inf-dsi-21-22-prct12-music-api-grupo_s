/* eslint-disable new-cap */
import express from 'express';
// import './db/mongoose';
import {song} from '../models/songModel';

export const getRouterSong = express.Router();

getRouterSong.get('/songs', (req, res) => { // FUNCIONA FACHERO
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  } else {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    song.find(filter).then((song) => {
      if (song.length !== 0) {
        res.send(song);
      } else {
        res.status(404).send({
          error: 'The specified name does not exists',
        });
      }
    }).catch(() => {
      res.status(500).send();
    });
  }
});

// app.get('/songs/:id', (req, res) => { // FUNCIONA FACHERO
//   if (!req.query.name) {
//     res.status(400).send({
//       error: 'A name must be provided',
//     });
//   } else {
//     song.findById(req.params.id).then((songs) => {
//       if (!songs) {
//         res.status(404).send({
//           error: 'The specified ID does not exists',
//         });
//       } else {
//         res.send(songs);
//       }
//     }).catch(() => {
//       res.status(500).send();
//     });
//   }
// });
