import { Alert, Switch, Text, View } from 'react-native';
import { useCallback, useContext, useEffect, useState } from 'react';

import DropdownBox from '@components/DropdownBox';
import Button from '@components/Button';
import { UserContext } from '@contexts/UserContextProvider';

import colors from '@constants/colors';
import styles from '@screens/Settings/styles';

import API from '@utility/UserAsyncStorage';

function Settings() {
  const { users, loggedInUser, setUsers } = useContext(UserContext);

  const [eventsFilter, setEventsFilter] = useState(
    loggedInUser.settings?.filter,
  );
  const [sortBy, setSortBy] = useState(loggedInUser.settings?.sortBy);
  const [isTimeFormatTwelve, setIsTimeFormatTwelve] = useState(
    loggedInUser.settings?.timeFormat === '12',
  );

  const updateSettings = useCallback(
    async function updateSettings() {
      const newSettings: UserSettings = {
        filter: eventsFilter,
        timeFormat: isTimeFormatTwelve ? '12' : '24',
        sortBy: sortBy,
      };
      loggedInUser.settings = newSettings;

      const newUsers = await API.updateUser(users, loggedInUser);
      setUsers(newUsers);
    },
    [users, loggedInUser, eventsFilter, isTimeFormatTwelve, sortBy],
  );

  const handleReset = useCallback(
    function resetData() {
      Alert.alert(
        'Reset Data',
        'All of your events and settings data will be deleted, are you sure?',
        [
          { text: 'Cancel' },
          {
            text: 'Ok',
            onPress: async () => {
              const newUsers = await API.resetUserData(users, loggedInUser.id);
              console.log('condition>>>>>>>>>', newUsers === users);
              setUsers(newUsers);
            },
          },
        ],
        { cancelable: true },
      );
    },
    [users, loggedInUser, setUsers],
  );

  useEffect(() => {
    updateSettings();
  }, [eventsFilter, sortBy, isTimeFormatTwelve]);

  useEffect(() => {
    if (loggedInUser.settings) {
      const { settings } = loggedInUser;
      setEventsFilter(settings.filter);
      setIsTimeFormatTwelve(settings.timeFormat === '12');
      setSortBy(settings.sortBy);
    }
  }, [loggedInUser, setEventsFilter, setIsTimeFormatTwelve, setSortBy]);

  return (
    <View style={styles.settingsScreen}>
      <View style={styles.filterContainer}>
        <DropdownBox
          name="Select default Filter of events"
          label="Select default Filter of events"
          items={[
            { name: 'Today', value: 'today' },
            { name: 'This week', value: 'this-week' },
            { name: 'This month', value: 'this-month' },
          ]}
          value={eventsFilter}
          setValue={value => setEventsFilter(value)}
        />

        <DropdownBox
          name="Select default Sorting of events"
          label="Select default Sorting of events"
          items={[
            { name: 'Date & Time', value: 'datetime' },
            { name: 'Name', value: 'name' },
            { name: 'Attendees count', value: 'attendees' },
          ]}
          value={sortBy}
          setValue={value => setSortBy(value)}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchHeading}>{'12 Hour Format'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={isTimeFormatTwelve ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setIsTimeFormatTwelve(isTimeFormatTwelve => !isTimeFormatTwelve)
            }
            value={isTimeFormatTwelve}
          />
        </View>
        <Button
          title="Reset Data"
          btnStyle={styles.resetBtn}
          btnTextStyle={styles.resetBtnText}
          onPress={handleReset}
        />
      </View>
    </View>
  );
}

export default Settings;
