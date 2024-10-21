import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  eventListHeading: {
    marginBottom: 20,
  },

  eventListContainer: {
    backgroundColor: colors.white,
    height: '100%',
  },

  eventListContent: {
    marginTop: 5,
    backgroundColor: colors.white,
    height: '100%',
    gap: 10,
  },

  eventList: {
    borderTopWidth: 1,
    borderTopColor: colors.black2,
    paddingTop: 5,
  },

  eventCardContainer: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    gap: 5,
    flexDirection: 'row',
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
  },

  eventLocation: {
    fontSize: 12,
    color: colors.black,
  },

  eventAttendees: {
    fontSize: 12,
    color: colors.secondary,
  },

  eventDetailContainer: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },

  eventDate: {
    color: colors.black,
    fontSize: 12,
  },

  addEventBtn: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    margin: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  noEventsHeading: { color: colors.black, fontSize: 18, textAlign: 'center' },
});

export default styles;
