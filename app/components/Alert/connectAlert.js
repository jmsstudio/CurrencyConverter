import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

function connectAlert(WrappedComponent) {
  class ConnectedAlert extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          alertWithType={this.context.alertWithType}
          alert={this.context.alert}
        />
      );
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
}

export default connectAlert;
