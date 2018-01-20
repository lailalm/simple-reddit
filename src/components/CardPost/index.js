import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Divider, Icon, Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';
import {
  WARNING_COLOR,
  SUCCESS_COLOR,
} from 'utils/Colors';

class CardPost extends Component {
  constructor() {
    super();
    this.onDownvotePress = this.onDownvotePress.bind(this);
    this.onUpvotePress = this.onUpvotePress.bind(this);
  }

  onDownvotePress() {
    const { downvoteTopic, item } = this.props;
    downvoteTopic(item.id);
  }

  onUpvotePress() {
    const { upvoteTopic, item } = this.props;
    upvoteTopic(item.id);
  }

  render() {
    const { title, upvotes, downvotes } = this.props.item;

    return (
      <Card>
        <Text>{title}</Text>
        <View style={styles.rowContainer}>
          <View style={styles.voteContainer}>
            <Icon
              onPress={this.onUpvotePress}
              reverse
              name="like"
              type="foundation"
              size={20}
              color={SUCCESS_COLOR}
            />
            <Text>
              {upvotes} upvotes
            </Text>
          </View>
          <View style={styles.voteContainer}>
            <Icon
              onPress={this.onDownvotePress}
              reverse
              name="dislike"
              type="foundation"
              size={20}
              color={WARNING_COLOR}
            />
            <Text>
              {downvotes} downvotes
            </Text>
          </View>
        </View>

      </Card>
    );
  }
}

CardPost.propTypes = {
  item: PropTypes.object.isRequired,
  downvoteTopic: PropTypes.func.isRequired,
  upvoteTopic: PropTypes.func.isRequired,
};

export default CardPost;
