import { createContext, useState, useCallback } from 'react';

import { cloneObject } from '@utility/formatters';

const initFormData: EventFormData = {
  title: '',
  datetime: new Date().toString(),
  description: '',
  attendees: '1',
  attendeeList: [],
  location: '',
};

const AttendeeModalContext = createContext<AttendeeModalContextValues>({
  isEdit: false,
  setIsEdit: () => { },
  updateAttendee: () => { },
  addAttendee: () => { },
  showModal: false,
  setShowModal: () => { },
  formData: initFormData,
  setFormData: () => { },
  deleteAttendee: () => { },
  attendeeToUpdate: { name: '', email: '' },
  setAttendeeToUpdate: () => { },
});

function AttendeeModalContextProvider({ children }) {
  const [formData, setFormData] = useState(initFormData);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [attendeeToUpdate, setAttendeeToUpdate] = useState<Attendee | null>(
    null,
  );

  const addAttendee = useCallback(
    function addAttendee(attendee: Attendee) {
      const newFormData = cloneObject(formData) as EventFormData;
      newFormData.attendeeList.push(attendee);

      setFormData(newFormData);
    },
    [setFormData, formData],
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
        ({ id }) => id === attendeeId,
      );

      setFormData(newFormData);
    },
    [setFormData, formData],
  );

  return (
    <AttendeeModalContext.Provider
      values={{
        showModal,
        setShowModal,
        formData,
        setFormData,
        addAttendee,
        updateAttendee,
        deleteAttendee,
        isEdit,
        setIsEdit,
        attendeeToUpdate,
        setAttendeeToUpdate,
      }}>
      {children}
    </AttendeeModalContext.Provider>
  );
}

export { AttendeeModalContextProvider, AttendeeModalContext };
