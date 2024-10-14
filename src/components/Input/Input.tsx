import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ForwardedRef, forwardRef, useState } from 'react';
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

  return (
    <View>
      {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
      <View
        style={
          isFocused
            ? [styles.inputContainer, styles.inputContainerFocus]
            : !errorMsg || errorMsg === ''
              ? styles.inputContainer
              : [styles.inputContainer, styles.inputContainerError]
        }>
        {icon && (
          <MaterialCommunityIcons
            name={icon.name}
            size={icon.size || 14}
            color={
              isFocused
                ? icon.color || colors.primary
                : !errorMsg || errorMsg === ''
                  ? icon.color || colors.primary
                  : 'red'
            }
            iconStyle={{ padding: 0, margin: 0 }}
          />
        )}
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={value => setValue && setValue(value)}
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

        {cprops.secureTextEntry ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              setPasswordVisible(passwordVisible => !passwordVisible)
            }>
            {!passwordVisible ? (
              <MaterialCommunityIcons name={'eye-off'} size={14} color="gray" />
            ) : (
              <MaterialCommunityIcons name={'eye'} size={14} color="gray" />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.errorMsg}>
        {errorMsg && errorMsg !== '' ? errorMsg : ' '}
      </Text>
    </View>
  );
});

export default Input;
