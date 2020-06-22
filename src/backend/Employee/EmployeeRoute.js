const express = require('express');
const router = express.Router();
const employeeCtrl = require('./EmployeeController');

router.get('/', employeeCtrl.getEmployees);
router.post('/add', employeeCtrl.addEmployee);
router.get('/:id', employeeCtrl.getOneEmployee);

module.exports = router;
