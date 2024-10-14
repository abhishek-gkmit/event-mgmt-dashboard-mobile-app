import { StyleSheet } from 'react-native';

import colors from '@src/constants/colors';

const styles = StyleSheet.create({
  signupFormContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
  },

  signupForm: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },

  signupFormHeading: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
    marginVertical: 10,
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
    color: '#000',
    textAlign: 'center',
  },
});

export default styles;
