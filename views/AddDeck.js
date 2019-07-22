import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import { bgBlue, textColor, white } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';

export default function AddDeck() {

  return (
    <View style={globalStyles.viewContainer}>
      <Text style={globalStyles.title}>Add Deck</Text>
      <Text style={styles.tagline}>Create a new decks of flashcards</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Deck</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  tagline: {
    color: textColor,
    fontSize: 16
  },
  label:{
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: robotoMedium
  },
  input: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
    fontFamily: robotoRegular
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: bgBlue
  },
  buttonText: {
    color: white,
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  }
});
