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
router.get('/inmuebles/agente/:agente', getInmobiliaria.getInmueblesAgente);
router.get('/servicios', getInmobiliaria.getServicios);
router.get('/proyectos/notario/:notario', getInmobiliaria.getProyectosNotario);
router.get('/proyectos/agente/:agente', getInmobiliaria.getProyectosAgente);



/// post
router.post('/inmobiliaria', postInmobiliaria.postInmobiliaria);
router.post('/inmueble', postInmobiliaria.postInmueble);
router.post('/servicio', postInmobiliaria.postServicio);
router.post('/notario', postInmobiliaria.postNotario);
router.post('/proyecto/agente', postInmobiliaria.postProyectoAgente);
router.post('/proyecto', postInmobiliaria.postProyecto);
router.post('/proyecto/notario', postInmobiliaria.postNotarioProyecto);
router.post('/inmueble/cliente', postInmobiliaria.postInmuebleCliente);

/// delete
router.delete('/inmobiliaria', deleteInmobiliaria.deleteInmobiliaria);
router.delete('/notario', deleteInmobiliaria.deleteNotario);

module.exports = router;
