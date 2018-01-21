import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import {
  createNewTopic,
} from 'actions/TopicAction';

import styles from './styles';


export class CreateTopicScene extends Component {
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
    // basically this reset the stack in the router and go to Landing Tab
    const resetAction = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'Tabs', params: {} }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <TextInput
          multiline
          style={styles.textArea}
          maxLength={255}
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
