import { StyleSheet } from 'react-native';
import { textColor } from './colors';
import { robotoMedium } from './fonts';

const globalStyles = StyleSheet.create({
  viewContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    fontFamily: robotoMedium,
    color: textColor
  }
});

export default globalStyles;
