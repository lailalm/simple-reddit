import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from 'reducers/';

export default function configureStore() {
  const enhancer = compose(applyMiddleware(thunk, logger));
  const store = createStore(reducers, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = reducers.default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
