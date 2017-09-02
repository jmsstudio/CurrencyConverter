import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

//import Home from './pages/Home';
import CurrencyList from './pages/CurrencyList';

function index() {
  //return <Home />;
  return <CurrencyList />;
}

EStyleSheet.build({
  $primaryColor: '#4F6D7A',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
});

export default index;
