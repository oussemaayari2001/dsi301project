const express = require('express');

const RHController=require('../Controllers/RHController')
const router=express.Router();
router.get('/', RHController.getAll);
router.post('/', RHController.saveRh);
router.get('/:id', RHController.getById);
router.delete('/:id', RHController.deleteRh);
router.put('/:id',RHController.updateRh)


module.exports = router
