import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import {
  PRIMARY_COLOR,
} from 'utils/Colors';

import {
  upvoteTopic,
  downvoteTopic,
} from 'actions/TopicAction';

import CardPost from 'components/CardPost';
import ButtonCustom from 'components/ButtonCustom';

export class LandingScene extends Component {
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

  handleCreateTopicPress = () => {
    this.props.navigation.navigate('CreateTopic');
  };

  render() {
    const { list } = this.props;
    const sortedList = [...list.data];

    // sort by upvotes descending, if the same sort by downvotes increasing
    sortedList.sort((a, b) => {
      if (a.upvotes === b.upvotes) {
        return a.downvotes - b.downvotes;
      }
      return b.upvotes - a.upvotes;
    });

    return (
      <ScrollView>
        <ButtonCustom
          iconName="create"
          color={PRIMARY_COLOR}
          title="Create New Post"
          onPress={this.handleCreateTopicPress}
        />
        {
          sortedList.map(item => (
            <CardPost
              key={item.id}
              item={item}
              downvoteTopic={this.downvoteTopic}
              upvoteTopic={this.upvoteTopic}
            />
          ))
      }
      </ScrollView>
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
  list: PropTypes.object,
  upvoteTopic: PropTypes.func,
  downvoteTopic: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScene);
