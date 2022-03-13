const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosController');

router.get('/generos', generosController.list);
router.get('/generos/detail/:id', generosController.detail);

module.exports = router;

