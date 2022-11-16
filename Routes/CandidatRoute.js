const express = require('express');

const candidatController=require('../Controllers/candidatController')
const router=express.Router();
router.get('/', candidatController.getAll);
router.post('/', candidatController.savecandidat);
router.get('/:id', candidatController.getById);
router.delete('/:id', candidatController.deletecandidat);

module.exports = router