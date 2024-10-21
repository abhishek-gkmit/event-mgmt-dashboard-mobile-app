import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 10,
  },

  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default styles;
