/* eslint-disable new-cap */
import express from 'express';
import {artist} from '../../models/artistModel';

export const deleteRouterArtist = express.Router();

deleteRouterArtist.delete('/music-db/artists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    artist.findOneAndDelete({name: req.query.name.toString()}).then((artist) => {
      if (!artist) {
        res.status(404).send();
      } else {
        res.send(artist);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});
