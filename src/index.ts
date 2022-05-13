import express from 'express';
import './db/mongoose';
import {song} from './models/example';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/songs', (req, res) => { // FUNCIONA FACHERO
  if (!req.body) {
    res.status(400).send({
      error: 'A body must be provided',
    });
  } else {
    const songObj = new song(req.body);

    songObj.save().then((song: any) => {
      res.status(201).send(song);
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});

app.get('/songs', (req, res) => { // FUNCIONA FACHERO
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  } else {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    song.find(filter).then((song) => {
      if (song.length !== 0) {
        res.send(song);
      } else {
        res.status(404).send({
          error: 'The specified name does not exists',
        });
      }
    }).catch(() => {
      res.status(500).send();
    });
  }
});

// app.get('/songs/:id', (req, res) => { // FUNCIONA FACHERO
//   if (!req.query.name) {
//     res.status(400).send({
//       error: 'A name must be provided',
//     });
//   } else {
//     song.findById(req.params.id).then((songs) => {
//       if (!songs) {
//         res.status(404).send({
//           error: 'The specified ID does not exists',
//         });
//       } else {
//         res.send(songs);
//       }
//     }).catch(() => {
//       res.status(500).send();
//     });
//   }
// });

// Actualización de elementos mediante query string
app.patch('/songs', (req, res) => { // El patch funciona, pero hay que tener en cuenta que solo se le debe de pasar sólo los campos que van a ser modificado
  if (!req.query.name) {
    res.status(400).send({
      error: 'A song name must be provided',
    });
  } else {
    const allowedUpdates = ['name', 'author'];
    const actualUpdates = Object.keys(req.body); 
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    console.log(isValidUpdate);
    if (!isValidUpdate) { 
      res.status(400).send({
        error: 'Update is not permitted',
      });
    } else {
      song.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
        new: true,
        runValidators: true,
      }).then((song) => {
        if (!song) {
          res.status(404).send();
        } else {
          res.send(song);
        }
      }).catch((error) => {
        res.status(400).send(error);
      });
    }
  }
});

app.delete('/songs', (req, res) => { // FUNCIONA FACHERO
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    song.findOneAndDelete({name: req.query.name.toString()}).then((songs) => {
      if (!songs) {
        res.status(404).send();
      } else {
        res.send(songs);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});

app.all('*', (_, res) => { // FUNCIONA FACHERO
  res.status(501).send();
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// import express from 'express'; // HACE USO DE LOS ROUTERS PARA PODER EJECUTAR TODOS LOS PUNTOS DE ACCESO
// import './db/mongoose';
// import {postRouter} from './routers/post';
// import {getRouter} from './routers/get';
// import {patchRouter} from './routers/patch';
// import {deleteRouter} from './routers/delete';
// import {defaultRouter} from './routers/default';

// const app = express();
// app.use(express.json());
// app.use(postRouter);
// app.use(getRouter);
// app.use(patchRouter);
// app.use(deleteRouter);
// app.use(defaultRouter);

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server is up on port ${port}`);
// });