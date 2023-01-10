const express = require('express');

const RHController=require('../Controllers/RHController')
const router=express.Router();
router.get('/', RHController.getAll);
router.post('/api/auth/signup', RHController.saveRh);
router.get('/:id', RHController.getById);
router.delete('/:id', RHController.deleteRh);
router.put('/:id',RHController.updateRh);
router.post('/api/auth/signin', RHController.signin);
router.post('api/auth/utilisateur', RHController.Utilisateur);
router.post('/api/auth/logout', RHController.logout);
router.get('/annonces/:id', RHController.getAnnoncesByIdRh);




module.exports = router
