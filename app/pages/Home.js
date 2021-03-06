import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';
import {
  changeCurrencyAmont,
  swapCurrency,
  getInitialConversion,
} from '../actions/currencies';
import constants from '../config/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
    this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
    this.handleOptionsPress = this.handleOptionsPress.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSwapCurrency = this.handleSwapCurrency.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError != this.props.currencyError
    ) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  handlePressBaseCurrency() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: constants.currencyType.BASE_CURRENCY,
    });
  }

  handlePressQuoteCurrency() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: constants.currencyType.QUOTE_CURRENCY,
    });
  }

  handleTextChange(amountText) {
    this.props.dispatch(changeCurrencyAmont(amountText));
  }

  handleSwapCurrency() {
    this.props.dispatch(swapCurrency());
  }

  handleOptionsPress() {
    this.props.navigation.navigate('Options');
  }

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.conversionDate}
            conversionRate={this.props.conversionRate}
          />

          <ClearButton
            text="Reverse currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  isFetching: PropTypes.bool,
  conversionDate: PropTypes.object,
  primaryColor: PropTypes.string,
  alertWithType: PropTypes.func,
  currencyError: PropTypes.string,
};

function mapStateToProps(state) {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;

  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const conversionRate = rates[quoteCurrency] || 0;
  const conversionDate = conversionSelector.date
    ? new Date(conversionSelector.date)
    : new Date();

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate,
    isFetching: conversionSelector.isFetching,
    conversionDate,
    primaryColor: state.themes.primaryColor,
    currencyError: state.currencies.error,
  };
}

export default connect(mapStateToProps)(connectAlert(Home));
