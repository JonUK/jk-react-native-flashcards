import { StyleSheet } from 'react-native';
import { textColor } from './colors';
import { robotoMedium } from './fonts';

const globalStyles = StyleSheet.create({
  title: {
    marginTop: 16,
    fontSize: 40,
    fontFamily: robotoMedium,
    color: textColor
  }
});

export default globalStyles;
