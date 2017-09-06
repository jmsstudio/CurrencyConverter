import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends React.Component {
  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropdownAlert
          translucent={true}
          ref={ref => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

AlertProvider.propTypes = {
  children: PropTypes.any,
};

AlertProvider.childContextTypes = {
  alertWithType: PropTypes.func,
  alert: PropTypes.func,
};

export default AlertProvider;
