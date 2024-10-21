import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '@screens/Dashboard';
import Profile from '@screens/Profile';

import ROUTES from '@constants/routes';
import colors from '@constants/colors';

import EventListNavigation from '@navigation/EventListStack';
import ProfileStackNavitagion from '@navigation/ProfileStack';

const BottomTabs = createBottomTabNavigator<TabsParamList>();

function BottomTabsNavigation() {
  return (
    <BottomTabs.Navigator
      initialRouteName={ROUTES.Dashboard}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 0,
          height: 70,
        },
        tabBarLabelStyle: { marginBottom: 10, fontSize: 14, color: colors.black },
      }}>
      <BottomTabs.Screen
        name={ROUTES.Dashboard}
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.primary : colors.gray}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.EventListStack}
        component={EventListNavigation}
        options={{
          title: 'Event List',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={focused ? colors.primary : colors.gray}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.ProfileStack}
        component={ProfileStackNavitagion}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={focused ? colors.primary : colors.gray}
              size={size}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigation;
