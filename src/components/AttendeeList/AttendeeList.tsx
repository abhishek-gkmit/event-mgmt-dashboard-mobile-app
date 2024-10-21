import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';

import colors from '@constants/colors';

import styles from '@components/AttendeeList/styles';
import IconButton from '@components/IconButton';

function Attendee({
  id,
  email,
  name,
  deleteAttendee,
  setShowModal,
  setIsEdit,
  setAttendeeToUpdate,
}: AttendeeProps) {
  const updateAttendee = useCallback(
    (attendee: Attendee) => {
      setAttendeeToUpdate(attendee);
      setIsEdit(true);
      setShowModal(true);
    },
    [setShowModal, setIsEdit, setAttendeeToUpdate],
  );

  return (
    <View style={styles.attendeeContainer}>
      <View style={styles.scrollViewContainer}>
        <View style={styles.textContainer}>
          <Text selectable selectionColor={colors.primary} style={styles.text}>
            {name.length > 13 ? name.slice(0, 12) + '...' : name}
          </Text>
        </View>
      </View>

      <View style={styles.scrollViewContainer}>
        <View style={styles.textContainer}>
          <Text selectable selectionColor={colors.primary} style={styles.text}>
            {email.length > 13 ? email.slice(0, 12) + '...' : email}
          </Text>
        </View>
      </View>

      <IconButton
        icon={{ name: 'delete', size: 18, color: colors.red }}
        btnStyle={styles.deleteIconBtn}
        onPress={() => deleteAttendee(id)}
      />
      <IconButton
        icon={{ name: 'account-edit', size: 18, color: colors.primary }}
        btnStyle={styles.editIconBtn}
        onPress={() => updateAttendee({ id, name, email })}
      />
    </View>
  );
}

function AttendeeList({
  attendeeList,
  deleteAttendee,
  setShowModal,
  setIsEdit,
  setAttendeeToUpdate,
  contentContainerStyle,
  listStyle,
}: AttendeeListProps) {
  return (
    <FlatList
      data={attendeeList}
      keyExtractor={({ id }, index) => (id ? id : index + '')}
      renderItem={({ item: attendee }) => (
        <Attendee
          {...attendee}
          setShowModal={setShowModal}
          setIsEdit={setIsEdit}
          setAttendeeToUpdate={setAttendeeToUpdate}
          deleteAttendee={deleteAttendee}
        />
      )}
      style={StyleSheet.compose(styles.listContainer, listStyle)}
      contentContainerStyle={contentContainerStyle}
      ListEmptyComponent={() => (
        <Text style={styles.noAttendeesIndicator}>Attendee list is empty</Text>
      )}
    />
  );
}

export default AttendeeList;
