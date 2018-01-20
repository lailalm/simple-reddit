import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View } from 'react-native';

import { generateTopic } from 'actions/DebugAction';
import PropTypes from 'prop-types';

import ButtonCustom from 'components/ButtonCustom/';

import {
  WARNING_COLOR,
  SUCCESS_COLOR,
} from 'utils/Colors';

class DebugScene extends Component {
  constructor(props) {
    super(props);
    this.generatePost10 = this.generatePost.bind(this, 10);
    this.generatePost20 = this.generatePost.bind(this, 20);
  }

  generatePost(num) {
    this.props.generateTopic(num);
  }

  render() {
    return (
      <View>
        <ButtonCustom
          iconName="create"
          color={SUCCESS_COLOR}
          title="Add 10 Generated Topics"
          onPress={this.generatePost10}
        />
        <ButtonCustom
          iconName="create"
          color={SUCCESS_COLOR}
          title="Add 20 Generated Topics"
          onPress={this.generatePost20}
        />
        <ButtonCustom
          iconName="delete"
          color={WARNING_COLOR}
          title="Clear All Topic"
          onPress={this.generatePost20}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ generateTopic }, dispatch);
}

DebugScene.propTypes = {
  generateTopic: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DebugScene);
