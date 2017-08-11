import React from 'react';
import Proptypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

function Container({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

Container.proptypes = {
  children: Proptypes.any,
};

export default Container;
