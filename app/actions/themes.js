import constants from '../config/constants';

function changePrimaryColor(color) {
  return {
    type: constants.CHANGE_PRIMARY_COLOR,
    color,
  };
}

export { changePrimaryColor };
