const express = require('express');
const sharp = require('sharp');
const conexion = require('./conexion');

const img = (req, res) => {
  sharp(req.file.path)
    .clone()
    .toFile(`public/img/${req.file.filename}`, (err, info) => {
      if (err) {
        res.send({ err, ok: false });
      } else {
        conexion.execute(
          'INSERT INTO imagenes_inmueble(titulo, ruta) VALUES(?,?)',
          [req.body.titulo, `public/img/${req.file.filename}`],
          { prepare: true },
          (err, results) => {
            if (err) {
              res.send({ err, ok: false });
            } else {
              res.send({ ok: true, path: `img/${req.file.filename}` });
            }
          }
        );
      }
    });
};

const imgMiniatura = (req, res) => {
  let cargas = [
    sharp(req.file.path)
      .resize(250, 250)
      .toFile(`public/img/miniaturas/${req.file.filename}`),
    sharp(req.file.path).clone().toFile(`public/img/${req.file.filename}`),
  ];
  Promise.all(cargas)
    .then(() => {
      conexion.execute(
        'INSERT INTO imagenes_inmueble(titulo, ruta) VALUES(?,?)',
        [req.body.titulo, `public/img/${req.file.filename}`],
        { prepare: true },
        (err, results) => {
          if (err) {
            res.send({ err, ok: false });
          } else {
            res.send({ ok: true, path: `img/${req.file.filename}` });
          }
        }
      );
    })
    .catch((err) => {
      res.send({ err, ok: false });
    });
};

const miniatura = (req, res) => {
  sharp(`public/img/${req.body.img}`)
    .resize(250, 250)
    .toFile(`public/img/miniaturas/${req.body.img}`, (err, info) => {
      if (err) {
        res.send({ err, ok: false });
      } else {
        res.send({ ok: true, path: `img/miniaturas/${req.body.img}` });
      }
    });
};

module.exports = { img, imgMiniatura, miniatura };
