import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './pages/Home';

function index() {
  return <Home />;
}

EStyleSheet.build({
  $primaryColor: '#4F6D7A',
  $white: '#fff',
});

export default index;
