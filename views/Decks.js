import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import globalStyles from '../utils/globalStyles';

import CustomStatusBar from '../components/CustomStatusBar';
import HomeHeader from '../components/HomeHeader';
import DeckCard from '../components/DeckCard';


class Decks extends Component {

  render() {

    const { decksArray } = this.props;

    return (
      <View style={{flex: 1}}>

        <CustomStatusBar />

        <ScrollView style={globalStyles.viewContainer}>
          <HomeHeader />

          <Text style={globalStyles.title}>Decks</Text>

          {decksArray.map(deck => (
              <DeckCard deck={deck} allowNavigation={true} key={deck.id} />
          ))}

        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(decks) {

  const decksArray = Object.keys(decks)
    .map(key => decks[key])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    decksArray
  };
}

export default connect(mapStateToProps)(Decks);
