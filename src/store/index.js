import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { createInjectSagasStore, sagaMiddleware } from 'redux-sagas-injector';
import createReducer from './reducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const configureStore = (preloadedState = {}) => {

  return createInjectSagasStore(
    { rootSaga },
    createReducer(history), // root reducer with router state
      preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
};
const store = configureStore();


export default store;

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
