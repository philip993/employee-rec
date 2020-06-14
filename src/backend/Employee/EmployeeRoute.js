const express = require('express');
const router = express.Router();
const employeeCtrl = require('./EmployeeController');

router.get('/employees', employeeCtrl.getEmployees);
router.post('/employees/add', employeeCtrl.addEmployee);
router.get('/employees/:id', employeeCtrl.getOneEmployee);

module.exports = router;
