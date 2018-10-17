// @flow

import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {replace, routerReducer, routerMiddleware} from 'react-router-redux';
import {createBrowserHistory, createMemoryHistory} from 'history';

import rootSaga from './rootSaga';

import appConfigReducer from './general/data/appConfig/appConfigReducer';
import productsReducer from './general/data/products/productsReducer';

import {isWeb, isEmbedded} from './general/constants/platform';

let shouldUseBrowserHistory = isWeb && !isEmbedded;

export let history = shouldUseBrowserHistory
  ? createBrowserHistory()
  : createMemoryHistory();

let rootReducer = combineReducers({
  router: routerReducer,
  appConfig: appConfigReducer,
  products: productsReducer,
});

export function createDataStore() {
  let sagaMiddleware = createSagaMiddleware();
  let routingMiddleware = routerMiddleware(history);
  let store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, routingMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  if (isEmbedded) {
    // Since an embedded iframe will use the memory router, we need
    // to set the initial route.
    let initialRoute = window.location.pathname;
    store.dispatch(replace(initialRoute));
  }
  return store;
}
