import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { UserContext } from '@contexts/UserContextProvider';

import styles from '@screens/EventList/styles';

import IconButton from '@components/IconButton';
import CustomDatePicker from '@components/customDatePicker';

import {
  filterEventsWithFilter,
  formatDate,
  formatTimeWithFilter,
  searchEvents,
  sortEvents,
} from '@utility/formatters';

import colors from '@constants/colors';
import ROUTES from '@constants/routes';
import DropdownBox from '@src/components/DropdownBox';
import globalStyles from '@src/styles/globalStyles';
import Input from '@src/components/Input';

/*
      <View style={styles.dateContainer}>
        <CustomDatePicker
          formDateTime={date.toString()}
          setFormDateTime={(date: string) => setDate(new Date(date))}
          showDatePicker={showDatePicker}
          setShowDatePicker={showDatePicker =>
            setShowDatePicker(showDatePicker)
          }
          label="Select date to show events"
          mode="date"
        />
      </View>
*/

function EventCard({ event, timeFormat, navigation }: EventCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(ROUTES.EventInfo, { eventId: event.id });
      }}>
      <View style={styles.eventCardContainer}>
        <View style={styles.cardItemsContainer}>
          <Text style={styles.eventTitle}>
            {event.title.length > 24
              ? event.title.slice(0, 25) + '...'
              : event.title}
          </Text>

          <View style={styles.eventDetailContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={12}
              color={colors.primary}
            />
            <Text style={styles.eventLocation}>{event.location}</Text>
          </View>
        </View>

        <View style={styles.cardItemsContainer}>
          <View style={styles.eventDetailContainer}>
            <MaterialCommunityIcons
              name="calendar"
              size={12}
              color={colors.primary}
            />

            <Text style={styles.eventDate}>
              {new Date(event.datetime)
                .toString()
                .split(' ')
                .slice(0, 3)
                .join(' ')}
            </Text>
          </View>

          <View style={styles.eventDetailContainer}>
            <MaterialCommunityIcons
              name="clock"
              size={12}
              color={colors.primary}
            />
            <Text style={styles.eventAttendees}>
              {formatTimeWithFilter(
                formatDate(new Date(event.datetime)),
                timeFormat,
              )}
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
      </View>
    </TouchableOpacity>
  );
}

function EventList({ navigation }: EventListScreenParamList) {
  const { events, loggedInUser } = useContext(UserContext);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [searchText, setSearchText] = useState('');

  const [eventsFilter, setEventsFilter] = useState(
    loggedInUser.settings?.filter,
  );
  const [sortBy, setSortBy] = useState(loggedInUser.settings?.sortBy);
  const [timeFormat, setTimeFormat] = useState(
    loggedInUser.settings?.timeFormat,
  );

  useEffect(() => {
    setEventsFilter(loggedInUser.settings?.filter);
    setSortBy(loggedInUser.settings?.sortBy);
    setTimeFormat(loggedInUser.settings?.timeFormat);
  }, [loggedInUser]);

  return (
    <View style={styles.eventListContainer}>
      <Text style={[globalStyles.screenHeading, styles.eventListHeading]}>
        Event List
      </Text>
      <View style={styles.searchContainer}>
        <Input
          value={searchText}
          setValue={value => setSearchText(value)}
          placeholder="Search event names"
        />
      </View>
      <View style={styles.filterContainer}>
        <DropdownBox
          name="Select Filter"
          label="Select Filter"
          items={[
            { name: 'Today', value: 'today' },
            { name: 'This week', value: 'this-week' },
            { name: 'This month', value: 'this-month' },
          ]}
          value={eventsFilter}
          setValue={value => setEventsFilter(value)}
        />

        <DropdownBox
          name="Sort by"
          label="Sort by"
          items={[
            { name: 'Date & Time', value: 'datetime' },
            { name: 'Name', value: 'name' },
            { name: 'Attendees count', value: 'attendees' },
          ]}
          value={sortBy}
          setValue={value => setSortBy(value)}
        />
      </View>
      {events.length > 0 ? (
        <FlatList
          data={
            searchText === ''
              ? sortEvents(
                filterEventsWithFilter(events, date, eventsFilter),
                sortBy,
              )
              : searchEvents(events, searchText)
          }
          keyExtractor={({ id }) => id + ''}
          renderItem={({ item: event }) => (
            <EventCard
              event={event}
              timeFormat={timeFormat}
              navigation={navigation}
            />
          )}
          style={styles.eventList}
          contentContainerStyle={styles.eventListContent}
        />
      ) : (
        <Text style={styles.noEventsHeading}>No events</Text>
      )}
      <IconButton
        icon={{ name: 'plus-thick', size: 36, color: colors.white }}
        btnStyle={styles.addEventBtn}
        onPress={() =>
          navigation.navigate(ROUTES.AddEditEvent, { editEventId: null })
        }
      />
    </View>
  );
}

export default EventList;
