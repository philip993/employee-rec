import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Router Dom
import { Link } from 'react-router-dom';
// Mateterial Ui
import { Button } from '@material-ui/core';

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div className={classes.header}>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Button>
        <Link to="/employees">Employee List</Link>
      </Button>
      <Button>
        <Link to="/add">Add Employee</Link>
      </Button>
      <Button>
        <Link to="/contact">Contact</Link>
      </Button>
    </div>
  );
};

export default Navbar;
