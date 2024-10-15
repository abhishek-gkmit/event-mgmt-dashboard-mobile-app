import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from '@contexts/UserContextProvider';
import MainNavigator from '@components/MainNavigator/MainNavigator';

import globalStyles from '@src/styles/globalStyles';

function App() {
  return (
    <SafeAreaView
      style={[globalStyles.flexContainer, globalStyles.bgContainer]}>
      <UserContextProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </UserContextProvider>
    </SafeAreaView>
  );
}

export default App;
