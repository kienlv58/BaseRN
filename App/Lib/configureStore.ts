// Node modules
import { applyMiddleware, createStore, Middleware, Store, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Redux & Sagas
import rootReducer, { RootStateDefault } from 'App/Redux';
import rootSaga from 'App/Sagas';

/**
 * Compose middlewares
 */
function bindMiddleware(middlewares: Middleware[]): StoreEnhancer {
  // eslint-disable-next-line
  //   if (__DEV__) {
  //   const { composeWithDevTools } = require('redux-devtools-extension');
  //   return composeWithDevTools(applyMiddleware(...middlewares));
  // }
  return applyMiddleware(...middlewares);
}

/**
 * Create store instance
 */
function createStoreWithConfig(): Store {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];
  // eslint-disable-next-line
  if (__DEV__) {
    const { createLogger } = require('redux-logger');
    middlewares.push(
      createLogger({
        collapsed: true,
        diff: true,
      }),
    );
  }

  const store = createStore(rootReducer, RootStateDefault, bindMiddleware(middlewares));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default createStoreWithConfig;
