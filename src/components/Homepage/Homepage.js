import React from 'react';

// Styles
import Styles from '../Style/Style';
import './Homepage.scss';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material Ui
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const Homepage = () => {
  const classes = Styles();

  const history = useHistory();

  return (
    <div className={classes.pageContainer}>
      <span>
        <Typography variant="h2" className={classes.pageTitle}>
          VIRTUAL COMPANY
        </Typography>
        <Typography variant="h6" className={classes.pageSubtitle}>
          All information about employees.
        </Typography>
      </span>

      <div className={classes.homeContentContainer}>
        <Grid container spacing={5}>
          <Grid item>
            <Card id="employees">
              <CardActionArea onClick={() => history.push('/employees')}>
                <Typography className={classes.homeCardTitle}>
                  EMPLOYEES
                </Typography>
                <CardContent>
                  <GroupIcon className={classes.homeIcons} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card id="add">
              <CardActionArea onClick={() => history.push('/add')}>
                <Typography className={classes.homeCardTitle}>
                  NEW EMPLOYEE
                </Typography>
                <CardContent>
                  <PersonAddIcon className={classes.homeIcons} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item>
            <Card id="contracts">
              <CardActionArea onClick={() => history.push('/contracts')}>
                <Typography className={classes.homeCardTitle}>
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
                <Typography className={classes.homeCardTitle}>
                  NEW CONTRACT
                </Typography>
                <CardContent>
                  <NoteAddIcon className={classes.homeIcons} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item>
            <Card id="shifts">
              <CardActionArea onClick={() => history.push('/shifts')}>
                <Typography className={classes.homeCardTitle}>
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
                <Typography className={classes.homeCardTitle}>
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
    </div>
  );
};

export default Homepage;
