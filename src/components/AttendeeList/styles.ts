import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  attendeeContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    padding: 5,
    backgroundColor: colors.lightGray,
  },

  listContainer: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    gap: 5,
  },

  scrollViewContainer: {
    width: '40%',
    borderRadius: 5,
  },

  text: {
    color: colors.black,
  },

  textContainer: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },

  noAttendeesIndicator: {
    color: colors.black,
    textAlign: 'center',
  },

  deleteIconBtn: {
    backgroundColor: colors.blackTransparent,
    padding: 0,
  },

  editIconBtn: {
    backgroundColor: colors.blackTransparent,
    padding: 0,
  },
});

export default styles;
