const Contract = require('./ContractModel');
const Employee = require('../Employee/EmployeeModel');

exports.getAllContract = (req, res) => {
  let date = Date.now();
  console.log(date);
  Contract.findAll({
    include: [
      {
        model: Employee,
        as: 'employees',
      },
    ],
  })
    .then((contracts) => {
      res.status(200).json({
        contracts,
        currentDate: date,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error! Cannot load Contracts.',
      });
    });
};

exports.getOneContract = (req, res) => {
  Contract.findOne({
    where: {
      contractId: req.params.id,
    },
    include: [
      {
        model: Employee,
        as: 'employees',
      },
    ],
  })
    .then((oneContract) => {
      res.status(200).json({
        oneContract,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot load Contract.',
      });
    });
};

exports.addContract = (req, res) => {
  let {
    contractId,
    contractStart,
    contractEnd,
    activeContract,
    daysLeft,
  } = req.body;
  Contract.create({
    contractId,
    contractStart,
    contractEnd,
    activeContract,
    daysLeft,
  })
    .then((contract) => {
      res.status(201).json({
        contract,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot add new Contract.',
      });
    });
};

exports.updateContract = (req, res) => {
  let { contractId, contractStart, contractEnd, activeContract } = req.body;

  Contract.update(
    {
      contractStart,
      contractEnd,
      activeContract,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedContract) => {
      res.status(201).json({
        updatedContract,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot Update Contract.',
      });
    });
};
