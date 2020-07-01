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
    height: '600px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
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
    marginBottom: '25px',

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
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    color: '#fff',
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
  formSub: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  formBtnGroup: {
    width: '80%',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
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
  tableLayout: {
    border: 'solid 1px #4682b4',
    marginTop: '50px',
  },
  // Search
  searchOutput: {
    float: 'right',
    margin: 'auto',
    width: '50%',
    backgroundColor: '#F5F5F5',
    border: 'solid 1px #4682b4',
    marginBottom: '20px',
    paddingLeft: '10px',
  },
  searchBar: {
    float: 'left',
    margin: 'auto',
    width: '40%',
    backgroundColor: '#F5F5F5',
    border: 'solid 1px #4682b4',
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
    backgroundColor: '#4682b4',
    width: '200px',
    padding: '10 0px',
    paddingRight: '10px',
    border: 'solid 1px #4682b4',
    color: '#fff',
  },
  searchOutputLabel: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: '#4682b4',
    width: '265px',
    padding: '10 0px',
    paddingRight: '10px',
    border: 'solid 1px #4682b4',
    color: '#fff',
  },
  searchError: {
    float: 'right',
    margin: 'auto',
    width: '50%',
    paddingLeft: '10px',
    marginBottom: '20px',
    height: '90px',
  },
  // Update Shift
  updateForm: {
    width: '540px',
    height: '620px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
    backgroundColor: '#F5F5F5',
    marginTop: '50px',
  },
  updateHelperText: {
    background: '#F5F5F5',
    zIndex: '1',
    color: 'red',
    paddingLeft: '10px',
  },
  updateSub: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  updateBtnGroup: {
    width: '80%',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    backgroundColor: '#F5F5F5',
  },
  // List
  listSub: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  // Details
  cardDetails: {
    width: '70%',
    margin: 'auto',
    marginTop: '50px',
    marginBotto: '25px',
    border: 'solid 1px #BEBEBE',
  },
  cardPersonal: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
  cardSub: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#4682b4',
  },
  avatar: {
    margin: 'auto',
  },
}));

export default Styles;
