import React from 'react';

// Styles
import Styles from '../Style/Style';
import './App.css';
// React Router Dom
import { Switch, Route } from 'react-router-dom';
// React Components
import Employee from '../Employee/Employee';
import Homepage from '../Homepage/Homepage';

const App = () => {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/employees" exact component={Employee} />
      </Switch>
    </div>
  );
};

export default App;
