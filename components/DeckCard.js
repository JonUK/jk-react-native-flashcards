import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { bgGreen, white } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';
import NavigationService from '../navigation/navigationService';

class DeckCard extends Component {

  state = {
    scaleValue: new Animated.Value(1)
  };

  handleDeckPress = () => {
    const { deck } = this.props;
    const { scaleValue } = this.state;

    Animated.sequence([
      Animated.timing(scaleValue, { duration: 125, toValue: 0.96}),
      Animated.timing(scaleValue, { duration: 125 , toValue: 1})

    ]).start(() => {
      NavigationService.navigate('Deck', {
        deckId: deck.id
      });
    });
  };

  render() {

    const { deck, allowNavigation } = this.props;
    const { scaleValue } = this.state;
    const cardCount = deck.questions.length;

    return (

      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>

        <TouchableOpacity
          disabled={!allowNavigation}
          onPress={this.handleDeckPress}
          style={styles.container}>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.createdText}>Created: {deck.created}</Text>

            <View style={styles.countContainer}>
              <Text style={styles.countText}>{cardCount}</Text>

              {cardCount === 1
                ? <Text style={styles.countLabel}>flashcard</Text>
                : <Text style={styles.countLabel}>flashcards</Text>
              }
            </View>
          </View>

          {allowNavigation && (
            <FontAwesome
              name="chevron-right"
              style={styles.rightArrow}
              size={18}
            />
          )}

        </TouchableOpacity>
      </Animated.View>
    );
  }
}

DeckCard.propTypes = {
  deck: PropTypes.object.isRequired,
  allowNavigation: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    borderRadius: 10,
    backgroundColor: bgGreen
  },
  contentContainer: {
    flex: 1
  },
  title: {
    fontSize: 22,
    fontFamily: robotoMedium,
    color: white
  },
  createdText: {
    fontSize: 14,
    fontFamily: robotoRegular,
    color: white
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16
  },
  countText: {
    fontSize: 28,
    fontFamily: robotoMedium,
    color: white
  },
  countLabel: {
    marginLeft: 5,
    marginBottom: 2,
    fontSize: 22,
    fontFamily: robotoMedium,
    color: '#ffffffcc'
  },
  rightArrow: {
    color: white
  }
});

export default DeckCard;
