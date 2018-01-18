import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Simple Reddit</Text>
      </View>
    );
  }
}

export default Header;
