import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import homeReducer from './home/home';

const reducer = combineReducers({
  home: homeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
