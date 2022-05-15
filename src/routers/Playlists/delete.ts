/* eslint-disable new-cap */
import express from 'express';
import {playlist} from '../../models/playlistModel';

export const deleteRouterPlaylist = express.Router();

deleteRouterPlaylist.delete('/playlists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    playlist.findOneAndDelete({name: req.query.name.toString()}).then((playlist) => {
      if (!playlist) {
        res.status(404).send();
      } else {
        res.send(playlist);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});
