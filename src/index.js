import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap is added first so if I add own customization CSS classes, that can override the default bootstrap classes if required 
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
