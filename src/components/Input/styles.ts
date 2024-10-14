import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 10,
    gap: 10,
    borderWidth: 1,
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
    color: colors.error,
    paddingHorizontal: 10,
    marginTop: 2,
    textAlign: 'right',
    fontSize: 12,
  },
});

export default styles;
