const express = require('express');
const router = express.Router();
const generosAPIController = require('../../controllers/generosAPIController');

router.get('/', generosAPIController.list);
router.get('/:id', generosAPIController.detail);


router.post('/create', generosAPIController.create);
router.put('/update/:id', generosAPIController.update);

router.delete('/delete/:id', generosAPIController.destroy);

module.exports = router;

