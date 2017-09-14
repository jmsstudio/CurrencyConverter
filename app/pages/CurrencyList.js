import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import currencies from '../data/currencies';
import constants from '../config/constants';

class CurrencyList extends React.Component {
  constructor(props) {
    super(props);

    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress(currency) {
    const { type } = this.props.navigation.state.params;

    switch (type) {
      case constants.currencyType.BASE_CURRENCY:
        this.props.dispatch(changeBaseCurrency(currency));
        break;
      case constants.currencyType.QUOTE_CURRENCY:
        this.props.dispatch(changeQuoteCurrency(currency));
        break;
    }

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
              selected={item === this.props.selectedCurrency}
              onPress={() => this._handlePress(item)}
              iconBackground={this.props.primaryColor}
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
  dispatch: PropTypes.func,
  primaryColor: PropTypes.string,
};

function mapStateToProps(state, props) {
  const isBaseCurrency =
    props.navigation.state.params.type == constants.currencyType.BASE_CURRENCY;

  return {
    selectedCurrency: isBaseCurrency
      ? state.currencies.baseCurrency
      : state.currencies.quoteCurrency,
    primaryColor: state.themes.primaryColor,
  };
}

export default connect(mapStateToProps)(CurrencyList);
