import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'BRL';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '316.81';
const TEMP_CONVERSION_RATE = 3.1681;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
    this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
    this.handleOptionsPress = this.handleOptionsPress.bind(this);
  }

  handlePressBaseCurrency() {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handlePressQuoteCurrency() {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }

  handleTextChange(text) {
    console.log('changed text ', text);
  }

  handleSwapCurrency() {
    console.log('pressed swap');
  }

  handleOptionsPress() {
    this.props.navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
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
};

export default Home;
