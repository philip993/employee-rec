const express = require('express');
const router = express.Router();
const contractCtrl = require('./ContractController');

router.post('/add', contractCtrl.addContract);
router.get('/', contractCtrl.getAllContract);
router.get('/:id', contractCtrl.getOneContract);

module.exports = router;
