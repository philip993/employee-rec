import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import DateFnsUtils from '@date-io/moment';

ReactDOM.render(
  <Router>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </MuiPickersUtilsProvider>
  </Router>,

  document.getElementById('root')
);
