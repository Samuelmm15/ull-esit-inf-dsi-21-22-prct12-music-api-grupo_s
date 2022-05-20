/* eslint-disable new-cap */
import express from 'express';

export const defaultRouterSong = express.Router();

/**
 * Default HTTP Petition of Songs Collection
 */
defaultRouterSong.all('*', (_, res) => {
  res.status(501).send();
});
