import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import Profile from '@screens/Profile';
import Settings from '@screens/Settings';

import ROUTES from '@constants/routes';
import colors from '@src/constants/colors';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackNavitagion() {
  return (
    <ProfileStack.Navigator
      initialRouteName={ROUTES.Profile}
      screenOptions={{
        headerTitle: props => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: 290,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                color: colors.black,
              }}>
              {props.children}
            </Text>
          </View>
        ),
        headerStyle: { backgroundColor: colors.fourth },
      }}>
      <ProfileStack.Screen
        name={ROUTES.Profile}
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen name={ROUTES.Settings} component={Settings} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNavitagion;
