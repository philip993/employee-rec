const express = require('express');
const router = express.Router();
const contractCtrl = require('./ContractController');

router.post('/add', contractCtrl.addContract);
router.get('/', contractCtrl.getAllContract);
router.get('/:id', contractCtrl.getOneContract);
router.put('/update/:id', contractCtrl.updateContract);

module.exports = router;
