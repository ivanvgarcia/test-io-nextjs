import { Store, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducers } from '@redux/reducers/';
import { ReduxStore } from './types';
import { MakeStore } from 'next-redux-wrapper';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore: MakeStore = () => createStore(reducers, bindMiddleware([thunkMiddleware]));

export default initStore;
