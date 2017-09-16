function getCurrencyRate(currency) {
  /*eslint-disable no-undef*/
  return fetch(`http://api.fixer.io/latest?base=${currency}`);
  /*eslint-enable no-undef*/
}

export { getCurrencyRate };
