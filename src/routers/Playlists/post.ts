/* eslint-disable new-cap */
import express from 'express';
import {playlist} from '../../models/playlistModel';

export const postRouterPlaylist = express.Router();

postRouterPlaylist.post('/music-db/playlists', (req, res) => {
  if (!req.body) {
    res.status(400).send({
      error: 'A body must be provided',
    });
  } else {
    const playlistObj = new playlist(req.body);

    playlistObj.save().then((playlist: any) => {
      res.status(201).send(playlist);
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});
