import colors from '@src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settingsScreen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },

  filterContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 10,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  switchHeading: {
    fontSize: 14,
    color: colors.black,
  },

  resetBtn: {
    marginTop: 10,
    backgroundColor: colors.red,
  },

  resetBtnText: {
    fontSize: 18,
  },
});

export default styles;
