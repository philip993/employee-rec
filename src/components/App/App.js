import React from 'react';

// Styles
import Styles from '../Style/Style';
import './App.css';
// React Router Dom
import { Switch, Route } from 'react-router-dom';
// React Components
import Employee from '../Employee/Employee';
import Homepage from '../Homepage/Homepage';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Details from '../Details/Details';
import AddEmployee from '../AddEmployee/AddEmployee';
import AddEmployeeSuccess from '../AddEmployee/AddEmployeeSuccess';
import AddEmployeeError from '../AddEmployee/AddEmployeeError';
import Shift from '../Shift/Shift';
import UpdateShift from '../UpdateShift/UpdateShift';
import UpdateShiftSuccess from '../UpdateShift/UpdateShiftSuccess';
import UpdateShiftError from '../UpdateShift/UpdateShiftError';
import Meals from '../Meals/Meals';
import Contract from '../Contract/Contract';
import AddContract from '../AddContract/AddContract';
import UpdateContract from '../UpdateContract/UpdateContract';
import UpdateContractSuccess from '../UpdateContract/UpdateContractSuccess';
import UpdateContractError from '../UpdateContract/UpdateContractError';
import AddContractSuccess from '../AddContract/AddContractSuccess';
import AddContractError from '../AddContract/AddContractError';
import SendMail from '../SendMail/SendMail';

const App = () => {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/employees" exact component={Employee} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/details" exact component={Details} />
        <Route path="/add" exact component={AddEmployee} />
        <Route path="/addsuccess" exact component={AddEmployeeSuccess} />
        <Route path="/addfail" exact component={AddEmployeeError} />
        <Route path="/shifts" exact component={Shift} />
        <Route path="/updateshift" exact component={UpdateShift} />
        <Route path="/updatesuccess" exact component={UpdateShiftSuccess} />
        <Route path="/updatefail" exact component={UpdateShiftError} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/contracts" exact component={Contract} />
        <Route path="/addcontract" exact component={AddContract} />
        <Route
          path="/addcontractsuccess"
          exact
          component={AddContractSuccess}
        />
        <Route path="/addcontractfail" exact component={AddContractError} />
        <Route path="/updatecontract" exact component={UpdateContract} />
        <Route
          path="/updcontractsuccess"
          exact
          component={UpdateContractSuccess}
        />
        <Route path="/updcontractfail" exact component={UpdateContractError} />
        <Route path="/sendmail" exact component={SendMail} />
      </Switch>
    </div>
  );
};

export default App;
