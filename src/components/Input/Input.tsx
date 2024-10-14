import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '@constants/colors';

import styles from '@components/Input/styles';

// cprops is a shorthand for componentProps
const Input = forwardRef(function Input(
  cprops: InputComponentProps,
  ref: ForwardedRef<TextInput>,
) {
  const { value, setValue, errorMsg, icon, label, secureTextEntry, ...props } =
    cprops;
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [textChanged, setTextChanged] = useState(false);

  const setValueWrapper = useCallback(
    (value: string) => {
      if (!textChanged) {
        setTextChanged(true);
      }

      setValue(value);
    },
    [setValue],
  );

  const iconToRender = useMemo(() => {
    return (
      icon && (
        <MaterialCommunityIcons
          name={icon.name}
          size={icon.size || 14}
          color={
            isFocused
              ? icon.color || colors.primary
              : textChanged
                ? icon.color || colors.primary
                : !errorMsg || errorMsg === ''
                  ? icon.color || colors.primary
                  : 'red'
          }
          iconStyle={styles.iconStyle}
        />
      )
    );
  }, [icon, errorMsg, isFocused]);

  const textInput = useMemo(() => {
    return (
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={setValueWrapper}
        placeholderTextColor="gray"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hitSlop={{
          top: 15,
          bottom: 15,
          left: icon?.size ? icon.size + 15 : 24 + 15,
          right: 15,
        }}
        ref={ref}
        secureTextEntry={secureTextEntry && !passwordVisible}
        {...props}
      />
    );
  }, [value, setValue, setIsFocused, icon, secureTextEntry, props]);

  const makePasswordVisibleButton = useMemo(() => {
    return cprops.secureTextEntry ? (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setPasswordVisible(passwordVisible => !passwordVisible)}>
        {!passwordVisible ? (
          <MaterialCommunityIcons name={'eye-off'} size={14} color="gray" />
        ) : (
          <MaterialCommunityIcons name={'eye'} size={14} color="gray" />
        )}
      </TouchableOpacity>
    ) : null;
  }, [cprops, passwordVisible, setPasswordVisible]);

  const errorMsgText = useMemo(() => {
    return textChanged ? (
      <Text style={styles.errorMsg}> </Text>
    ) : (
      <Text style={styles.errorMsg}>
        {errorMsg && errorMsg !== '' ? errorMsg : ' '}
      </Text>
    );
  }, [errorMsg, textChanged]);

  const inputLabel = useMemo(() => {
    return label ? <Text style={styles.inputLabel}>{label}</Text> : null;
  }, [label]);

  useEffect(() => {
    setTextChanged(false);
  }, [errorMsg]);

  return (
    <View>
      {inputLabel}

      <View
        style={
          isFocused
            ? [styles.inputContainer, styles.inputContainerFocus]
            : textChanged
              ? styles.inputContainer
              : !errorMsg || errorMsg === ''
                ? styles.inputContainer
                : [styles.inputContainer, styles.inputContainerError]
        }>
        {iconToRender}

        {textInput}

        {makePasswordVisibleButton}
      </View>

      {errorMsgText}
    </View>
  );
});

export default Input;
