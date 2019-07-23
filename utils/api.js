import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

/**
 * Get's all the decks of flashcards.
 * Using an async data approach with dummy data. Could mature to REST API later.
 */
export async function fetchAllDecks() {

  // TEMP: Always use dummy data
  await AsyncStorage.clear();

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
  CapitalCities: {
    id: 'CapitalCities',
    title: 'Capital Cities',
    created: '2019-07-23',
    questions: [
      {
        question: 'What is the capital of China',
        answer: 'Beijing'
      },
      {
        question: 'What is the capital of Canada',
        answer: 'Ottawa'
      },
      {
        question: 'What is the capital of Poland',
        answer: 'Warsaw'
      },
      {
        question: 'What is the capital of Germany?',
        answer: 'Berlin'
      }
    ]
  },
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
  }
};

