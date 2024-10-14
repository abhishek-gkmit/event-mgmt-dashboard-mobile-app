import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '@components/Button/styles';

function Button({
  title,
  btnTextStyle,
  btnStyle,
  ...props
}: ButtonComponentProps) {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.button, btnStyle)}
      activeOpacity={0.8}
      {...props}>
      <Text style={StyleSheet.compose(styles.buttonText, btnTextStyle)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
