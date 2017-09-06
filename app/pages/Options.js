import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS == 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.handleThemesPress = this.handleThemesPress.bind(this);
    this.handleApiPress = this.handleApiPress.bind(this);
  }

  handleThemesPress() {
    this.props.navigation.navigate('Themes');
  }

  handleApiPress() {
    Linking.openURL('htasdfasdtp://fixer.io').catch(() =>
      this.props.alertWithType('error', 'Error', 'Site cannot be opened')
    );
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Api (fixer.io)"
          onPress={this.handleApiPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

Options.propTypes = {
  navigation: PropTypes.object,
  alertWithType: PropTypes.func,
};

export default connectAlert(Options);
