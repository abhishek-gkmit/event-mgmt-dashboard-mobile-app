import { Modal, SafeAreaView, Text, View } from 'react-native';
import { useState, useCallback, useMemo, useContext, useEffect } from 'react';

import Input from '@components/Input';
import Button from '@components/Button';

import styles from '@components/AddEditAttendeeModal/styles';
import { cloneObject } from '@src/utility/formatters';
import { emailRegEx } from '@src/constants/regularExpressions';

const initFormData: AttendeeFormData = {
  name: '',
  email: '',
};

function AddEditAttendeeModal({
  isEdit,
  setIsEdit,
  showModal,
  setShowModal,
  addAttendee,
  updateAttendee,
  attendeeToUpdate,
  setAttendeeToUpdate,
}: AddEditAttendeeModalProps) {
  const [formData, setFormData] = useState(attendeeToUpdate || initFormData);
  const [errors, setErrors] = useState<AttendeeFormErrors>({});

  useEffect(() => {
    setFormData(attendeeToUpdate || initFormData);
  }, [attendeeToUpdate]);

  const handleChange = useCallback(
    (data: Partial<AttendeeFormData>) => {
      setFormData({ ...formData, ...data });
    },
    [formData],
  );

  const headingToRender = useMemo(() => {
    return (
      <Text style={styles.heading}>
        {isEdit ? 'Update Attendee' : 'Add Attendee'}
      </Text>
    );
  }, [isEdit]);

  const validateForm = useCallback(
    function validateForm() {
      const errors: AttendeeFormErrors = {};
      let isError = false;

      if (formData.name.trim().length < 1) {
        errors.name = 'Name is required';
        isError = true;
      }

      if (formData.email.trim().length < 1) {
        errors.email = 'Email is required';
        isError = true;
      } else if (!new RegExp(emailRegEx).test(formData.email)) {
        errors.email = 'Enter correct email';
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

  const handleSubmit = useCallback(() => {
    if (!validateForm()) {
      return;
    }

    if (isEdit) {
      updateAttendee(formData);
      setFormData({ email: '', name: '' });
      setShowModal(false);
      setIsEdit(false);
      setAttendeeToUpdate({ id: '', name: '', email: '' });
      setErrors({});
    } else {
      addAttendee({ ...formData, id: Date.now() + '' });
      setFormData({ email: '', name: '' });
      setShowModal(false);
      setErrors({});
    }
  }, [
    updateAttendee,
    addAttendee,
    formData,
    setFormData,
    formData,
    setShowModal,
  ]);

  return (
    <Modal visible={showModal} transparent={true} animationType="fade">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.formContainer}>
          {headingToRender}
          <Input
            value={formData.name}
            setValue={value => handleChange({ name: value })}
            label="Name*"
            placeholder="Enter name"
            errorMsg={errors.name}
          />

          <Input
            value={formData.email}
            setValue={value => handleChange({ email: value })}
            label="Email*"
            placeholder="Enter email"
            errorMsg={errors.email}
          />

          <View style={styles.btnContainer}>
            <Button
              btnTextStyle={styles.btnTextStyle}
              btnStyle={styles.btnStyle}
              title="Cancel"
              onPress={() => {
                setFormData({ name: '', email: '' });
                if (isEdit) {
                  setIsEdit(false);
                  setAttendeeToUpdate({ id: '', name: '', email: '' });
                }
                setShowModal(false);
                setErrors({});
              }}
            />

            <Button
              btnTextStyle={styles.btnTextStyle}
              btnStyle={styles.btnStyle}
              title={isEdit ? 'Update' : 'Add'}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default AddEditAttendeeModal;
