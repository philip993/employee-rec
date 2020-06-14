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
      </Switch>
    </div>
  );
};

export default App;
