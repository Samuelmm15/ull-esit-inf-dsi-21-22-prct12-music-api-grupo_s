/* eslint-disable new-cap */
import express from 'express';
import {artist} from '../../models/artistModel';

export const getRouterArtist = express.Router();

getRouterArtist.get('/music-db/artists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  } else {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    artist.find(filter).then((artist) => {
      if (artist.length !== 0) {
        res.send(artist);
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

