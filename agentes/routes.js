const express = require('express');
const getAgente = require('./get');
const postAgente = require('./post');
const deleteAgente = require('./delete');
const router = express.Router();

//GET AGENTES
router.get('/agente/:inmobiliaria/:rfc', getAgente.getAgente);
router.get('/agentes/:inmobiliaria', getAgente.getAgentes);
router.get('/inmuebles/agente/:agente', getAgente.getInmueblesAgente);

//POST AGENTE
router.post('/agente', postAgente.postAgentes);

//DELETE AGENTE
router.delete('/agente', deleteAgente.deleteAgente);

module.exports = router;
