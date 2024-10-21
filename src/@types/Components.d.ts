import { ReactNode, RefObject } from 'react';
import DatePicker from 'react-native-date-picker';
import type {
  FlatList,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native/types';

declare global {
  interface Icon {
    name: string;
    size?: number;
    color?: string;
  }

  interface InputComponentProps extends TextInputProps {
    setValue: (value: string) => void;
    errorMsg?: string;
    label?: string;
    icon?: Icon;
  }

  interface ButtonComponentProps extends TouchableOpacityProps {
    title: string;
    btnTextStyle?: StyleProp<TextStyle>;
    color?: string;
    btnStyle?: StyleProp<ViewStyle>;
  }

  interface IconButtonComponentProps extends TouchableOpacityProps {
    icon: Icon;
    btnStyle?: StyleProp<ViewStyle>;
  }

  interface DropdownItem {
    name: string;
    value: stirng;
  }

  interface DropdownProps {
    name: string;
    items: DropdownItem[];
    value: string;
    setValue: (value: string) => void;
    errorMsg?: stirng;
    label?: string;
  }

  interface DropdownBoxModalProps {
    dropdownVisible: boolean;
    name: string;
    setDropdownVisible: (dropdownVisible: boolean) => void;
    children: ReactNode[];
  }

  interface CustomDatePickerProps {
    formDateTime: string;
    setFormDateTime: (date: string) => void;
    showDatePicker: boolean;
    setShowDatePicker: (showDatePicker: boolean) => void;
    label: string;
    mode?: string;
    errorMsg?: string;
  }

  interface AddEditAttendeeModalProps {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    isEdit: boolean;
    setIsEdit: (isEdit: boolean) => void;
    addAttendee: (attendee: Attendee) => void;
    updateAttendee: (attendee: Attendee) => void;
    attendeeToUpdate: Attendee | null;
    setAttendeeToUpdate: (attendee: Attendee | null) => void;
  }

  interface AttendeeProps extends Attendee {
    setShowModal: (showModal: boolean) => void;
    setIsEdit: (isEdit: boolean) => void;
    setAttendeeToUpdate: (attendee: Attendee | null) => void;
    deleteAttendee: (attendeeId: string) => void;
  }

  interface AttendeeListProps {
    attendeeList: Attendee[];
    setShowModal: (showModal: boolean) => void;
    setIsEdit: (isEdit: boolean) => void;
    setAttendeeToUpdate: (attendee: Attendee | null) => void;
    deleteAttendee: (attendeeId: string) => void;
    contentContainerStyle?: StyleProp<ViewStyle>;
    listStyle?: StyleProp<ViewStyle>;
  }

  interface AttendeeModalContextValues {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    formData: EventFormData;
    setFormData: (formData: EventFormData) => void;
    addAttendee: (attendee: Attendee) => void;
    updateAttendee: (attendee: Attendee) => void;
    deleteAttendee: (attendeeId: string) => void;
    isEdit: boolean;
    setIsEdit: (isEdit: boolean) => void;
    attendeeToUpdate: Attendee;
    setAttendeeToUpdate: (attendee: Attendee) => void;
  }
}
