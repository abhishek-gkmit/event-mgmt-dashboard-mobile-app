import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  dashboard: {
    height: '100%',
    backgroundColor: colors.white,
  },

  dashboardContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderTopWidth: 1,
    borderTopColor: colors.black3,
  },

  totalEventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto',
    margin: 20,
  },

  totalEventsHeading: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '700',
  },

  totalEventsCount: {
    fontSize: 24,
    color: colors.black,
  },

  eventListContainer: {
    backgroundColor: colors.white,
    height: '40%',
    gap: 10,
  },

  eventList: {
    backgroundColor: colors.white,
    paddingTop: 10,
    gap: 10,
  },

  eventCardContainer: {
    marginHorizontal: 5,
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
    elevation: 5,
  },

  cardItemsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
  },

  eventTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
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

  dropdownContainer: {
    marginTop: 15,
  },

  noEventsHeading: { color: colors.black, fontSize: 18, textAlign: 'center' },
});

export default styles;
