import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from 'components/Header/';

class LandingScene extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Landing Page + {this.props.list}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.listReducer,
  };
}

LandingScene.propTypes = {
  list: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(LandingScene);
