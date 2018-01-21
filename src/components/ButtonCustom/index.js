import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

class ButtonCustom extends Component {
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

ButtonCustom.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default ButtonCustom;
