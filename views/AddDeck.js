import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import { textColor } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';
import CustomStatusBar from '../components/CustomStatusBar';

export default function AddDeck() {

  return (
    <View style={{flex: 1}}>

      <CustomStatusBar />

      <View style={globalStyles.viewContainer}>
        <Text style={globalStyles.title}>Add Deck</Text>
        <Text style={styles.tagline}>Create a new deck of flashcards</Text>

        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity style={globalStyles.btnPrimary}>
          <Text style={globalStyles.btnPrimaryText}>Create Deck</Text>
        </TouchableOpacity>

      </View>

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
  }
});
