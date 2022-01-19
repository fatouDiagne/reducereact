import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './containers/store/index';
import './styles/style.css';

ReactDOM.render(
  <Provider store= {store}>
  <React.StrictMode>
     <App />
    </React.StrictMode>,
    </Provider>,
  document.getElementById('root')
);


