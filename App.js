import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import configureStore from './src/config/store';
import {
  CreateTopicScene,
  DebugScene,
  LandingScene,
} from './src/scenes';

const store = configureStore();
const RouterWithRedux = connect()(Router);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="lists" tabs type={ActionConst.REPLACE}>
              <Scene key="home" title="Home" component={LandingScene} initial />
              <Scene key="add-topic" title="Add Topic" component={CreateTopicScene} direction="vertical" hideTabBar={false} />
              <Scene key="debug" title="Debug" component={DebugScene} />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
