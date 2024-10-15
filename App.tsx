import {SafeAreaView} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from '@contexts/UserContextProvider';
import MainNavigator from '@components/MainNavigator/MainNavigator';

import globalStyles from '@src/styles/globalStyles';

function App() {
  return (
    <UserContextProvider>
      <SafeAreaView
        style={[globalStyles.viewStyle, globalStyles.safeAreaStyle]}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </UserContextProvider>
  );
}

export default App;
