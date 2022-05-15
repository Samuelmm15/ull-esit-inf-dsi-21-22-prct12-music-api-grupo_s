/* eslint-disable new-cap */
import express from 'express';

export const defaultRouterArtist = express.Router();

defaultRouterArtist.all('*', (_, res) => {
  res.status(501).send();
});
