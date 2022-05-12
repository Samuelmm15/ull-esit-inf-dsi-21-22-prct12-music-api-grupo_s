// import express from 'express';
// import './db/mongoose';
// import {song} from './models/example';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.post('/songs', (req, res) => {
//   const songOBJ = new song(req.body);

//   songOBJ.save().then((songOBJ) => {
//     res.status(201).send(songOBJ);
//   }).catch((error) => {
//     res.status(400).send(error);
//   })
// });

// app.get('/songs', (req, res) => { // Búsqueda por query string
//   const filter = req.query.name?{name: req.query.name.toString()}:{};

//   song.find(filter).then((song) => {
//     if (song.length !== 0) {
//       res.send(song);
//     } else {
//       res.status(404).send();
//     }
//   }).catch(() => {
//     res.status(500).send();
//   });
// });

// app.get('/songs/:id', (req, res) => { // busqueda mediante id
//   song.findById(req.params.id).then((song) => {
//     if (!song) {
//       res.status(404).send();
//     } else {
//       res.send(song);
//     }
//   }).catch(() => {
//     res.status(500).send();
//   });
// });

// app.patch('/songs', (req, res) => { // actualización de elementos mediante query string
//   if (!req.query.name) {
//     res.status(400).send({
//       error: 'A title must be provided',
//     });
//   } else {
//     const allowedUpdates = ['title', 'body', 'color']; // modificarlo
//     const actualUpdates = Object.keys(req.body);
//     const isValidUpdate =
//       actualUpdates.every((update) => allowedUpdates.includes(update));

//     if (!isValidUpdate) {
//       res.status(400).send({
//         error: 'Update is not permitted',
//       });
//     } else {
//       song.findOneAndUpdate({name: req.query.name.toString()}, req.body, { // modificar
//         new: true,
//         runValidators: true,
//       }).then((note) => {
//         if (!note) {
//           res.status(404).send();
//         } else {
//           res.send(note);
//         }
//       }).catch((error) => {
//         res.status(400).send(error);
//       });
//     }
//   }
// });

// app.patch('/notes/:id', (req, res) => { // actualización mediante id
//   const allowedUpdates = ['title', 'body', 'color'];
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
//       if (!note) {
//         res.status(404).send();
//       } else {
//         res.send(note);
//       }
//     }).catch((error) => {
//       res.status(400).send(error);
//     });
//   }
// });

// app.delete('/songs', (req, res) => { // eliminación haciendo uso de query string
//   if (!req.query.title) {
//     res.status(400).send({
//       error: 'A title must be provided',
//     });
//   } else {
//     song.findOneAndDelete({name: req.query.name.toString()}).then((song) => {
//       if (!song) {
//         res.status(404).send();
//       } else {
//         res.send(song);
//       }
//     }).catch(() => {
//       res.status(400).send();
//     });
//   }
// });

// app.delete('/songs/:id', (req, res) => { // Eliminación de 
//   song.findByIdAndDelete(req.params.id).then((song) => {
//     if (!song) {
//       res.status(404).send();
//     } else {
//       res.send(song);
//     }
//   }).catch(() => {
//     res.status(400).send();
//   });
// });

// app.all('*', (_, res) => { // El 501 significa que el servidor no soporta la operación enviada
//   res.status(501).send();
// });

// app.listen(port, () => {
//   console.log(`Server is up on port ${port}`);
// });

import express from 'express'; // HACE USO DE LOS ROUTERS PARA PODER EJECUTAR TODOS LOS PUNTOS DE ACCESO
import './db/mongoose';
import {postRouter} from './routers/post';
// import {getRouter} from './routers/get';
// import {patchRouter} from './routers/patch';
// import {deleteRouter} from './routers/delete';
// import {defaultRouter} from './routers/default';

const app = express();
app.use(express.json());
app.use(postRouter);
// app.use(getRouter);
// app.use(patchRouter);
// app.use(deleteRouter);
// app.use(defaultRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});