import constants from '../config/constants';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'BRL',
  amount: 100,
};

function reducer(state = initialState, action) {
  let newState = null;
  switch (action.type) {
    case constants.CHANGE_CURRENCY_AMOUNT:
      newState = { ...state, amount: action.amount || 0 };
      break;
    case constants.SWAP_CURRENCY:
      newState = {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
      break;
    default:
      newState = state;
  }
  return newState;
}

export default reducer;
