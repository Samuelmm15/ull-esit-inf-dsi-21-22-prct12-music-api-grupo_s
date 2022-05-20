/* eslint-disable new-cap */
import express from 'express';
import {playlist} from '../../models/playlistModel';

export const patchRouterPlaylist = express.Router();

patchRouterPlaylist.patch('/music-db/playlists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A playlist name must be provided',
    });
  } else {
    const allowedUpdates = ['name'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
          actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      res.status(400).send({
        error: 'Update is not permitted',
      });
    } else {
      playlist.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
        new: true,
        runValidators: true,
      }).then((playlist) => {
        if (!playlist) {
          res.status(404).send({
            error: 'Playlist not found',
          });
        } else {
          res.send(playlist);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});
