import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '@screens/Dashboard';
import Profile from '@screens/Profile';

import ROUTES from '@constants/routes';
import colors from '@constants/colors';

import EventListStackNavigation from '@navigation/EventListStackNavigation';

const BottomTabs = createBottomTabNavigator<TabsParamList>();

function BottomTabsNavigation() {
  return (
    <BottomTabs.Navigator initialRouteName={ROUTES.Dashboard}>
      <BottomTabs.Screen
        name={ROUTES.Dashboard}
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.primary : colors.gray}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.EventListNavigation}
        component={EventListStackNavigation}
        options={{
          title: 'Event List',
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={focused ? colors.primary : colors.gray}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.Profile}
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, size}) => (
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
