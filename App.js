import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import configureStore from './src/config/store';

const store = configureStore()
const RouterWithRedux = connect()(Router)

import {
  CreateTopicScene,
  DebugScene,
  LandingScene,
} from './src/scenes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root' hideNavBar={true}>
            <Scene key='lists' tabs={true} type={ActionConst.REPLACE}>
              <Scene key='home' title='Home' component={LandingScene} />
              <Scene key='add-topic' title='Add Topic' component={CreateTopicScene} direction='vertical' hideTabBar={false}/>
              <Scene key='debug' title='Debug' component={DebugScene} initial />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
