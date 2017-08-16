import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'BRL';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '316.81';
const TEMP_CONVERSION_RATE = 3.1681;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePressBaseCurrency() {
    console.log('base pressed');
  }

  handlePressQuoteCurrency() {
    console.log('quote pressed');
  }

  handleTextChange(text) {
    console.log('changed text ', text);
  }

  handleSwapCurrency() {
    console.log('pressed swap');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
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

        <ClearButton text="Reverse currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
