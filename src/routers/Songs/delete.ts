/* eslint-disable new-cap */
import express from 'express';
import {song} from '../../models/songModel';

export const deleteRouterSong = express.Router();

/**
 * Delete HTTP Petition of Songs Collection
 */
deleteRouterSong.delete('/music-db/songs', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    song.findOneAndDelete({name: req.query.name.toString()}).then((songs) => {
      if (!songs) {
        res.status(404).send({
          error: 'Song not found',
        });
      } else {
        res.send(songs);
      }
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});
