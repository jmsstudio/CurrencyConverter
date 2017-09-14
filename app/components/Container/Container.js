import React from 'react';
import Proptypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

function Container({ children, backgroundColor }) {
  const containerStyles = [styles.container];

  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
}

Container.proptypes = {
  children: Proptypes.any,
  backgroundColor: Proptypes.string,
};

export default Container;
