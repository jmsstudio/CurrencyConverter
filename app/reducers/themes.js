import constants from '../config/constants';

const initialState = {
  primaryColor: '#4f6d7a',
};

function reducer(state = initialState, action) {
  let newState = null;
  switch (action) {
    case constants.CHANGE_PRIMARY_COLOR:
      newState = { ...state, primaryColor: action.color };
      break;

    default:
      newState = state;
  }

  return newState;
}

export default reducer;
