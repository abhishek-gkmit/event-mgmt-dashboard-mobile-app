import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  dropdownBoxContainer: {
    flexDirection: 'column',
    backgroundColor: colors.background2,
    gap: 10,
    justifyContent: 'center',
    height: '100%',
  },
  dropdownShowButton: {
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 0, 0)',
  },
  dropdownShowButtonError: {
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 0, 1)',
  },
  dropdownBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    gap: 10,
    marginHorizontal: 10,
  },
  dropdownHeading: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.primary,
  },
  dropdownLabel: {
    color: 'black',
    marginBottom: 5,
  },
  dropdownBoxName: {
    color: 'gray',
    fontSize: 14,
  },
  dropdownBoxSelectValueName: {
    color: 'black',
    fontSize: 14,
  },
  dropdownItem: {
    backgroundColor: colors.background,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  dropdownItemSelected: {
    backgroundColor: colors.primary,
  },
  dropdownItemText: {
    width: '100%',
    color: 'black',
    fontSize: 18,
  },
  dropdownItemTextSelected: {
    color: 'white',
  },
  errorMsg: {
    color: colors.error,
    paddingHorizontal: 10,
    marginTop: 5,
    textAlign: 'right',
  },
});

export default styles;
