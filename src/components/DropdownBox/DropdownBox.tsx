import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';

import colors from '@constants/colors';

import styles from '@components/DropdownBox/styles';
import Button from '../Button';

function DropdownBox({
  name,
  items,
  value,
  setValue,
  label,
  errorMsg,
}: DropdownProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function setValueWrapper(nameOfItem: string) {
    setDropdownVisible(false);
    setValue(nameOfItem);
  }

  return (
    <View>
      {label ? <Text style={styles.dropdownLabel}>{label}</Text> : null}
      <Pressable
        style={
          !errorMsg || errorMsg !== ''
            ? styles.dropdownShowButton
            : StyleSheet.compose(
              styles.dropdownShowButton,
              styles.dropdownShowButtonError,
            )
        }
        onPress={() => setDropdownVisible(dropdownVisible => !dropdownVisible)}>
        {/* showing name at start instead of the value*/}
        {value === '' ? (
          <Text style={styles.dropdownBoxName}>{name}</Text>
        ) : (
          <Text style={styles.dropdownBoxSelectValueName}>
            {items.find(({ value: itemValue }) => itemValue === value)?.name}
          </Text>
        )}
      </Pressable>
      <Text style={styles.errorMsg}>{errorMsg}</Text>
      <Modal visible={dropdownVisible} transparent={true} animationType="fade">
        <SafeAreaView style={styles.dropdownBoxContainer}>
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownHeading}>{name}</Text>
            {items.map(({ name, value: itemValue }) => {
              return (
                <TouchableHighlight
                  activeOpacity={0.9}
                  underlayColor={colors.primary}
                  style={
                    value === itemValue
                      ? [styles.dropdownItem, styles.dropdownItemSelected]
                      : styles.dropdownItem
                  }
                  onPress={() => setValueWrapper(itemValue)}>
                  <Text
                    style={
                      value === itemValue
                        ? [
                          styles.dropdownItemText,
                          styles.dropdownItemTextSelected,
                        ]
                        : styles.dropdownItemText
                    }>
                    {name}
                  </Text>
                </TouchableHighlight>
              );
            })}
            <Button
              title="Cancel"
              fontSize={18}
              onPress={() => setDropdownVisible(false)}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

export default DropdownBox;
