require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Routes
const employees = require('./src/backend/Employee/EmployeeRoute');
const shifts = require('./src/backend/Shift/ShiftRoute');
const contracts = require('./src/backend/Contract/ContractRoute');
// Body-parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Database
const db = require('./src/backend/database/db');
// Connect to Db
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(err));

// CORS policy
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Request-With, Authorization, Origin, Accept, Content-Type'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
// Use routes
app.use('/employees', employees);
app.use('/shifts', shifts);
app.use('/contracts', contracts);

const port = process.env.PORT || 4000;
app.listen(port, () => `Listening on port ${port}`);
