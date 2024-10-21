import { Text, View, FlatList } from 'react-native';
import { useContext, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DropdownBox from '@components/DropdownBox';

import { UserContext } from '@contexts/UserContextProvider';

import colors from '@constants/colors';

import styles from '@screens/Dashboard/styles';

import { filterEventsWithFilter } from '@src/utility/formatters';
import globalStyles from '@src/styles/globalStyles';

function EventCard({ event }: EventCardProps) {
  return (
    <View style={styles.eventCardContainer}>
      <View style={styles.cardItemsContainer}>
        <Text style={styles.eventTitle}>
          {event.title.length > 35
            ? event.title.slice(0, 35) + '...'
            : event.title}
        </Text>
      </View>
      <View style={styles.eventDetailContainer}>
        <MaterialCommunityIcons
          name="account-multiple"
          size={12}
          color={colors.primary}
        />
        <Text style={styles.eventAttendees}>{event.attendees}</Text>
      </View>
    </View>
  );
}

function Dashboard() {
  const { events } = useContext(UserContext);

  const [eventsFilter, setEventsFilter] = useState('this-week');

  return (
    <View style={styles.dashboard}>
      <Text style={globalStyles.screenHeading}>Dashboard</Text>
      <View style={styles.totalEventsContainer}>
        <Text style={styles.totalEventsHeading}>Total Events</Text>
        <Text style={styles.totalEventsCount}>{events.length}</Text>
      </View>
      <View style={styles.dashboardContainer}>
        <View style={styles.dropdownContainer}>
          <DropdownBox
            name="Show Upcoming Events for"
            label="Show Upcoming Events for"
            items={[
              { name: 'This week', value: 'this-week' },
              { name: 'This month', value: 'this-month' },
            ]}
            value={eventsFilter}
            setValue={value => setEventsFilter(value)}
          />
        </View>

        <View style={styles.eventListContainer}>
          <FlatList
            data={filterEventsWithFilter(events, new Date(), eventsFilter)}
            keyExtractor={({ id }) => id + ''}
            renderItem={({ item: event }) => <EventCard event={event} />}
            contentContainerStyle={styles.eventList}
            ListEmptyComponent={() => (
              <Text style={styles.noEventsHeading}>No Events</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default Dashboard;
