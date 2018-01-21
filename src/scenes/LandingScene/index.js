import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ScrollView, Text } from 'react-native';
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

  componentWillMount() {
    this.setState({
      page: 1,
      limit: 20,
    });
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
    const { page, limit } = this.state;
    const { list } = this.props;
    const sortedList = [...list.data];

    // sort by upvotes descending, if the same sort by downvotes increasing
    sortedList.sort((a, b) => {
      if (a.upvotes === b.upvotes) {
        return a.downvotes - b.downvotes;
      }
      return b.upvotes - a.upvotes;
    });

    const start = (page - 1) * limit;
    const end = page * limit;
    const totalPage = Math.ceil(sortedList.length / limit);
    const visibleList = sortedList.slice(start, end);

    return (
      <ScrollView>
        <ButtonCustom
          iconName="create"
          color={PRIMARY_COLOR}
          title="Create New Topic"
          onPress={this.handleCreateTopicPress}
        />
        <Text style={{ padding: 20, paddingBottom: 0 }}>
          Show page {page} from {totalPage} pages
        </Text>
        {
          visibleList.map(item => (
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
