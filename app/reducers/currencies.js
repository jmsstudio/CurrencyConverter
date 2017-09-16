import constants from '../config/constants';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'BRL',
  amount: 100,
  conversions: {},
};

function reducer(state = initialState, action) {
  let newState = null;
  switch (action.type) {
    case constants.GET_INITIAL_CONVERSION:
      newState = {
        ...state,
        conversions: setConversion(state, { currency: state.baseCurrency }),
      };
      break;

    case constants.CONVERSION_RESULT:
      newState = {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
      break;

    case constants.CONVERSION_ERROR:
      newState = {
        ...state,
        error: action.error,
      };
      break;

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

    case constants.CHANGE_BASE_CURRENCY:
      newState = {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversion(state, action),
      };
      break;

    case constants.CHANGE_QUOTE_CURRENCY:
      newState = {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversion(state, action),
      };
      break;

    default:
      newState = state;
  }
  return newState;
}

function setConversion(state, action) {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
}

export default reducer;
