import { RefObject } from 'react';
import type {
  TextInput,
  TextInputProps,
  TouchableOpacityProps,
} from 'react-native/types';
declare global {
  interface Icon {
    name: string;
    size?: number;
    color?: string;
  }

  interface InputComponentProps extends TextInputProps {
    setValue?: (value: string) => void;
    errorMsg?: string;
    label?: string;
    icon?: Icon;
  }

  interface ButtonComponentProps extends TouchableOpacityProps {
    title: string;
    fontSize?: number;
    color?: string;
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
}
