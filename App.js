import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { robotoMedium, robotoRegular } from './utils/fonts';
import globalStyles from './utils/globalStyles';
import dummyData from './utils/data';

import DeckCard from './components/DeckCard';

import HomeHeader from './components/HomeHeader';

function CustomStatusBar({...props}) {
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent {...props} />
    </View>
  );
}

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
        <CustomStatusBar />

        {this.state.fontsLoaded && (
          <View>

            <HomeHeader />

            <Text style={globalStyles.title}>Decks</Text>

            {Object.keys(dummyData).map(key => {
              const deck = dummyData[key];

              return (
                <DeckCard deck={deck} key={key} />
              );
            })}

          </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: '#fff'
  }
});
