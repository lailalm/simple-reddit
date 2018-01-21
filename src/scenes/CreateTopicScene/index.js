import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import {
  createNewTopic,
} from 'actions/TopicAction';

import styles from './styles';


class CreateTopicScene extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <Button
          title="Post Topic"
          onPress={params.postNewTopic ? params.postNewTopic : () => null}
        />
      ),
    };
  };

  constructor() {
    super();
    this.state = { text: '' };
    this.postNewTopic = this.postNewTopic.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ postNewTopic: this.postNewTopic });
  }

  postNewTopic() {
    const topic = this.state.text;
    this.props.createNewTopic(topic);
    this.props.navigation.navigate('Landing');
  }

  render() {
    return (
      <View>
        <TextInput
          multiline
          style={styles.textArea}
          numberOfLines={10}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewTopic }, dispatch);
}

CreateTopicScene.propTypes = {
  navigation: PropTypes.object,
  createNewTopic: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreateTopicScene);
