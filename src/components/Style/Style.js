import { makeStyles } from '@material-ui/core';

const Styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  pageContainer: {
    minHeight: '100%',
  },
  // Page
  pageSub: {
    backgroundColor: '#4682b4',
    color: '#fff',
    minHeight: '80px',
    paddingTop: '30px',
    paddingLeft: '30px',
  },
  pageSubheader: {
    backgroundColor: '#4682b4',
    color: '#fff',
    minHeight: '80px',
    paddingTop: '30px',
    paddingLeft: '30px',
  },

  // Form Elements
  formLayout: {
    width: '540px',
    height: '720px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
    backgroundColor: '#F5F5F5',
    marginTop: '50px',
  },
  partFormLayout: {
    width: '540px',
    height: '600px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
    backgroundColor: '#F5F5F5',
  },
  formGroup: {
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
  formTitle: {
    backgroundColor: '#4682b4',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    color: '#fff',
  },
  formHelperText: {
    background: '#F5F5F5',
    zIndex: '1',
    color: 'red',
    paddingLeft: '10px',
  },
  formBtnGroup: {
    width: '80%',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    backgroundColor: '#F5F5F5',
  },
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
  // Header
  header: {
    width: '100%',
    height: '60px',
    margin: 'auto',
  },
  headerLinks: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    wordWrap: 'normal',
  },
  headerButtons: {
    width: '140px',
    height: '40px',
    marginBottom: '10px',
    marginLeft: '5px',
    marginRight: '5px',
  },
  headerHomeButton: {
    width: '40px',
    height: '40px',
    border: '1px solid #000',
    marginBottom: '10px',
    float: 'left',
    marginLeft: '5px',
    marginRight: '10px',
  },
  headerIconHome: {
    color: '#fff',
    marginLeft: '0px',
    width: '40px',
    height: '40px',
  },
  headerMenu: {
    backgroundColor: '#F5F5F5',
  },

  // new header
  appBar: {
    position: 'relative',
    backgroundColor: '#ED7117',
  },
  toolbar: {
    minHeight: '75px',
  },
  headerGridCenter: {
    float: 'right',
    marginRight: '0%',
    margin: 'auto',
  },
  iconButton: {
    background: 'none',
    borderSizing: 'border-box',

    '&:hover': {
      border: '1px solid white',
    },
  },
  // FINISH
  finishTitle: {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '120px',
    fontWeight: 'normal',
  },
  // Stepper
  formStepper: {
    width: '70%',
    margin: 'auto',
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
  shiftsTables: {
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
    width: '80%',
  },
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
    width: '80%',
    margin: 'auto',
  },
  tablePagination: {
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
  },
  shiftBtnSpan: {
    width: '80%',
    margin: 'auto',
  },
  contractBtnSpan: {
    width: '50%',
    margin: 'auto',
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
  searchOutputSpan: {
    margin: 'auto',
    float: 'left',
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
    marginTop: '50px',
    marginBottom: '50px',
    width: '80%',
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

  menuItem: {
    textAlign: 'center',
    border: '1px solid #F5F5F5',
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
  mealsBtnSpan: {
    width: '50%',
    margin: 'auto',
  },
  // Contracts
  contractTable: {
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
    width: '80%',
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
    width: '740px',
    margin: 'auto',
    marginTop: '10px',
    marginBotto: '10px',
    height: '820px',
    border: 'solid 1px #BEBEBE',
  },
  contractCard: {
    width: '740px',
    margin: 'auto',
    marginTop: '10px',
    marginBotto: '10px',
    height: '820px',
    border: 'solid 1px #BEBEBE',
    backgroundColor: '#F5F5F5',
  },
  contractCompany: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    paddingBottom: '20px',
    paddingTop: '20px',
    width: '100%',
  },
  contractPersonal: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
  contractInfoLeft: {
    float: 'left',
    paddingTop: '30px',
    paddingBottom: '50px',
    margin: 'auto',
    width: '50%',
    backgroundColor: '#F5F5F5',
  },
  contractInfoRight: {
    paddingTop: '30px',
    paddingBottom: '50px',
    float: 'right',
    margin: 'auto',
    width: '50%',
    backgroundColor: '#F5F5F5',
  },
  contractDetails: {
    width: '100%',
    paddinTop: '60px',
    paddingBottom: '20px',
    backgroundColor: '#F5F5F5',
  },
  contractSignRight: {
    float: 'right',
    paddingTop: '120px',
    marginBottom: '40px',
    width: '49%',
    backgroundColor: '#F5F5F5',
  },
  contractSignLeft: {
    float: 'left',
    paddingTop: '120px',
    marginBottom: '40px',
    width: '51%',
    backgroundColor: '#F5F5F5',
  },
  contractSub: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#4682b4',
  },
  contractAvatar: {
    margin: 'auto',
  },
  contractDate: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    paddingTop: '35px',
    paddingBottom: '35px',
  },
  // homepage
  homeIcons: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    paddingTop: '5px',
    paddingBottom: '9px',
    paddingLeft: '25px',
    color: '#4682b4',
  },
  homeCardContent: {
    margin: 'auto',
  },
  homeCardSub: {
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4682b4',
    color: '#fff',
    height: '30px',
    margin: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  homeContainer: {
    margin: 'auto',
    alignItems: 'center',
    // textAlign: 'center',
  },
  homeContentContainer: {
    margin: 'auto',
    width: '450px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '50px',
    paddingBottom: '30px',
  },
  // error & success
  divContainer: {
    width: '80%',
    margin: 'auto',
  },
  divMessage: {
    minHeight: '60px',
  },
  divButtons: {
    border: 'solid 1px #007fff',
    background: '#fff',
    color: '#007fff',
    fontWeight: 'bold',
    width: '150px',
    margin: '25px',
    float: 'left',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#007fff',
      color: '#fff',
      width: '150px',
      margin: '25px',
      float: 'left',
    },
  },
}));

export default Styles;
