import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import data from '../utils/data';

import DeckCard from '../components/DeckCard';

export default function Deck(props) {

  const { navigation } = props;
  const deckId = navigation.getParam('deckId');
  const deck = data[deckId];

  return (
    <View style={[globalStyles.viewContainer, { marginTop: 8}]}>

      <DeckCard deck={deck} allowNavigation={false} />

      <Text style={globalStyles.title}>Deck</Text>

      <TouchableOpacity style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnSecondaryText}>Add Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.btnPrimary}>
        <Text style={globalStyles.btnPrimaryText}>Start Quiz</Text>
      </TouchableOpacity>

    </View>
  );
}
