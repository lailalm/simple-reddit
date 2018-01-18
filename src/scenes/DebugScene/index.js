import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import DebugButton from 'components/DebugButton/';
import styles from './styles';

class DebugScene extends Component {
  constructor(props) {
    super(props);
    this.generatePost10 = this.generatePost.bind(this, 10);
    this.generatePost20 = this.generatePost.bind(this, 20);
  }

  generatePost(num) {
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

export default DebugScene;
