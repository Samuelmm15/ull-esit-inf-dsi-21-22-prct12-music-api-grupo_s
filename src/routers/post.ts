import express from 'express';
import {song} from '../models/example';

export const postRouter = express.Router();

postRouter.post('/song', (req, res) => {
  const songOBJ = new song(req.body);

  songOBJ.save().then((songOBJ) => {
    res.status(201).send(songOBJ);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
