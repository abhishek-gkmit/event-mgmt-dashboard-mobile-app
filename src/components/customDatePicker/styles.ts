import colors from '@src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dateBtnTextStyle: {
    textAlign: 'left',
    fontSize: 14,
    color: colors.black,
  },

  dateBtnStyle: {
    backgroundColor: colors.background,
    marginTop: 0,
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.black,
  },

  errorMsg: {
    color: colors.error,
    paddingHorizontal: 10,
    marginVertical: 2,
    textAlign: 'right',
    fontSize: 12,
  },
});

export default styles;
