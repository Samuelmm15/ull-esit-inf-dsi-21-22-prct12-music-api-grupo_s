/* eslint-disable new-cap */
import express from 'express';
import {song} from '../../models/songModel';

export const getRouterSong = express.Router();

/**
 * Get HTTP Petition of Songs Collection
 */
getRouterSong.get('/music-db/songs', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    song.find(filter).then((song) => {
      if (song.length !== 0) {
        res.send(song);
      } else {
        res.status(404).send({
          error: 'The specified title does not exists',
        });
      }
    }).catch(() => {
      res.status(500).send();
    });
  }
});

