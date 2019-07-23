import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import NavigationService from '../navigation/navigationService';

import DeckCard from '../components/DeckCard';

class Deck extends Component {

  state = {
    showNoQuestionsError: false
  };

  handleStartQuiz = () => {

    const { deck, questionsCount } = this.props;

    if (questionsCount === 0){
      this.setState({ showNoQuestionsError: true });
    } else {
      NavigationService.navigate('Quiz', {
        deckId: deck.id
      });
    }
  };

  handleAddCard = () => {

    const { deck } = this.props;

    this.setState({ showNoQuestionsError: false });

    NavigationService.navigate('AddCard', {
      deckId: deck.id
    });

  };

  render() {

    const { deck } = this.props;
    const { showNoQuestionsError } = this.state;

    return (
      <View style={[globalStyles.viewContainer, { marginTop: 8}]}>

        <DeckCard deck={deck} allowNavigation={false} />

        <Text style={globalStyles.title}>Deck</Text>

        <TouchableOpacity
          onPress={this.handleAddCard}
          style={globalStyles.btnSecondary}>
          <Text style={globalStyles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.handleStartQuiz}
          style={globalStyles.btnPrimary}>
          <Text style={globalStyles.btnPrimaryText}>Start Quiz</Text>
        </TouchableOpacity>

        {showNoQuestionsError && (
          <Text style={globalStyles.inputErrorText}>Add one or more cards before taking the quiz</Text>
        )}


      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    deck: decks[deckId],
    questionsCount: decks[deckId].questions.length
  };
}

export default connect(mapStateToProps)(Deck);
