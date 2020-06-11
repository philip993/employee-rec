const Employee = require('./EmployeeModel');

// Get All Employees
exports.getEmployees = (req, res) => {
  Employee.findAll()
    .then((employees) => {
      res.status(200).json({
        employees,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot load Employees!',
      });
    });
};

// Add New Employee
exports.addEmployee = (req, res) => {
  let { first_name, second_name, position } = req.body;
  Employee.create({
    first_name,
    second_name,
    position,
  })
    .then((employee) => {
      res.status(201).json({
        employee,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'Cannot Add New Employee!',
      });
    });
};

// Get One Employee
exports.getOneEmployee = (req, res) => {
  Employee.findOne({ where: { id: req.params.id } })
    .then((employee) => {
      res.status(200).json({
        employee,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot load Employee',
      });
    });
};
