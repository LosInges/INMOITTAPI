const express = require('express');
const sharp = require('sharp');
const login = require('./controllers/login');
const imagenes = require('./controllers/imagenes');
const routerCliente = require('./clientes/routes');
const routerInmobiliaria = require('./inmobiliarias/routes');
const routerAgente = require('./agentes/routes');
const routerFletes = require('./fletes/routes');
const router = express.Router();
router.use(routerCliente);
router.use(routerInmobiliaria);
router.use(routerAgente);
router.use(routerFletes);

//LOGIN
router.post('/login', login.login);
router.get('/solicitar/registro/:correo', login.solicitarRegistro);
router.get(
  '/solicitar/registro/notario/:inmobiliaria/:rfc',
  login.solicitarRegistroNotario
);

//IMAGENES
router.post('/img/miniatura', imagenes.imgMiniatura);
router.post('/img', imagenes.img);
router.post('/miniatura', imagenes.miniatura);

module.exports = router;
