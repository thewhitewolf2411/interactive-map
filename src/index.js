//import React from 'react';
import React from '../node_modules/react';
//import ReactDOM from 'react-dom';
import ReactDOM from '../node_modules/react-dom';
import App from './Components/App';

import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />,document.getElementById('mapcontainer'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
