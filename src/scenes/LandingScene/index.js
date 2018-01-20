import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';

import { upvoteTopic,
  downvoteTopic } from 'actions/TopicAction';

import CardPost from 'components/CardPost/';

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
    const sorted_list = [...list.data];

    // sort by upvotes descending, if the same sort by downvotes increasing
    sorted_list.sort((a, b) => {
      if (a.upvotes === b.upvotes) {
        return a.downvotes - b.downvotes;
      }
      return b.upvotes - a.upvotes;
    });

    return (
      <ScrollView>
        {
          sorted_list.map(item => (
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
  list: PropTypes.object.isRequired,
  upvoteTopic: PropTypes.func.isRequired,
  downvoteTopic: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScene);
