import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

class DebugButton extends Component {
  render() {
    const {
      iconName, title, color, onPress,
    } = this.props;

    return (
      <Button
        rounded
        onPress={onPress}
        icon={{ name: iconName }}
        buttonStyle={{
          backgroundColor: color,
          marginTop: 20,
        }}
        textStyle={{ textAlign: 'center' }}
        title={title}
      />
    );
  }
}

DebugButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DebugButton;
