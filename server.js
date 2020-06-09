require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Routes
const employees = require('./src/backend/Employee/EmployeeRoute');
// Body-parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Database
const db = require('./src/backend/database/db');
// Connect to Db
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(err));
// Use routes
app.use('/', employees);

const port = process.env.PORT || 4000;
app.listen(port, () => `Listening on port ${port}`);
