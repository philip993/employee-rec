import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Router Dom
import { Link } from 'react-router-dom';
// Mateterial Ui
import { Button, AppBar, Toolbar, Grid } from '@material-ui/core';

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid contrainer>
            <Grid item className={classes.headerGridCenter}>
              <Button className={classes.headerButtons}>
                <Link to="/" className={classes.headerLinks}>
                  HOME
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/employees" className={classes.headerLinks}>
                  EMPLOYEES
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/add" className={classes.headerLinks}>
                  ADD
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/contracts" className={classes.headerLinks}>
                  Contracts
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/addcontract" className={classes.headerLinks}>
                  Add Contract
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/shifts" className={classes.headerLinks}>
                  Shifts
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/updateshift" className={classes.headerLinks}>
                  Update Shift
                </Link>
              </Button>
              <Button className={classes.headerButtons}>
                <Link to="/meals" className={classes.headerLinks}>
                  Meals
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
