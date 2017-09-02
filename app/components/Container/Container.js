import React from 'react';
import Proptypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

function Container({ children }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
}

Container.proptypes = {
  children: Proptypes.any,
};

export default Container;
