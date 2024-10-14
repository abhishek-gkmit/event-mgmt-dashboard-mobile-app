import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '@screens/Dashboard';

import ROUTES from '@constants/routes';

const BottomTabs = createBottomTabNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <BottomTabs.Navigator initialRouteName={ROUTES.Dashboard}>
      <BottomTabs.Screen name={ROUTES.Dashboard} component={Dashboard} />
    </BottomTabs.Navigator>
  );
}

export default MainNavigator;
