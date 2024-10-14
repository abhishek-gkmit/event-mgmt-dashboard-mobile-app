import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  loginFormContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
  },

  loginForm: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 50,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.primary,
  },

  welcome: {
    fontSize: 18,
    color: '#000',
  },

  button: {
    fontSize: 14,
  },

  signupOptionContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginTop: 5,
  },

  signupOptionIndicator: {
    color: colors.primary,
    fontWeight: '500',
  },

  signupQuestion: {
    color: '#000',
  },
});

export default styles;
