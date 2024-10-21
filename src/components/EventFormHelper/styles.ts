import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    color: colors.primary,
    fontSize: 18,
    textAlign: 'center',
  },

  formContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
    height: '100%',
  },

  btnTextStyle: {
    fontSize: 18,
  },

  btnStyle: {
    marginBottom: 10,
  },

  attendeeBtn: {
    width: 'auto',
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },

  attendeeBtnText: {
    fontSize: 14,
  },

  attendeeBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  attendeeListHeading: {
    fontSize: 18,
    color: colors.primary,
  },

  contentContainerStyle: {
    gap: 5,
    paddingBottom: 10,
  },
});

export default styles;
