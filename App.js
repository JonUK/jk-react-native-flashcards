import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Constants } from 'expo';
import { Font } from 'expo';
import { white } from './utils/colors';
import { robotoMedium, robotoRegular } from './utils/fonts';

function CustomStatusBar({...props}) {
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent {...props} />
    </View>
  )
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
          <View style={styles.headerPanel}>

            <Image source={require('./images/cards.png')} />

            <View styles={styles.headerTextContainer}>
              <Text style={styles.headerText}>Mobile</Text>
              <Text style={styles.headerText}>Flashcards</Text>
              <Text style={styles.headerTagline}>The fun way to prepare for your test</Text>
            </View>

          </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    margin: 16,
    borderRadius: 10,
    backgroundColor: '#0090FF'
  },
  headerTextContainer: {
    flexDirection: 'column', // Swap from row back to the default of column
  },
  headerText: {
    textAlign: 'center',
    color: white,
    fontFamily: robotoMedium,
    fontSize: 24
  },
  headerTagline: {
    textAlign: 'center',
    marginTop: 10,
    color: white,
    fontFamily: robotoRegular,
    fontSize: 12
  }
});
