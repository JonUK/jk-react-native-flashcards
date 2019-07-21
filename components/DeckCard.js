import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { bgGreen, white } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';

export default function DeckCard(props) {

  const { deck } = props;
  const cardCount = deck.questions.length;

  return (

    <View style={styles.container}>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{ deck.title }</Text>
        <Text style={styles.createdText}>Created: { deck.created }</Text>

        <View style={styles.countContainer}>
          <Text style={styles.countText}>{ cardCount }</Text>

          {cardCount === 1
            ? <Text style={styles.countLabel}>card</Text>
            : <Text style={styles.countLabel}>cards</Text>
          }
        </View>
      </View>

      <FontAwesome
        name="chevron-right"
        style={styles.rightArrow}
        size={18}
      />

    </View>

  );
}

DeckCard.propTypes = {
  deck: PropTypes.object.isRequired
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
    color: white,
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
