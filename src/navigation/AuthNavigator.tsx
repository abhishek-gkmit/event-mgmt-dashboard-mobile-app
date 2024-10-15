import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '@screens/Login';
import Signup from '@screens/Signup';

import BottomTabsNavigation from '@navigation/BottomTabsNavigation';

import ROUTES from '@constants/routes';

import API from '@utility/UserAsyncStorage';
import {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator} from 'react-native';

const Stack = createNativeStackNavigator<StackParamList>();

function AuthNavigator() {
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    async function setupLoggedInUserId() {
      const user = await API.getLoggedInUser();
      if (user && user.id) {
        setLoggedInUserId(user.id);
        setShowLoading(false);
      }
    }

    setupLoggedInUserId();
  }, []);

  const activityIndicator = useMemo(() => {
    return showLoading ? <ActivityIndicator animating={showLoading} /> : null;
  }, [showLoading]);

  const navigator = useMemo(() => {
    return showLoading ? null : (
      <Stack.Navigator
        initialRouteName={
          loggedInUserId ? ROUTES.BottomTabsNavigation : ROUTES.Login
        }>
        <Stack.Screen
          name={ROUTES.Login}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.Signup}
          component={Signup}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.BottomTabsNavigation}
          component={BottomTabsNavigation}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    );
  }, [showLoading]);

  return (
    <>
      {activityIndicator}

      {navigator}
    </>
  );
}

export default AuthNavigator;
