import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '@components/Button/styles';

function Button({ title, fontSize, ...props }: ButtonComponentProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...props}>
      <Text style={StyleSheet.compose(styles.buttonText, { fontSize })}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
