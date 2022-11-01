const express = require('express');
const postInmobiliaria = require('./postInmobiliaria');
const getInmobiliaria = require('./getInmobiliaria');
const deleteInmobiliaria = require('./deleteInmobiliaria');
const router = express.Router();
/// get
router.get('/inmobiliaria/:correo', getInmobiliaria.getInmobiliaria);
router.get('/servicios', getInmobiliaria.getServicios);
/// post
router.post('/inmobiliaria', postInmobiliaria.postInmobiliaria);
router.post('/inmueble', postInmobiliaria.postInmueble);
router.post('/servicio', postInmobiliaria.postServicio);
/// delete
router.delete('/inmobiliaria', deleteInmobiliaria.deleteInmobiliaria);

module.exports = router;
