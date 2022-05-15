/* eslint-disable new-cap */
import express from 'express';
import {artist} from '../../models/artistModel';

export const patchRouterArtist = express.Router();

patchRouterArtist.patch('/artists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A artist name must be provided',
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
      artist.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
        new: true,
        runValidators: true,
      }).then((artist) => {
        if (!artist) {
          res.status(404).send();
        } else {
          res.send(artist);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});
