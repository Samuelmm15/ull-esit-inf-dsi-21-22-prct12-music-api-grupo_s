/* eslint-disable new-cap */
import express from 'express';
import {artist} from '../../models/artistModel';

export const patchRouterArtist = express.Router();

patchRouterArtist.patch('/music-db/artists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A artist name must be provided',
    });
  } else {
    const allowedUpdates = ['name'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      res.status(400).send({
        error: 'Update is not permitted',
      });
    } else {
      artist.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
        new: true,
        runValidators: true,
      }).then((artist) => {
        if (!artist) {
          res.status(404).send( {
            error: 'Artist not found',
          });
        } else {
          res.send(artist);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});
