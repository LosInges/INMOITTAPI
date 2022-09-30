const express = require('express');
const getControllers = require('./controllers/get');
const postControllers = require('./controllers/post');
const deleteControllers = require('./controllers/delete');
const router = express.Router();

//GET
router.get('/items/:paquete', getControllers.getItems);
router.get('/cargadores', getControllers.getCargadores);
router.get('/transportes', getControllers.getTransportes);
//POST
router.post('/item', postControllers.postItem);
router.post('/paquete', postControllers.postPaquete);
router.post('/cargador', postControllers.postCargador);
router.post('/transporte', postControllers.postTransporte);
//DELETE
router.delete('/item', deleteControllers.deleteItem);
router.delete('/paquete', deleteControllers.deletePaquete);
router.delete('/cargador', deleteControllers.deleteCargador);
router.delete('/transporte', deleteControllers.deleteTransporte);
router.delete('/itemPaquete', deleteControllers.deleteItemPaquete);
//PUT

module.exports = router;
