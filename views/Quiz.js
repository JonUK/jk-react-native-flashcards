import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../utils/globalStyles';

import CustomStatusBar from '../components/CustomStatusBar';
import QuizHeader from '../components/QuizHeader';
import Question from '../components/Question';

class Quiz extends Component {

  state = {
    currentQuestionIndex: 0,
    answeredCorrectly: 0,
    answeredIncorrectly: 0,
    quizComplete: 0
  };

  handleQuestionAnswered = (answeredCorrectly) => {

  };

  render() {

    const { questions } = this.props;
    const { currentQuestionIndex } = this.state;
    const currentQuestionObject = questions[currentQuestionIndex];

    return (
      <View style={{flex: 1}}>

        <CustomStatusBar />

        <View style={globalStyles.viewContainer}>

          <QuizHeader
            currentQuestionIndex={currentQuestionIndex}
            totalQuestionsCount={questions.length} />

          <Question questionObject={currentQuestionObject} />

        </View>

      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    questions: decks[deckId].questions
  };
}

export default connect(mapStateToProps)(Quiz);

