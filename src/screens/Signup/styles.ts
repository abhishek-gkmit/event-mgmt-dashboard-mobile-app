import { StyleSheet } from 'react-native';

import colors from '@src/constants/colors';

const styles = StyleSheet.create({
  signupFormContainer: {
    backgroundColor: colors.white,
    height: '100%',
  },

  signupForm: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  headingContainer: {
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.primary,
  },

  loginOptionContainer: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },

  loginOptionIndicator: {
    color: colors.primary,
    fontWeight: '500',
    textAlign: 'center',
  },

  loginQuestion: {
    color: colors.black,
    textAlign: 'center',
  },

  btnStyle: {
    marginTop: 15,
  },

  btnTextStyle: {
    fontSize: 18,
  },
});

export default styles;
