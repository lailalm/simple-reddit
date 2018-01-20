import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import {
  CreateTopicScene,
  DebugScene,
  LandingScene,
} from 'scenes';

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
      screen: LandingScene,
      navigationOptions: {
        title: 'Landing',
        tabBarLabel: 'Landing',
        tabBarIcon: ListTabBarIcon,
      },
    },
    Debug: {
      screen: DebugScene,
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
      screen: CreateTopicScene,
      navigationOptions: {
      },
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
