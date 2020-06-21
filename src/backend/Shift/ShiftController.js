const Shift = require('./ShiftModel');

exports.createShift = (req, res) => {
  let {} = req.body;

  Shift.create({})
    .then((shift) => {
      res.status(201).json({
        shift,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot create shift schedule.',
      });
    });
};
