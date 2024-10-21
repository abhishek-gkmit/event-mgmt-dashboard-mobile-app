import { useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import DatePicker from 'react-native-date-picker';

import Button from '@components/Button';

import {
  formatDate,
  formatDateWithFilter,
  formatTimeWithFilter,
} from '@utility/formatters';

import styles from '@components/customDatePicker/styles';

function CustomDatePicker({
  formDateTime,
  setFormDateTime,
  showDatePicker,
  setShowDatePicker,
  label,
  errorMsg,
  mode,
}: CustomDatePickerProps) {
  const setFormDateTimeWrapper = useCallback(
    (date: Date) => {
      setFormDateTime(date.toString());
      setShowDatePicker(false);
    },
    [setFormDateTime, setShowDatePicker],
  );

  const errorMsgToRender = useMemo(() => {
    return errorMsg ? (
      <Text style={styles.errorMsg}>{errorMsg}</Text>
    ) : (
      <Text> </Text>
    );
  }, [errorMsg]);

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Button
        btnTextStyle={styles.dateBtnTextStyle}
        btnStyle={styles.dateBtnStyle}
        title={
          !mode
            ? formatDateWithFilter(
              formatDate(new Date(formDateTime)),
              'dd/mm/yy',
            ) +
            ' ' +
            formatTimeWithFilter(formatDate(new Date(formDateTime)), '12')
            : formatDateWithFilter(
              formatDate(new Date(formDateTime)),
              'dd/mm/yy',
            )
        }
        onPress={() => setShowDatePicker(!showDatePicker)}
      />
      <DatePicker
        modal
        mode={mode ? mode : 'datetime'}
        open={showDatePicker}
        date={new Date(formDateTime)}
        onConfirm={setFormDateTimeWrapper}
        onCancel={() => setShowDatePicker(false)}
      />

      {errorMsgToRender}
    </>
  );
}

export default CustomDatePicker;
