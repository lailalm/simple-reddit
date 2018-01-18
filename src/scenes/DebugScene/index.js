import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View } from 'react-native';
import { Text } from 'react-native-elements';

import { generateTopic } from 'actions/DebugAction';

import DebugButton from 'components/DebugButton/';
import styles from './styles';

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
        <Text h5 style={styles.subTitle}>Debug the App here :D</Text>
        <DebugButton
          iconName="create"
          color="green"
          title="Generate 10 Posts"
          onPress={this.generatePost10}
        />
        <DebugButton
          iconName="create"
          color="green"
          title="Generate 20 Posts"
          onPress={this.generatePost20}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ generateTopic }, dispatch);
}

export default connect(null, mapDispatchToProps)(DebugScene);
