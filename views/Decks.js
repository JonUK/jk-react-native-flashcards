import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import globalStyles from '../utils/globalStyles';
import dummyData from '../utils/data';

import CustomStatusBar from '../components/CustomStatusBar';
import HomeHeader from '../components/HomeHeader';
import DeckCard from '../components/DeckCard';


export default function Decks() {

  return (
    <View style={{flex: 1}}>

      <CustomStatusBar />

      <ScrollView style={globalStyles.viewContainer}>
        <HomeHeader />

        <Text style={globalStyles.title}>Decks</Text>

        {Object.keys(dummyData).map(key => {
          const deck = dummyData[key];

          return (
            <DeckCard deck={deck} allowNavigation={true} key={key} />
          );
        })}

      </ScrollView>
    </View>
  );
}
