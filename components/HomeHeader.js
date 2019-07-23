import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { white, bgBlueLight } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';

export default function HomeHeader() {

  return (
    <View style={styles.headerPanel}>

      <Image source={require('../images/cards-happy.png')} />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Mobile</Text>
        <Text style={styles.headerText}>Flashcards</Text>
        <Text style={styles.headerTagline}>The fun way to prepare for tests</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 130,
    borderRadius: 10,
    backgroundColor: bgBlueLight
  },
  headerTextContainer: {
    flexDirection: 'column' // Swap from row back to the default of column
  },
  headerText: {
    textAlign: 'center',
    color: white,
    fontFamily: robotoMedium,
    fontSize: 32
  },
  headerTagline: {
    textAlign: 'center',
    marginTop: 10,
    color: white,
    fontFamily: robotoRegular,
    fontSize: 13
  }
});
