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
    width: '80%',
    color: '#fff',
    backgroundColor: '#4682b4',
  },
  avatar: {
    margin: 'auto',
  },
  // Meals
  mealTable: {
    width: '540px',
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
  },
  mealSub: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  mealCell: {
    textAlign: 'center',
    border: 'solid 1px #BEBEBE',
    fontWeight: 'bold',
  },
  mealCellTwo: {
    textAlign: 'center',
    border: 'solid 1px #BEBEBE',
  },
  mealCellFooter: {
    textAlign: 'center',
    border: 'solid 1px #BEBEBE',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  // Contracts
  contractTable: {
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
  },
  contractHeader: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  contractCell: {
    height: '25px',
    border: 'solid 1px #BEBEBE',
    fontWeight: 'bold',
  },
  contractCellTwo: {
    textAlign: 'center',
    border: 'solid 1px #BEBEBE',
    fontWeight: 'bold',
  },
  contractTerminateBtn: {
    color: '#D30000',
  },
  // success/error msg
  successContainer: {
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
  },
  // Update Shift
  mailForm: {
    width: '540px',
    height: '650px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
    backgroundColor: '#F5F5F5',
    marginTop: '50px',
  },
  mailFormGroup: {
    width: '80%',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    backgroundColor: '#fff',
    border: 'solid 1px #E9EBEE',
  },
  mailSub: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  mailLabel: {
    margin: 'auto',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: '#B9BBB6',
    width: '100%',
    paddingBottom: '5px',
    textAlign: 'center',
    color: '#fff',
  },
  mailBtnGroup: {
    width: '80%',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    backgroundColor: '#F5F5F5',
  },
  mailButton: {
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
  mailProgress: {
    // margin: '0 auto',
    right: '50%',
    left: '50%',
    // width: '50px',
    // height: '50px',
    position: 'absolute',
    margin: '-50px 0px 0px -50px',
    marginTop: '20%',
  },
  // Contract Page
  contractPage: {
    width: '80%',
    margin: 'auto',
    marginTop: '50px',
    marginBotto: '25px',
    height: '100vh',
    border: 'solid 1px #BEBEBE',
  },
  contractCompany: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    paddingBottom: '100px',
    paddingTop: '50px',
    width: '100%',
  },
  contractPersonal: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
  contractInfoLeft: {
    float: 'left',
    paddingTop: '60px',
    paddingBottom: '40px',
    margin: 'auto',
    width: '50%',
  },
  contractInfoRight: {
    paddingTop: '60px',
    paddingBottom: '40px',
    float: 'right',
    margin: 'auto',
    width: '50%',
  },
  contractSignLeft: {
    float: 'left',
    paddingTop: '130px',
    paddingBottom: '100px',
    width: '50%',
  },
  contractDetails: {
    width: '100%',
    paddinTop: '60px',
    paddingBottom: '40px',
  },
  contractSignRight: {
    float: 'right',
    paddingTop: '130px',
    paddingBottom: '100px',
    width: '50%',
  },
  contractSub: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#4682b4',
  },
  contractAvatar: {
    margin: 'auto',
  },
}));

export default Styles;
