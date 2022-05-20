/* eslint-disable new-cap */
import express from 'express';
import {song} from '../../models/songModel';

export const patchRouterSong = express.Router();

/**
 * Patch HTTP Petition of Songs Collection
 */
patchRouterSong.patch('/music-db/songs', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A song name must be provided',
    });
  } else {
    const allowedUpdates = ['name', 'author'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

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
          res.status(404).send({
            error: 'Song not found',
          });
        } else {
          res.send(song);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});
