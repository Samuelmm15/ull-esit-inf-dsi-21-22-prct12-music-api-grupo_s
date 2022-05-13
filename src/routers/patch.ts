import * as express from 'express';
import {song} from '../models/example';

export const patchRouter = express.Router();

patchRouter.patch('/songs', (req, res) => { // actualización de elementos mediante query string
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    const allowedUpdates = ['name']; // modificarlo
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      res.status(400).send({
        error: 'Update is not permitted',
      });
    } else {
      song.findOneAndUpdate({name: req.query.name.toString()}, req.body, { // modificar
        new: true,
        runValidators: true,
      }).then((note) => {
        if (!note) {
          res.status(404).send();
        } else {
          res.send(note);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});

// patchRouter.patch('/notes/:id', (req, res) => { // actualización mediante id
//   const allowedUpdates = ['name'];
//   const actualUpdates = Object.keys(req.body);
//   const isValidUpdate =
//       actualUpdates.every((update) => allowedUpdates.includes(update));

//   if (!isValidUpdate) {
//     res.status(400).send({
//       error: 'Update is not permitted',
//     });
//   } else {
//     song.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     }).then((song) => {
//       if (!song) {
//         res.status(404).send();
//       } else {
//         res.send(song);
//       }
//     }).catch((error) => {
//       res.status(400).send(error);
//     });
//   }
// });
