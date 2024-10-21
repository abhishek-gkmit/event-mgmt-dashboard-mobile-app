import { Alert, Text, View } from 'react-native';

import styles from '@screens/Profile/styles';
import { useCallback, useContext } from 'react';
import { UserContext } from '@src/contexts/UserContextProvider';
import Button from '@src/components/Button';
import API from '@src/utility/UserAsyncStorage';
import ROUTES from '@src/constants/routes';
import globalStyles from '@src/styles/globalStyles';

function Profile({ navigation }: ProfileScreenParamList) {
  const { loggedInUser, setLoggedInUserId } = useContext(UserContext);

  const logout = useCallback(
    async function logout() {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          { text: 'No' },
          {
            text: 'Yes',
            onPress: async () => {
              await API.resetLoggedInUser();
              setLoggedInUserId(null);
            },
          },
        ],
        { cancelable: true },
      );
      // await API.resetLoggedInUser();
      // setLoggedInUserId(null);
    },
    [setLoggedInUserId],
  );

  return (
    <View style={styles.profileScreen}>
      <Text style={globalStyles.screenHeading}>Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture}>
            <Text style={styles.profilePictureText}>
              {loggedInUser.name[0]}
            </Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.profileCardTitle}>Name</Text>
          <Text style={styles.profileName}>{loggedInUser.name}</Text>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.profileCardTitle}>Username</Text>
          <Text style={styles.profileUserName}>{loggedInUser.username}</Text>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.profileCardTitle}>Email</Text>
          <Text style={styles.profileEmail}>{loggedInUser.email}</Text>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.profileCardTitle}>Gender</Text>
          <Text style={styles.profileGender}>
            {loggedInUser.gender[0].toUpperCase() +
              loggedInUser.gender.slice(1)}
          </Text>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.profileCardTitle}>Age</Text>
          <Text style={styles.profileEmail}>{loggedInUser.age}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Settings"
          btnStyle={styles.settingsBtn}
          btnTextStyle={styles.settingsBtnText}
          onPress={() => navigation.navigate(ROUTES.Settings)}
        />
        <Button
          title="Logout"
          btnStyle={styles.logoutBtn}
          btnTextStyle={styles.logoutBtnText}
          onPress={() => logout()}
        />
      </View>
    </View>
  );
}

export default Profile;
