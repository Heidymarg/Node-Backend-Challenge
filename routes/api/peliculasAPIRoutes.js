const express = require('express');
const router = express.Router();
const peliculasAPIController = require('../../controllers/peliculasAPIController');

router.get('/', peliculasAPIController.list);
router.get('/:id', peliculasAPIController.detail);

router.post('/peliculas/create', peliculasAPIController.create);

router.put('/update/:id', peliculasAPIController.update);

router.delete('/delete/:id', peliculasAPIController.destroy);

module.exports = router;
