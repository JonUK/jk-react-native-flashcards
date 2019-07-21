import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../utils/globalStyles';
import dummyData from '../utils/data';

import HomeHeader from '../components/HomeHeader';
import DeckCard from '../components/DeckCard';

export default function Decks() {

  return (
    <View style={globalStyles.viewContainer}>
      <HomeHeader />

      <Text style={globalStyles.title}>Decks</Text>

      {Object.keys(dummyData).map(key => {
        const deck = dummyData[key];

        return (
          <DeckCard deck={deck} key={key} />
        );
      })}

    </View>
  );
}
