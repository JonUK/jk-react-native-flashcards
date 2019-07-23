import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../utils/globalStyles';
import { robotoMedium, robotoRegular } from '../utils/fonts';
import { textColor, white } from '../utils/colors';

class Question extends Component {

  state = {
    showAnswerArea: false
  };

  handleShowAnswerPress = () => {
    this.setState({ showAnswerArea: true });
  };

  handleQuestionAnswered = (answeredCorrectly) => {
    const { onQuestionAnswered } = this.props;

    this.setState({ showAnswerArea: false });

    onQuestionAnswered(answeredCorrectly);
  };

  render() {

    const { questionObject } = this.props;

    return (
      <View>

        <Text style={globalStyles.title}>Question</Text>
        <Text style={styles.largeText}>{ questionObject.question }</Text>

        {!this.state.showAnswerArea && (
          <View>
            <TouchableOpacity
              onPress={this.handleShowAnswerPress}
              style={globalStyles.btnSecondary}>
              <Text style={globalStyles.btnSecondaryText}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        )}

        {this.state.showAnswerArea && (
          <View>
            <Text style={styles.heading}>Answer</Text>
            <Text style={styles.largeText}>{ questionObject.answer }</Text>

            <Text style={styles.heading}>How did you do?</Text>
            <Text style={styles.smallText}>You got the answer...</Text>

            <View style={styles.buttonsContainer}>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestionAnswered(true)}
                  style={styles.btnSuccess}>
                  <Text style={styles.btnSuccessText}>Correct</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestionAnswered(false)}
                  style={styles.btnError}>
                  <Text style={styles.btnErrorText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

      </View>
    );

  }
}

Question.propTypes = {
  questionObject: PropTypes.object.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  largeText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: robotoMedium,
    color: textColor
  },
  smallText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: robotoRegular,
    color: textColor
  },
  heading: {
    marginTop: 8,
    fontSize: 32,
    fontFamily: robotoMedium,
    color: textColor
  },
  btnSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#28A745'
  },
  btnError: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#DC3545'
  },
  btnSuccessText: {
    color: white,
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  btnErrorText: {
    color: white,
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  buttonsContainer: {
    flexDirection: 'row'
  }
});

export default Question;

