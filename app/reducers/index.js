import { combineReducers } from 'redux';
import currencies from './currencies';
import themes from './themes';
import navigation from './navigation';

export default combineReducers({ currencies, themes, navigation });
