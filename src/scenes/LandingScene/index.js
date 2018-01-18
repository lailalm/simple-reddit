import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Header from 'components/Header/';

class LandingPageScene extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Landing Page + {this.props.list}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.listReducer
  }
}

export default connect(mapStateToProps)(LandingPageScene);
