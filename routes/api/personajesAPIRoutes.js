const express = require('express');
const router = express.Router();
const personajesAPIController = require('../../controllers/personajesAPIController');

router.get('/', personajesAPIController.list);
router.get('/:id', personajesAPIController.detail);

router.post('/personajes/create', personajesAPIController.create);

router.put('/update/:id', personajesAPIController.update);

router.delete('/delete/:id', personajesAPIController.destroy);

module.exports = router;