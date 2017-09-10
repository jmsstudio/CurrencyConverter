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

export { swapCurrency, changeCurrencyAmont };
