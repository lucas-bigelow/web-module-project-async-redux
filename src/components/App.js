import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import ActivityList from './ActivityList';
import reducer from '../../reducers';
import RandomButton from './RandomButton';

function App() {
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
  const store = createStore(reducer, composedEnhancer);

  

  return (
    <Provider store={store}>
      <div className="main">
        <ActivityList />
        <RandomButton />
      </div>
    </Provider>
  );
}

export default App;