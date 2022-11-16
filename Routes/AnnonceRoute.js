const express = require('express');
const annonceController=require('../Controllers/AnnonceController')
const router=express.Router();
router.get('/', annonceController.getAll);
router.post('/', annonceController.saveAnnonce);
router.get('/:id', annonceController.getById);
router.delete('/:id', annonceController.deleteAnnonce);
router.put('/:id',annonceController.updateAnnonce)


module.exports = router