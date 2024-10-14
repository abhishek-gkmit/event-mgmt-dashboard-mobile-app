import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '@screens/Dashboard';

const BottomTabs = createBottomTabNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator initialRouteName="Dashboard">
        <BottomTabs.Screen name="Dashboard" component={Dashboard} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
