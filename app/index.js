import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

function index() {
  return (
    <Provider store={store}>
      <AlertProvider>
        <Navigator />
      </AlertProvider>
    </Provider>
  );
}

EStyleSheet.build({
  $primaryColor: '#4f6d7a',
  $primaryOrange: '#d57a66',
  $primaryPurple: '#9e768f',
  $primaryGreen: '#00bd9d',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
});

export default index;
