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
      </Switch>
    </div>
  );
};

export default App;
