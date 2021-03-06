import constants from '../config/constants';

function swapCurrency() {
  return {
    type: constants.SWAP_CURRENCY,
  };
}

function changeCurrencyAmont(amount) {
  return {
    type: constants.CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
  };
}

function changeBaseCurrency(currency) {
  return {
    type: constants.CHANGE_BASE_CURRENCY,
    currency,
  };
}

function changeQuoteCurrency(currency) {
  return {
    type: constants.CHANGE_QUOTE_CURRENCY,
    currency,
  };
}

function getInitialConversion() {
  return { type: constants.GET_INITIAL_CONVERSION };
}

export {
  getInitialConversion,
  swapCurrency,
  changeCurrencyAmont,
  changeBaseCurrency,
  changeQuoteCurrency,
};
