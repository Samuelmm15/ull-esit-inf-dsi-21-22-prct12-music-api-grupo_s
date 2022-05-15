/* eslint-disable new-cap */
import express from 'express';
// import './db/mongoose';
import {song} from '../../models/songModel';

export const patchRouterSong = express.Router();

// Actualización de elementos mediante query string
patchRouterSong.patch('/songs', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A song name must be provided',
    });
  } else {
    const allowedUpdates = ['name', 'author'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    console.log(isValidUpdate);
    if (!isValidUpdate) {
      res.status(400).send({
        error: 'Update is not permitted',
      });
    } else {
      song.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
        new: true,
        runValidators: true,
      }).then((song) => {
        if (!song) {
          res.status(404).send();
        } else {
          res.send(song);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});
