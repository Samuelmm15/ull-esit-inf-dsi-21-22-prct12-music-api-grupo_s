/* eslint-disable new-cap */
import express from 'express';

export const defaultRouterArtist = express.Router();

/**
 * Default HTTP Petition of Artists Collection
 */
defaultRouterArtist.all('*', (_, res) => {
  res.status(501).send();
});
