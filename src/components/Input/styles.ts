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
    borderColor: colors.blackTransparent,
    alignItems: 'center',
  },

  inputContainerFocus: {
    borderColor: colors.primary,
  },

  inputContainerError: {
    borderColor: colors.error,
  },

  inputLabel: {
    color: colors.black,
    marginBottom: 5,
  },

  textInput: {
    color: colors.black,
    fontSize: 14,
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    textAlignVertical: 'center',
  },

  iconStyle: {
    padding: 0,
    margin: 0,
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
