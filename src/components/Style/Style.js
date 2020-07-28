import { makeStyles } from '@material-ui/core';

const Styles = makeStyles((theme) => ({
  // GROUP CHANGES
  root: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  pageContainer: {
    minHeight: '100%',
  },
  // Page
  pageTitle: {
    backgroundColor: '#4682b4',
    color: '#fff',
    minHeight: '80px',
    paddingTop: '30px',
    paddingLeft: '30px',
  },
  pageSubtitle: {
    backgroundColor: '#4682b4',
    color: '#fff',
    minHeight: '80px',
    paddingTop: '30px',
    paddingLeft: '30px',
  },
  // Form Elements
  formLayout: {
    width: '540px',
    height: '740px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
    backgroundColor: '#F5F5F5',
    marginTop: '50px',
    marginBottom: '50px',
  },
  partFormLayout: {
    width: '540px',
    height: '600px',
    margin: 'auto',
    border: 'solid 1px #4682b4',
    backgroundColor: '#F5F5F5',
    marginTop: '50px',
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
    paddingTop: '5px',
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
  // Table
  tableLayout: {
    border: 'solid 1px #4682b4',
    marginTop: '50px',
    marginBottom: '50px',
    width: '80%',
    margin: 'auto',
  },
  tableLayoutSmall: {
    width: '540px',
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
  },
  tableCell: {
    border: 'solid 1px #BEBEBE',
  },
  tableCellMiddle: {
    textAlign: 'center',
    border: 'solid 1px #BEBEBE',
    fontWeight: 'bold',
  },
  tableCellBold: {
    textAlign: 'center',
    border: 'solid 1px #BEBEBE',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  tableHeader: {
    backgroundColor: '#4682b4',
    border: 'solid 1px #0E4D92',
    color: '#fff',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '1.2rem',
  },
  tablePagination: {
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
  },
  tableIcon: {
    color: '#fff',
  },
  // Buttons
  buttonLeft: {
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
  buttonRight: {
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
  buttonSmallSpan: {
    width: '30%',
    margin: 'auto',
  },
  buttonNormalSpan: {
    width: '80%',
    margin: 'auto',
  },
  // error & success
  divContainer: {
    width: '80%',
    margin: 'auto',
  },
  divMessage: {
    minHeight: '60px',
  },
  // SPECIFIC CHANGES
  // Header
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
  // Homepage
  homeContentContainer: {
    margin: 'auto',
    width: '450px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '50px',
    paddingBottom: '30px',
  },
  homeIcons: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    paddingTop: '5px',
    paddingBottom: '9px',
    paddingLeft: '25px',
    color: '#4682b4',
  },
  homeCardTitle: {
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
  // Details
  cardLayout: {
    width: '60%',
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
    border: 'solid 1px #BEBEBE',
  },
  cardPersonal: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
  cardTitle: {
    width: '80%',
    color: '#fff',
    backgroundColor: '#4682b4',
  },
  avatar: {
    margin: 'auto',
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
  // Finish
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
  // Spinner
  spinner: {
    right: '50%',
    left: '50%',
    position: 'absolute',
    margin: '-50px 0px 0px -50px',
    marginTop: '20%',
  },
  // Terminate Buton
  terminateButton: {
    color: '#D30000',
  },
  // Menu Item
  menuItem: {
    textAlign: 'center',
    border: '1px solid #F5F5F5',
  },
}));

export default Styles;
