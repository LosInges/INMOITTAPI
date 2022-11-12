const express = require('express');
const getAgente = require('./get');
const postAgente = require('./post')
const deleteAgente = require('./delete')
const router = express.Router();

router.get('/agente/:inmobiliaria/:rfc', getAgente.getAgente);

router.post('/agente', postAgente.postAgentes);

router.delete('/agente', deleteAgente.deleteAgente);

module.exports = router;
