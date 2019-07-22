import React from 'react';
import { View, Text} from 'react-native';

export default function Deck(props) {

  const { navigation } = props;
  const deckId = navigation.getParam('deckId');
  //const otherParam = navigation.getParam('otherParam', 'some default value');


  return (
    <View>
      <Text>Deck { deckId }</Text>
    </View>
  );
}
