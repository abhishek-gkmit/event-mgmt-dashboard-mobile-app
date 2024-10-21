import { StyleSheet } from 'react-native';

import colors from '@src/constants/colors';

const styles = StyleSheet.create({
  signupFormContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    height: '100%',
  },

  headingContainer: {
    marginVertical: 20,
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
    justifyContent: 'center',
    marginBottom: 10,
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
