import { makeStyles } from '@material-ui/core';

const Styles = makeStyles((theme) => ({
  root: {
    width: '70%',
    height: '100%',
    margin: 'auto',
  },
  pageContainer: {
    minHeight: '100%',
  },
  // Header
  header: {
    width: '100%',
    height: '50px',
  },
  // ADD FORM
  addForm: {
    width: '540px',
    height: '540px',
    margin: 'auto',
    border: 'solid 1px #E9EBEE',
  },
  addFormGroup: {
    width: '80%',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    backgroundColor: '#fff',
    border: 'solid 1px #E9EBEE',
  },
  formLabel: {
    margin: 'auto',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: '#B9BBB6',
    width: '100%',
    paddingBottom: '5px',
    textAlign: 'center',
    color: '#fff',
  },
  formInput: {},
  formButton: {
    border: 'solid 1px #007fff',
    background: '#fff',
    color: '#007fff',
    fontWeight: 'bold',
    width: '50%',
    margin: 'auto',
    marginTop: '25px',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#007fff',
      color: '#fff',
      width: '50%',
      margin: 'auto',
      marginTop: '25px',
    },

    '&:active': {
      boxShadow: '0 0 5px #007fff',
    },
  },
  formTitle: {
    textAlign: 'center',
  },
  formFinishSub: {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '120px',
    fontWeight: 'normal',
  },
  formFinshButton: {
    color: '#fff',
    border: 'solid 1px #fff',
    background: '#66bb6a',
    '&:hover': {
      border: 'solid 1px #fff',
      background: '#66bb6a',
      boxShadow: '0 0 10px #66bb6a',
    },
  },
  formHelperText: {
    zIndex: '1',
    color: 'red',
    paddingLeft: '10px',
  },
  // Pdf Download
  downloadBtn: {
    border: 'solid 1px #007fff',
    background: '#fff',
    color: '#007fff',
    fontWeight: 'bold',
    width: '150px',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    float: 'right',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#007fff',
      color: '#fff',
      width: '150px',
      margin: 'auto',
      marginTop: '25px',
      marginBottom: '25px',
      float: 'right',
    },
  },
  // New schedule
  switchScheduleBtn: {
    border: 'solid 1px #007fff',
    background: '#fff',
    color: '#007fff',
    fontWeight: 'bold',
    width: '150px',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    float: 'left',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#007fff',
      color: '#fff',
      width: '150px',
      margin: 'auto',
      marginTop: '25px',
      marginBottom: '25px',
      float: 'left',
    },
  },
  // Table
  shiftRow: {
    border: 'solid 1px #BEBEBE',
  },
  tableHeader: {
    backgroundColor: '#4682b4',
    border: 'solid 1px #0E4D92',
  },
  // Search
  searchOutput: {
    float: 'right',
    margin: 'auto',
    width: '50%',
    backgroundColor: '#F5F5F5',
    border: 'solid 1px #B9BBB6',
    marginBottom: '20px',
    paddingLeft: '10px',
  },
  searchBar: {
    float: 'left',
    margin: 'auto',
    width: '40%',
    backgroundColor: '#F5F5F5',
    border: 'solid 1px #B9BBB6',
    marginBottom: '20px',
    paddingLeft: '10px',
  },
  searchDiv: {
    margin: 'auto',
    padding: '10px',
  },
  searchLabel: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: '#B9BBB6',
    width: '50%',
    paddingBottom: '5px',
    color: '#fff',
  },
}));

export default Styles;
