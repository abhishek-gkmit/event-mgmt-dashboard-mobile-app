import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from '@navigation/AuthNavigator';

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
