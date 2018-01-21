import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import ConnectedCreateTopicScene from 'scenes/CreateTopicScene';
import ConnectedDebugScene from 'scenes/DebugScene';
import ConnectedLandingScene from 'scenes/LandingScene';

const ListTabBarIcon = ({ tintColor }) => (
  <Icon name="list" size={35} color={tintColor} />
);

ListTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const CodeTabBarIcon = ({ tintColor }) => (
  <Icon name="code" size={35} color={tintColor} />
);

CodeTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const Tabs = TabNavigator(
  {
    Landing: {
      screen: ConnectedLandingScene,
      navigationOptions: {
        title: 'Landing',
        tabBarLabel: 'Landing',
        tabBarIcon: ListTabBarIcon,
      },
    },
    Debug: {
      screen: ConnectedDebugScene,
      navigationOptions: {
        title: 'Debug',
        tabBarLabel: 'Debug',
        tabBarIcon: CodeTabBarIcon,
      },
    },
  },
  {
    animationEnabled: true,
  },
);

const CreateTopic = StackNavigator(
  {
    CreateTopic: {
      screen: ConnectedCreateTopicScene,
    },
  },
  {
    headerMode: 'none',
  },
);

const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs,
    },
    CreateTopic: {
      screen: CreateTopic,
    },
  },
  {
    mode: 'modal',
  },
);

export {
  Root as default,
};
