import colors from '@src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dropdownBoxContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    gap: 10,
    justifyContent: 'center',
    height: '100%',
  },
  dropdownShowButton: {
    width: '100%',
    backgroundColor: '#f1f4ff',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 0, 0, 0)',
  },
  dropdownShowButtonError: {
    borderWidth: 2,
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
    backgroundColor: '#f1f4ff',
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
    color: '#f00',
    paddingHorizontal: 10,
    marginTop: 5,
    textAlign: 'right',
  },
});

export default styles;
