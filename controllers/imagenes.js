const express = require('express');
const sharp = require('sharp');
const conexion = require('./conexion');

const img = (req, res) => {
  sharp(req.file.path)
    .clone()
    .toFile(`public/img/${req.file.filename}`, (err, info) => {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").send({ err, ok: false });
      } else {
        conexion.execute(
          'INSERT INTO imagenes_inmueble(titulo, ruta) VALUES(?,?)',
          [req.body.titulo, `public/img/${req.file.filename}`],
          { prepare: true },
          (err, results) => {
            if (err) {
              res.header("Access-Control-Allow-Origin", "*").send({ err, ok: false });
            } else {
              res.header("Access-Control-Allow-Origin", "*").send({ ok: true, path: `img/${req.file.filename}` });
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
            res.header("Access-Control-Allow-Origin", "*").send({ err, ok: false });
          } else {
            res.header("Access-Control-Allow-Origin", "*").send({ ok: true, path: `img/${req.file.filename}` });
          }
        }
      );
    })
    .catch((err) => {
      res.header("Access-Control-Allow-Origin", "*").send({ err, ok: false });
    });
};

const miniatura = (req, res) => {
  sharp(req.file.path)
    .resize(64, 64)
    .toFile(`public/img/miniaturas/${req.file.filename}`, (err, info) => {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").send({ err, ok: false });
      } else {
        res.header("Access-Control-Allow-Origin", "*").send({ ok: true, path: `img/miniaturas/${req.file.filename}` });
      }
    });
};

module.exports = { img, imgMiniatura, miniatura };
