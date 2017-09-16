import { takeEvery, select, call, put } from 'redux-saga/effects';

import constants from './constants';
import { getCurrencyRate } from '../services/RequestService';

const rootSaga = function*() {
  yield takeEvery(constants.GET_INITIAL_CONVERSION, fetchConversionRates);
  yield takeEvery(constants.SWAP_CURRENCY, fetchConversionRates);
  yield takeEvery(constants.CHANGE_BASE_CURRENCY, fetchConversionRates);
};

const fetchConversionRates = function*(action) {
  try {
    let currency = action.currency;
    if (currency == null) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getCurrencyRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: constants.CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: constants.CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: constants.CONVERSION_ERROR, error: e.message });
  }
};

export default rootSaga;
