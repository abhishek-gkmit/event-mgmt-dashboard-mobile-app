import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  eventInfo: {
    height: '100%',
    padding: 20,
  },

  eventCardContainer: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    gap: 10,
    justifyContent: 'space-between',
    elevation: 10,
  },

  dateContainer: {
    marginHorizontal: 10,
    padding: 10,
  },

  cardItemsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
  },

  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    textAlign: 'center',
    borderBottomColor: colors.black1,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },

  eventDescription: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '400',
  },

  eventLocation: {
    fontSize: 14,
    color: colors.black,
  },

  eventAttendees: {
    fontSize: 14,
    color: colors.black,
  },

  eventDetailContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  eventDate: {
    color: colors.black,
    fontSize: 14,
  },

  btnTextStyle: {
    fontSize: 18,
  },

  attendeeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  attendeeListContainer: {
    backgroundColor: colors.white,
    elevation: 5,
  },

  attendeeBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  attendeeListHeading: {
    fontSize: 18,
    color: colors.black,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  deleteEventBtn: {
    width: 150,
    backgroundColor: colors.red,
  },

  deleteEventBtnText: {
    fontSize: 14,
  },

  editEventBtn: {
    width: 150,
    backgroundColor: colors.green,
  },

  editEventBtnText: {
    fontSize: 14,
  },

  contentContainerStyle: {
    gap: 5,
  },
});

export default styles;
