import React, { Component } from 'react';
import { addCard } from '../actions';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import { textColor } from '../utils/colors';
import { robotoMedium } from '../utils/fonts';

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
    showQuestionRequiredError: false,
    showAnswerRequiredError: false
  };

  resetState = () => {
    this.setState({
      question: '',
      answer: '',
      showQuestionRequiredError: false,
      showAnswerRequiredError: false
    });
  };

  onSubmit = () => {

    const { addCard, goBack } = this.props;
    const { question, answer } = this.state;
    const questionNoWhitespace = question.replace(/\s/g, '');
    const answerNoWhitespace = answer.replace(/\s/g, '');

    let validationFailed = false;

    if (!questionNoWhitespace.length) {
      this.setState({ showQuestionRequiredError: true });
      validationFailed = true;
    } else {
      this.setState({ showQuestionRequiredError: false });
    }

    if (!answerNoWhitespace.length) {
      this.setState({ showAnswerRequiredError: true });
      validationFailed = true;
    } else {
      this.setState({ showAnswerRequiredError: false });
    }

    if (validationFailed) {
      return;
    }

    addCard(question, answer);
    goBack();

    this.resetState();
  };

  onQuestionChange = (value) => {
    this.setState({ question: value });
  };

  onAnswerChange = (value) => {
    this.setState({ answer: value });
  };

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={globalStyles.viewContainer}>

          <Text style={globalStyles.title}>Add Card</Text>
          <Text style={styles.tagline}>Add a new card to the deck of flashcards</Text>


          <Text style={styles.label}>Your question</Text>
          <TextInput value={this.state.question} onChangeText={this.onQuestionChange} style={globalStyles.textInput} />

          {this.state.showQuestionRequiredError && (
            <Text style={globalStyles.inputErrorText}>Please enter your question</Text>
          )}

          <Text style={styles.label}>The answer</Text>
          <TextInput value={this.state.answer} onChangeText={this.onAnswerChange} style={globalStyles.textInput} />

          {this.state.showAnswerRequiredError && (
            <Text style={globalStyles.inputErrorText}>Please enter the answer</Text>
          )}

          <TouchableOpacity onPress={this.onSubmit} style={globalStyles.btnPrimary}>
            <Text style={globalStyles.btnPrimaryText}>Add card</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

function mapDispatchToProps(dispatch, { navigation }) {

  return {
    addCard: (question, answer) => {
      const { deckId } = navigation.state.params;
      const questionDetails = {
        deckId,
        question,
        answer
      };

      dispatch(addCard(questionDetails));
    },
    goBack: () => navigation.goBack()
  };

}

export default connect(null, mapDispatchToProps)(AddCard);

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
  }
});
