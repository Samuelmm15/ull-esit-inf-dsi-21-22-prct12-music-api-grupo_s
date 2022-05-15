/* eslint-disable new-cap */
import express from 'express';
import {artist} from '../../models/artistModel';

export const postRouterArtist = express.Router();

postRouterArtist.post('/artists', (req, res) => {
  if (!req.body) {
    res.status(400).send({
      error: 'A body must be provided',
    });
  } else {
    const artistObj = new artist(req.body);

    artistObj.save().then((artist: any) => {
      res.status(201).send(artist);
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});

