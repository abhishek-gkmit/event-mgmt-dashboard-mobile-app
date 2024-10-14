import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { useCallback, useMemo, useState } from 'react';

import colors from '@constants/colors';

import styles from '@components/DropdownBox/styles';
import Button from '@components/Button';

function DropdownBoxModal({
  dropdownVisible,
  name,
  setDropdownVisible,
  children,
}: DropdownBoxModalProps) {
  return (
    <Modal visible={dropdownVisible} transparent={true} animationType="fade">
      <SafeAreaView style={styles.dropdownBoxContainer}>
        <View style={styles.dropdownBox}>
          <Text style={styles.dropdownHeading}>{name}</Text>
          {children}
          <Button
            title="Cancel"
            fontSize={18}
            onPress={() => setDropdownVisible(false)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

function DropdownBox({
  name,
  items,
  value,
  setValue,
  label,
  errorMsg,
}: DropdownProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const setValueWrapper = useCallback(
    function setValueWrapper(nameOfItem: string) {
      setDropdownVisible(false);
      setValue(nameOfItem);
    },
    [setDropdownVisible, setValue],
  );

  const itemsToRender = useMemo(() => {
    return items.map(({ name, value: itemValue }) => {
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
                ? [styles.dropdownItemText, styles.dropdownItemTextSelected]
                : styles.dropdownItemText
            }>
            {name}
          </Text>
        </TouchableHighlight>
      );
    });
  }, [setValueWrapper, items, value]);

  const showDropdownModalBtn = useMemo(() => {
    return (
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
    );
  }, [items, value, name, errorMsg, setDropdownVisible]);

  const dropdownLabel = useMemo(() => {
    return label ? <Text style={styles.dropdownLabel}>{label}</Text> : null;
  }, [label]);

  return (
    <View>
      {dropdownLabel}

      {showDropdownModalBtn}

      <Text style={styles.errorMsg}>{errorMsg}</Text>

      <DropdownBoxModal
        dropdownVisible={dropdownVisible}
        setDropdownVisible={setDropdownVisible}
        name={name}>
        {itemsToRender}
      </DropdownBoxModal>
    </View>
  );
}

export default DropdownBox;
