import React, { Component } from 'react';
import { Button } from 'react-native-elements'

class DebugButton extends Component {
  render() {
    let { iconName, title, color, onPress } = this.props;

    return (
      <Button
        raised
        rounded
        onPress={onPress}
        icon={{name: iconName}}
        buttonStyle={{
          backgroundColor: color,
          marginTop: 20,
        }}
        textStyle={{textAlign: 'center'}}
        title={title}
      />
    )
  }
}

export default DebugButton;
