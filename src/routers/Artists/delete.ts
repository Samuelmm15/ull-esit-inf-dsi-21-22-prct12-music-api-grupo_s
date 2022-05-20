/* eslint-disable new-cap */
import express from 'express';
import {artist} from '../../models/artistModel';

export const deleteRouterArtist = express.Router();

deleteRouterArtist.delete('/music-db/artists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A Name must be provided',
    });
  } else {
    artist.findOneAndDelete({name: req.query.name.toString()}).then((artist) => {
      if (!artist) {
        res.status(404).send({
          error: 'Artist not found',
        });
      } else {
        res.send(artist);
      }
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});
