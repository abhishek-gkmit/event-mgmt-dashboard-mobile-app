import colors from '@src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f1f4ff',
    borderRadius: 10,
    padding: 10,
    gap: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
  },

  inputContainerFocus: {
    borderColor: colors.primary,
  },

  inputContainerError: {
    borderColor: 'red',
  },

  inputLabel: {
    color: 'black',
    marginBottom: 5,
  },

  textInput: {
    color: '#000',
    fontSize: 14,
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    textAlignVertical: 'center',
  },

  errorMsg: {
    color: '#f00',
    paddingHorizontal: 10,
    marginTop: 2,
    textAlign: 'right',
    fontSize: 12,
  },
});

export default styles;
