const expres = require('express');
const getFletes = require('./get');
const postFletes = require('./post');
const deleteFletes = require('./delete');
const router = expres.Router();
//GET FLETES
router.get('/items/:paquete', getFletes.getItems);
router.get('/paquetes/:flete', getFletes.getPaquetes);
router.get('/cargadores/:empresa', getFletes.getCargadores);
router.get('/cargador/:empresa/:rfc', getFletes.getCargador);
router.get('/cargadores/:flete', getFletes.getCargadoresFlete);
router.get('/transportes/:empresa', getFletes.getTransportes);
router.get('/transporte/:empresa/:matricula', getFletes.getTransporte);
router.get('/transporteFlete/:flete', getFletes.getTransportesFlete);
router.get('/flete/:flete', getFletes.getFlete);
router.get('/fletesE/:empresa', getFletes.getFletesEmpresa);
router.get('/fletesC/:cliente', getFletes.getFletesCliente);
router.get('/precargas/:empresa', getFletes.getPrecargas);
router.get('/precarga/:empresa/:id', getFletes.getPrecarga);
router.get('/empresas', getFletes.getEmpresas);
router.get('/empresa/:correo', getFletes.getEmpresa);
//POST FLETES
router.post('/item', postFletes.postItem);
router.post('/cargador', postFletes.postCargador);
router.post('/transporte', postFletes.postTransporte);
router.post('/empresa', postFletes.postEmpresa);
router.post('/precarga', postFletes.postPrecarga);
router.post('/transporteFlete', postFletes.postTransporteFlete);
router.post('/flete', postFletes.postFlete);
//DELETE FLETES
router.delete('/item', deleteFletes.deleteItem);
router.delete('/ultimoItem', deleteFletes.deleteUltimoItem);
router.delete('/paquete', deleteFletes.deletePaquete);
router.delete('/cargador', deleteFletes.deleteCargador);
router.delete('/transporte', deleteFletes.deleteTransporte);
router.delete('/precarga', deleteFletes.deletePrecarga);
router.delete('/flete', deleteFletes.deleteFlete);
router.delete('/empresa', deleteFletes.deleteEmpresa);

module.exports = router;
