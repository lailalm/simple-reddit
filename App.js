import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'config/store';
import Root from 'config/router';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
