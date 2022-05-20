/* eslint-disable new-cap */
import express from 'express';

export const defaultRouterPlaylist = express.Router();

/**
 * Default HTTP Petition of Playlists Collection
 */
defaultRouterPlaylist.all('*', (_, res) => {
  res.status(501).send();
});
