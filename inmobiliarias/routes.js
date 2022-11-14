const express = require('express');
const postInmobiliaria = require('./post');
const getInmobiliaria = require('./get');
const deleteInmobiliaria = require('./delete');
const router = express.Router();
/// get
router.get('/inmobiliaria/:correo', getInmobiliaria.getInmobiliaria);
router.get('/inmobiliarias', getInmobiliaria.getInmobiliarias);
router.get('/notarios/:inmobiliaria', getInmobiliaria.getNotarios);
router.get('/notario/:inmobiliaria/:rfc', getInmobiliaria.getNotario);
router.get('/inmuebles/notario/:notario', getInmobiliaria.getInmueblesNotario);
router.get('/servicios', getInmobiliaria.getServicios);
/// post
router.post('/inmobiliaria', postInmobiliaria.postInmobiliaria);
router.post('/inmueble', postInmobiliaria.postInmueble);
router.post('/servicio', postInmobiliaria.postServicio);
router.post('/notario', postInmobiliaria.postNotario);
/// delete
router.delete('/inmobiliaria', deleteInmobiliaria.deleteInmobiliaria);
router.delete('/notario', deleteInmobiliaria.deleteNotario);

module.exports = router;
