import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '@screens/Dashboard';

import ROUTES from '@constants/routes';

const BottomTabs = createBottomTabNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator initialRouteName={ROUTES.Dashboard}>
        <BottomTabs.Screen name={ROUTES.Dashboard} component={Dashboard} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
