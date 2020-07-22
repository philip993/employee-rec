import React from 'react';

// Styles
import Styles from '../Style/Style';
import './Homepage.scss';
// React Router Dom
import { Link, useHistory } from 'react-router-dom';
// Material Ui
import {
  Typography,
  Button,
  CardHeader,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const Homepage = () => {
  const classes = Styles();

  const history = useHistory();

  const redirectToEmployees = () => {
    history.push('/employees');
  };

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h1">Employee List</Typography>
      <Typography variant="h5">All information about employees.</Typography>
      <Grid container spacing={3}>
        <Grid item>
          <Card id="employees">
            <CardActionArea onClick={() => history.push('/employees')}>
              <Typography className={classes.homeCardSub}>EMPLOYEES</Typography>
              <CardContent>
                <GroupIcon className={classes.homeIcons} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card id="add">
            <CardActionArea onClick={() => history.push('/add')}>
              <Typography className={classes.homeCardSub}>
                NEW EMPLOYEE
              </Typography>
              <CardContent>
                <PersonAddIcon className={classes.homeIcons} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Card id="contracts">
            <CardActionArea onClick={() => history.push('/contracts')}>
              <Typography className={classes.homeCardSub}>
                CONTRACT LIST
              </Typography>
              <CardContent>
                <ViewListIcon className={classes.homeIcons} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card id="addcontract">
            <CardActionArea onClick={() => history.push('/addcontract')}>
              <Typography className={classes.homeCardSub}>
                NEW CONTRACT
              </Typography>
              <CardContent>
                <NoteAddIcon className={classes.homeIcons} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Card id="shifts">
            <CardActionArea onClick={() => history.push('/shifts')}>
              <Typography className={classes.homeCardSub}>
                SHIFT SCHEDULE
              </Typography>
              <CardContent>
                <FormatListNumberedIcon className={classes.homeIcons} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card id="updateshift">
            <CardActionArea onClick={() => history.push('/updateshift')}>
              <Typography className={classes.homeCardSub}>
                UPDATE SHIFT
              </Typography>
              <CardContent>
                <PlaylistAddIcon className={classes.homeIcons} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
