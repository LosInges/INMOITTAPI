const express = require('express');
const postInmobiliaria = require('./post');
const getInmobiliaria = require('./get');
const deleteInmobiliaria = require('./delete');
const router = express.Router();
/// get
router.get('/inmobiliaria/:correo', getInmobiliaria.getInmobiliaria);
router.get('/inmobiliarias', getInmobiliaria.getInmobiliarias);
router.get('/servicios', getInmobiliaria.getServicios);
/// post
router.post('/inmobiliaria', postInmobiliaria.postInmobiliaria);
router.post('/inmueble', postInmobiliaria.postInmueble);
router.post('/servicio', postInmobiliaria.postServicio);
/// delete
router.delete('/inmobiliaria', deleteInmobiliaria.deleteInmobiliaria);

module.exports = router;
