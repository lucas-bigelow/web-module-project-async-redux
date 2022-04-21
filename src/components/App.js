import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import ActivityList from './ActivityList';
import reducer from '../../reducers';

function App() {
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
  const store = createStore(reducer, composedEnhancer);

  return (
    <Provider store={store}>
      <ActivityList />
      <button type="button">Get a new random activity!</button>
    </Provider>
  );
}

export default App;