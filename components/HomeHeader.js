import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { white } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';

export default function HomeHeader() {

  return (
    <View style={styles.headerPanel}>

      <Image source={require('../images/cards.png')} />

      <View styles={styles.headerTextContainer}>
        <Text style={styles.headerText}>Mobile</Text>
        <Text style={styles.headerText}>Flashcards</Text>
        <Text style={styles.headerTagline}>The fun way to prepare for your test</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
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
