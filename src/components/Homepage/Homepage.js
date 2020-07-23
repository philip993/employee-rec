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
        <Typography variant="h2" className={classes.pageSub}>
          VIRTUAL COMPANY
        </Typography>
        <Typography variant="h6" className={classes.pageSub}>
          All information about employees.
        </Typography>
      </span>

      <div className={classes.homeContentContainer}>
        <Grid container spacing={5}>
          <Grid item>
            <Card id="employees">
              <CardActionArea onClick={() => history.push('/employees')}>
                <Typography className={classes.homeCardSub}>
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
        <Grid container spacing={5}>
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
        <Grid container spacing={5}>
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
    </div>
  );
};

export default Homepage;
