import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // allows you to configure React application so Redux store becomes availble to all components in application
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store = {store}> 
        {/* provider allows react store to become availble to all components */}
          <BrowserRouter>
            <div className = "App">
              <Main/> 
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
