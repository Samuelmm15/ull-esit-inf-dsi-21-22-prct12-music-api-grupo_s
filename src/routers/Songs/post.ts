/* eslint-disable new-cap */
import express from 'express';
// import './db/mongoose';
import {song} from '../../models/songModel';

export const postRouterSong = express.Router();

postRouterSong.post('/music-db/songs', (req, res) => {
  if (!req.body) {
    res.status(400).send({
      error: 'A body must be provided',
    });
  } else {
    const songObj = new song(req.body);

    songObj.save().then((song: any) => {
      res.status(201).send(song);
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});
