const express = require('express');
const postInmobiliaria = require('./post');
const getInmobiliaria = require('./get');
const deleteInmobiliaria = require('./delete');
const router = express.Router();

/// get
router.get('/inmobiliaria/:correo', getInmobiliaria.getInmobiliaria);
router.get('/inmobiliarias', getInmobiliaria.getInmobiliarias);
router.get('/notarios/:inmobiliaria', getInmobiliaria.getNotarios);
router.get(
  '/notarios/proyecto/:proyecto/:inmobiliaria',
  getInmobiliaria.getNotariosProyecto
);
router.get('/notario/:inmobiliaria/:rfc', getInmobiliaria.getNotario);
router.get(
  '/agentes/proyecto/:proyecto/:inmobiliaria',
  getInmobiliaria.getAgentesProyecto
);
router.get(
  '/inmuebles/proyecto/:proyecto/:inmobiliaria',
  getInmobiliaria.getInmueblesProyecto
);
router.get(
  '/inmuebles/notario/:notario/:inmobiliaria/:proyecto',
  getInmobiliaria.getInmueblesNotario
);
router.get(
  '/inmuebles/agente/:agente/:inmobiliaria/:proyecto',
  getInmobiliaria.getInmueblesAgente
);
router.get('/servicios', getInmobiliaria.getServicios);
router.get('/proyectos/notario/:notario', getInmobiliaria.getProyectosNotario);
router.get('/proyectos/agente/:agente', getInmobiliaria.getProyectosAgente);
router.get(
  '/proyectos/inmobiliaria/:inmobiliaria',
  getInmobiliaria.getProyectosInmobiliaria
);
router.get(
  '/proyecto/inmobiliaria/:inmobiliaria/:nombre',
  getInmobiliaria.getProyectoInmobiliaria
);

/// post
router.post('/inmobiliaria', postInmobiliaria.postInmobiliaria);
router.post('/inmueble', postInmobiliaria.postInmueble);
router.post('/servicio', postInmobiliaria.postServicio);
router.post('/notario', postInmobiliaria.postNotario);
router.post('/agente/proyecto', postInmobiliaria.postAgenteProyecto);
router.post('/proyecto', postInmobiliaria.postProyecto);
router.post('/notario/proyecto', postInmobiliaria.postNotarioProyecto);
router.post('/inmueble/cliente', postInmobiliaria.postInmuebleCliente);

/// delete
router.delete('/inmobiliaria', deleteInmobiliaria.deleteInmobiliaria);
router.delete('/notario', deleteInmobiliaria.deleteNotario);
router.delete('/inmueble', deleteInmobiliaria.deleteInmueble);
router.delete('/inmueble/cliente', deleteInmobiliaria.deleteInmuebleCliente);
router.delete('/proyecto', deleteInmobiliaria.deleteProyecto);
router.delete('/notario/proyecto', deleteInmobiliaria.deleteNotarioProyecto);
router.delete('/agente/proyecto', deleteInmobiliaria.deleteAgenteProyecto);

module.exports = router;
