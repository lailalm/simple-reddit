import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';

import {
  generateTopic,
  clearTopic,
} from 'actions/DebugAction';
import PropTypes from 'prop-types';

import ButtonCustom from 'components/ButtonCustom/';

import {
  WARNING_COLOR,
  SUCCESS_COLOR,
} from 'utils/Colors';

class DebugScene extends Component {
  constructor(props) {
    super(props);
    this.generateTopic10 = this.generateTopic.bind(this, 10);
    this.generateTopic20 = this.generateTopic.bind(this, 20);
    this.clearTopic = this.clearTopic.bind(this);
  }

  generateTopic(number) {
    this.props.generateTopic(number);
  }

  clearTopic() {
    this.props.clearTopic();
  }

  render() {
    return (
      <View>
        <ButtonCustom
          iconName="create"
          color={SUCCESS_COLOR}
          title="Add 10 Generated Topics"
          onPress={this.generateTopic10}
        />
        <ButtonCustom
          iconName="create"
          color={SUCCESS_COLOR}
          title="Add 20 Generated Topics"
          onPress={this.generateTopic20}
        />
        <ButtonCustom
          iconName="delete"
          color={WARNING_COLOR}
          title="Clear All Topic"
          onPress={this.clearTopic}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ generateTopic, clearTopic }, dispatch);
}

DebugScene.propTypes = {
  generateTopic: PropTypes.func,
  clearTopic: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(DebugScene);
