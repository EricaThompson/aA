import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, 
    applyMiddleware(addLoggingToDispatch, secondMiddleware));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}


const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log(next(action));
  console.log(store.getState());
}

const secondMiddleware = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log(next(action));
  console.log(store.getState());
}

export default configureStore;
