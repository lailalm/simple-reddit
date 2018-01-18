import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import DebugButton from 'components/DebugButton/';
import styles from './styles';

class DebugScene extends Component {
  generatePost (num) {
    console.log(num)
  }

  render() {
    return (
      <View>
        <Text h5 style={styles.subTitle}>Debug the App here :D</Text>
        <DebugButton
          iconName='create'
          color='green'
          title='Generate 10 Posts'
          onPress={this.generatePost.bind(this, 10)}
        />
        <DebugButton
          iconName='create'
          color='green'
          title='Generate 20 Posts'
          onPress={this.generatePost.bind(this, 20)}
        />
      </View>
    )
  }
}

export default DebugScene;
