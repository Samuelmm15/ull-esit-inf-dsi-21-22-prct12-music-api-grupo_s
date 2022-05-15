/* eslint-disable new-cap */
import express from 'express';
import {playlist} from '../../models/playlistModel';

export const getRouterPlaylist = express.Router();

getRouterPlaylist.get('/music-db/playlists', (req, res) => { // FUNCIONA FACHERO
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  } else {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    playlist.find(filter).then((playlist) => {
      if (playlist.length !== 0) {
        res.send(playlist);
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


