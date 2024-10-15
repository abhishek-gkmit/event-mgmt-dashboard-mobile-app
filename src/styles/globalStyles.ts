import colors from '@src/constants/colors';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeAreaStyle: {
    backgroundColor: colors.white,
  },
});

export default globalStyles;
