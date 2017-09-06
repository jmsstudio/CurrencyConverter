import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../pages/Home';
import CurrencyList from '../pages/CurrencyList';
import Options from '../pages/Options';
import Themes from '../pages/Themes';

const HomeStack = new StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  }
);

const CurrencyListStack = new StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  }
);
