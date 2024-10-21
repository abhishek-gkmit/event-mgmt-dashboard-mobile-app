import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  bgContainer: {
    backgroundColor: colors.white,
  },

  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  screenHeading: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 5,
    backgroundColor: colors.fourth,
  },

  loading: {},
});

export default globalStyles;
