import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import {checkMiddleware} from '../middleware/index';

const storeEnhancers = compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(checkMiddleware)),
);

export default store;
