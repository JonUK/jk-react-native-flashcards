import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabNavigation from './TabNavigation';
import Decks from '../views/Decks';
import Deck from '../views/Deck';
import AddDeck from '../views/AddDeck';
import AddCard from '../views/AddCard';


const StackNavigator = createStackNavigator({
  Primary: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Decks: {
    screen: Decks
    // navigationOptions: {
    //   headerTintColor: white,
    //   headerStyle: {
    //     backgroundColor: purple
    //   }
    // }
  },
  Deck: {
    screen: Deck
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  }
});

const StackNavigation = createAppContainer(StackNavigator);

export default StackNavigation;


