import { View, TextInput, Alert, Text } from 'react-native';
import { useState, useRef, useEffect, useContext, useCallback } from 'react';

import Input from '@components/Input';
import Button from '@components/Button';
import CustomDatePicker from '@components/customDatePicker';
import AddEditAttendeeModal from '@components/AddEditAttendeeModal';
import AttendeeList from '@components/AttendeeList';
import IconButton from '@components/IconButton';

import { UserContext } from '@contexts/UserContextProvider';

import { cloneObject } from '@utility/formatters';
import colors from '@constants/colors';

import styles from '@components/EventFormHelper/styles';
import globalStyles from '@src/styles/globalStyles';

function EventFormHelper({ initFormData, isEdit, finish }: EventFormHelperProps) {
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState<EventFormErrors>({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [isAttendeeEdit, setisAttendeeEdit] = useState(false);
  const [attendeeToUpdate, setAttendeeToUpdate] = useState<Attendee | null>(
    null,
  );

  const { addEvent, updateEvent } = useContext(UserContext);

  const titleRef = useRef<TextInput>(null);

  useEffect(() => {
    setFormData(initFormData);
  }, [initFormData]);

  const addAttendee = useCallback(
    function addAttendee(attendee: Attendee) {
      const newFormData = cloneObject(formData) as EventFormData;
      newFormData.attendeeList.push(attendee);

      setFormData(newFormData);
    },
    [setFormData, formData],
  );

  const addAttendeeWrapper = useCallback(
    function addAttendeeWrapper() {
      if (formData.attendeeList.length >= +formData.attendees) {
        Alert.alert(
          'You have reached maximum attendees limit. Please increase attendees limit to add more attendees.',
        );
        return;
      }
      setShowModal(true);
    },
    [setShowModal, formData],
  );

  const updateAttendee = useCallback(
    function updateAttendee(attendee: Attendee) {
      const newFormData = cloneObject(formData) as EventFormData;
      newFormData.attendeeList = newFormData.attendeeList.map(
        existingAttendee => {
          if (existingAttendee.id === attendee.id) {
            return cloneObject(attendee) as Attendee;
          }

          return existingAttendee;
        },
      );

      setFormData(newFormData);
    },
    [setFormData, formData],
  );

  const deleteAttendee = useCallback(
    function deleteAttendee(attendeeId: string) {
      const newFormData = cloneObject(formData) as EventFormData;
      newFormData.attendeeList = newFormData.attendeeList.filter(
        ({ id }) => id !== attendeeId,
      );

      setFormData(newFormData);
    },
    [setFormData, formData],
  );

  const handleChange = useCallback(
    function handleChange(data: Partial<EventFormData>) {
      setFormData({ ...(cloneObject(formData) as EventFormData), ...data });
    },
    [setFormData, formData],
  );

  const validateForm = useCallback(
    function validateForm() {
      const errors: EventFormErrors = {};
      let isError = false;

      if (formData.title.trim().length < 1) {
        errors.title = 'Title is required';
        isError = true;
      }

      if (formData.description.trim().length < 1) {
        errors.description = 'Event description is required';
        isError = true;
      }

      // + converts the string attendees property into a number
      if (+formData.attendees.trim() < 1) {
        errors.attendees = 'Attendees must be greater than 1';
        isError = true;
      }

      if (formData.location.trim().length < 1) {
        errors.location = 'Location is required';
        isError = true;
      }

      if (isError) {
        setErrors(errors);
        return false;
      }

      return true;
    },
    [setFormData, formData],
  );

  const handleSubmit = useCallback(
    function handleSubmit() {
      if (!validateForm()) {
        return;
      }

      if (isEdit) {
        updateEvent(formData);
        finish();
      } else {
        addEvent(formData);
        setFormData(initFormData);
        setErrors({});
        finish();
      }
    },
    [setFormData, formData],
  );

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <View style={[globalStyles.bgContainer, styles.formContainer]}>
      <Input
        label="Event Title*"
        ref={titleRef}
        placeholder="Title"
        value={formData.title}
        setValue={value => handleChange({ title: value })}
        errorMsg={errors.title}
      />
      <CustomDatePicker
        formDateTime={formData.datetime}
        setFormDateTime={(datetime: string) =>
          handleChange({ datetime: datetime })
        }
        showDatePicker={showDatePicker}
        setShowDatePicker={showDatePicker => setShowDatePicker(showDatePicker)}
        label="Date & Time*"
      />
      <Input
        label="Event Description*"
        placeholder="Enter description"
        value={formData.description}
        setValue={value => handleChange({ description: value })}
        errorMsg={errors.description}
      />
      <Input
        label="Location*"
        placeholder="Location"
        value={formData.location}
        setValue={value => handleChange({ location: value })}
        errorMsg={errors.location}
      />
      <Input
        placeholder="Attendees"
        label="Maximum Attendees*"
        value={formData.attendees}
        inputMode="numeric"
        setValue={value => handleChange({ attendees: value })}
        errorMsg={errors.attendees}
      />
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
        attendeeList={formData.attendeeList}
        setIsEdit={isEdit => setisAttendeeEdit(isEdit)}
        setShowModal={showModal => setShowModal(showModal)}
        setAttendeeToUpdate={(attendee: Attendee | null) =>
          setAttendeeToUpdate(attendee)
        }
        deleteAttendee={deleteAttendee}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <View style={styles.attendeeBtnContainer}></View>
      <Button
        title={isEdit ? 'Save' : 'Add Event'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        onPress={handleSubmit}
      />
    </View>
  );
}

export default EventFormHelper;
