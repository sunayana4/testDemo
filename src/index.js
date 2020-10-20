import React from 'react';
import ReactDOM from 'react-dom';
import {  createStore,applyMiddleware } from 'redux';
// Required for Redux store setup
import { Provider } from 'react-redux';
import configureStore from './store';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reducer from './reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
const sagaMiddleware = createSagaMiddleware()
createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

ReactDOM.render(
  <Provider store={configureStore()}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
