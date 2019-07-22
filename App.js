import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { robotoMedium, robotoRegular } from './utils/fonts';
import NavigationService from './services/navigationService';

import StackNavigation from './components/StackNavigation';

export default class App extends Component {

  state = {
    fontsLoaded: false // Flags if the Roboto fonts have yet loaded
  };

  async componentDidMount() {
    await Font.loadAsync({
      [robotoRegular]: require('./assets/fonts/Roboto-Regular.ttf'),
      [robotoMedium]: require('./assets/fonts/Roboto-Medium.ttf')
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    return (
      <View style={styles.appContainer}>

        {this.state.fontsLoaded && (
          <StackNavigation ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
