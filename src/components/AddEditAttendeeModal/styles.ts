import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: 'column',
    backgroundColor: colors.background2,
    gap: 10,
    justifyContent: 'center',
    height: '100%',
  },

  heading: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },

  formContainer: {
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },

  btnTextStyle: {
    fontSize: 16,
  },

  btnStyle: {
    width: 100,
    paddingHorizontal: 10,
  },
});

export default styles;
