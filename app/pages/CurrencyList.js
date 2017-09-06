import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'BRL';

class CurrencyList extends React.Component {
  constructor(props) {
    super(props);

    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this._handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
};

export default CurrencyList;
