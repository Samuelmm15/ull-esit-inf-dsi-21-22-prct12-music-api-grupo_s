/* eslint-disable new-cap */
import express from 'express';
// import './db/mongoose';

export const defaultRouterSong = express.Router();

defaultRouterSong.all('*', (_, res) => { // FUNCIONA FACHERO
  res.status(501).send();
});
