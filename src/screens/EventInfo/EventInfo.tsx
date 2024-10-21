import { Text, View, Alert } from 'react-native';
import { useContext, useEffect, useState, useCallback } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { UserContext } from '@contexts/UserContextProvider';

import AttendeeList from '@components/AttendeeList';
import AddEditAttendeeModal from '@components/AddEditAttendeeModal';
import Button from '@components/Button';

import colors from '@constants/colors';
import {
  formatDate,
  formatTimeWithFilter,
  cloneObject,
} from '@utility/formatters';

import styles from '@screens/EventInfo/styles';
import IconButton from '@src/components/IconButton';
import ROUTES from '@src/constants/routes';

function EventInfo({ navigation, route }: EventInfoScreenParamList) {
  const { events, updateEvent, deleteEvent, loggedInUser } =
    useContext(UserContext);
  const [event, setEvent] = useState<MainEvent>(events[0]);

  const [showModal, setShowModal] = useState(false);
  const [isAttendeeEdit, setisAttendeeEdit] = useState(false);
  const [attendeeToUpdate, setAttendeeToUpdate] = useState<Attendee | null>(
    null,
  );

  useEffect(() => {
    const event = events.find(({ id }) => id === +route.params.eventId);
    if (event) {
      setEvent(event);
    }
  }, [events, route]);

  const addAttendee = useCallback(
    function addAttendee(attendee: Attendee) {
      const newEvent = cloneObject(event) as EventFormData;
      newEvent.attendeeList.push(attendee);

      updateEvent(newEvent);
      setEvent(newEvent);
    },
    [setEvent, event],
  );

  const addAttendeeWrapper = useCallback(
    function addAttendeeWrapper() {
      if (event.attendeeList.length >= +event.attendees) {
        Alert.alert(
          'You have reached maximum attendees limit. Please increase attendees limit to add more attendees.',
        );
        return;
      }
      setShowModal(true);
    },
    [setShowModal, event],
  );

  const updateAttendee = useCallback(
    function updateAttendee(attendee: Attendee) {
      const newEvent = cloneObject(event) as EventFormData;
      newEvent.attendeeList = newEvent.attendeeList.map(existingAttendee => {
        if (existingAttendee.id === attendee.id) {
          return cloneObject(attendee) as Attendee;
        }

        return existingAttendee;
      });

      updateEvent(newEvent);
      setEvent(newEvent);
    },
    [setEvent, event],
  );

  const deleteAttendee = useCallback(
    function deleteAttendee(attendeeId: string) {
      const newEvent = cloneObject(event) as EventFormData;
      newEvent.attendeeList = newEvent.attendeeList.filter(
        ({ id }) => id !== attendeeId,
      );

      updateEvent(newEvent);
      setEvent(newEvent);
    },
    [setEvent, event],
  );

  return (
    <View style={styles.eventInfo}>
      <View style={styles.eventCardContainer}>
        <Text style={styles.eventTitle}>{event.title}</Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 5,
          }}>
          <View
            style={{
              flex: 1,
              gap: 5,
              alignItems: 'flex-start',
            }}>
            <View style={{ gap: 5 }}>
              <View style={styles.eventDetailContainer}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.eventLocation}>{event.location}</Text>
              </View>

              <View style={styles.eventDetailContainer}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={18}
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
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.eventAttendees}>
                  {formatTimeWithFilter(
                    formatDate(new Date(event.datetime)),
                    loggedInUser.settings.timeFormat,
                  )}
                </Text>
              </View>

              <View style={styles.eventDetailContainer}>
                <MaterialCommunityIcons
                  name="account-multiple"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.eventAttendees}>{event.attendees}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '65%',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                paddingBottom: 5,
                borderBottomColor: colors.black1,
                borderBottomWidth: 1,
              }}>
              Description{' '}
            </Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
          </View>
        </View>
      </View>

      <AddEditAttendeeModal
        isEdit={isAttendeeEdit}
        setIsEdit={(isEdit: boolean) => setisAttendeeEdit(isEdit)}
        showModal={showModal}
        setShowModal={(showModal: boolean) => setShowModal(showModal)}
        addAttendee={addAttendee}
        updateAttendee={updateAttendee}
        attendeeToUpdate={attendeeToUpdate}
        setAttendeeToUpdate={(attendee: Attendee | null) =>
          setAttendeeToUpdate(attendee)
        }
      />

      <View style={styles.attendeeBtnContainer}>
        <Text style={styles.attendeeListHeading}>Attendee List</Text>
        <IconButton
          icon={{ name: 'plus', color: colors.white, size: 18 }}
          btnStyle={styles.attendeeBtn}
          onPress={addAttendeeWrapper}
        />
      </View>

      <AttendeeList
        attendeeList={event.attendeeList}
        setIsEdit={isEdit => setisAttendeeEdit(isEdit)}
        setShowModal={showModal => setShowModal(showModal)}
        setAttendeeToUpdate={(attendee: Attendee | null) =>
          setAttendeeToUpdate(attendee)
        }
        deleteAttendee={deleteAttendee}
        listStyle={styles.attendeeListContainer}
        contentContainerStyle={styles.contentContainerStyle}
      />

      <View style={styles.btnContainer}>
        <Button
          title="Delete Event"
          btnStyle={styles.deleteEventBtn}
          btnTextStyle={styles.deleteEventBtnText}
          onPress={() => {
            deleteEvent(event);
            navigation.goBack();
          }}
        />
        <Button
          title="Edit Event"
          btnStyle={styles.editEventBtn}
          btnTextStyle={styles.deleteEventBtnText}
          onPress={() =>
            navigation.navigate(ROUTES.AddEditEvent, { editEventId: +event?.id })
          }
        />
      </View>
    </View>
  );
}

export default EventInfo;
