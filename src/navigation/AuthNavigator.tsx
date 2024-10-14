import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Login';
import Signup from '@screens/Signup';

import ROUTES from '@constants/routes';

const Stack = createNativeStackNavigator<StackParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name={ROUTES.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.Signup}
        component={Signup}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
