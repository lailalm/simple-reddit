import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { upvoteTopic,
  downvoteTopic } from 'actions/TopicAction';

class LandingScene extends Component {
  constructor() {
    super();
    this.upvoteTopic = this.upvoteTopic.bind(this);
    this.downvoteTopic = this.downvoteTopic.bind(this);
  }

  upvoteTopic(id) {
    this.props.upvoteTopic(id);
  }

  downvoteTopic(id) {
    this.props.downvoteTopic(id);
  }

  render() {
    const { list } = this.props;

    return (
      <View>
        {
          list.data.map(item => (
            <View key={item.id}>
              <Text onPress={() => this.upvoteTopic(item.id)}>
                upvote! {item.upvotes}
              </Text>
              <Text>
                {item.title}
              </Text>
              <Text onPress={() => this.downvoteTopic(item.id)}>
                downvotes! {item.downvotes}
              </Text>
            </View>
          ))
      }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.listReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ upvoteTopic, downvoteTopic }, dispatch);
}

LandingScene.propTypes = {
  list: PropTypes.object.isRequired,
  upvoteTopic: PropTypes.func.isRequired,
  downvoteTopic: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScene);
