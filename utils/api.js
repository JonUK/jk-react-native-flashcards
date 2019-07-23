import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

/**
 * Get's all the decks of flashcards.
 * Using an async data approach with dummy data. Could mature to REST API later.
 */
export async function fetchAllDecks() {

  // Get all the decks from AsyncStorage. If there aren't any then use the dummy data
  // as the default set of decks.
  let decksJson = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

  if (decksJson !== null) {
    return JSON.parse(decksJson);
  } else {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  }
}

// --------------------------------------------------------------------------------


const dummyData = {
  React: {
    id: 'React',
    title: 'React',
    created: '2019-07-21',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    id: 'JavaScript',
    title: 'JavaScript',
    created: '2019-07-20',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Redux: {
    id: 'Redux',
    title: 'Redux',
    created: '2019-07-19',
    questions: []
  },
  Knockout: {
    id: 'Knockout',
    title: 'Knockout',
    created: '2019-07-18',
    questions: []
  }
};

