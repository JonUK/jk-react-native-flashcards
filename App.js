import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { receiveDecks } from './actions/index';
import * as Font from 'expo-font';
import { robotoMedium, robotoRegular } from './utils/fonts';
import NavigationService from './services/navigationService';
import { fetchAllDecks } from './utils/api';

import StackNavigation from './components/StackNavigation';

export default class App extends Component {

  store = createStore(reducer);

  state = {
    prerequisitesLoaded: false // Flags if the Roboto fonts and data have been loaded
  };

  async componentDidMount() {

    const loadDecksPromise = fetchAllDecks();

    const loadFontsPromise = Font.loadAsync({
      [robotoRegular]: require('./assets/fonts/Roboto-Regular.ttf'),
      [robotoMedium]: require('./assets/fonts/Roboto-Medium.ttf')
    });

    Promise.all([loadDecksPromise, loadFontsPromise])
      .then(values => {
        const decks = values[0];
        this.store.dispatch(receiveDecks(decks));

        this.setState({
          prerequisitesLoaded: true
        });
      });
  }

  // --------------------------------------------------------------------------------

  render() {

    return (
      <Provider store={this.store}>
        <View style={styles.appContainer}>

          {this.state.prerequisitesLoaded && (
            <StackNavigation ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
          )}

        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
