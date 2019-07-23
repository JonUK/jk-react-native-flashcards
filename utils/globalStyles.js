import { StyleSheet } from 'react-native';
import { bgBlue, textColor, textRed, white } from './colors';
import { robotoMedium, robotoRegular } from './fonts';

const globalStyles = StyleSheet.create({
  viewContainer: {
    marginLeft: 16,
    marginRight: 16
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    fontFamily: robotoMedium,
    color: textColor
  },
  btnPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: bgBlue
  },
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderColor: bgBlue,
    borderWidth: 1,
    borderRadius: 10
  },
  btnPrimaryText: {
    color: white,
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  btnSecondaryText: {
    color: bgBlue,
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  textInput: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
    fontFamily: robotoRegular
  },
  inputErrorText: {
    marginTop: 4,
    marginBottom: 4,
    color: textRed,
    fontSize: 14,
    fontFamily: robotoMedium,
  }
});

export default globalStyles;
