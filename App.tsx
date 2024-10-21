import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from '@contexts/UserContextProvider';
import MainNavigator from '@components/MainNavigator/MainNavigator';

import globalStyles from '@src/styles/globalStyles';
import colors from '@src/constants/colors';

function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.fourth} />
      <SafeAreaView style={[globalStyles.flex, globalStyles.bgContainer]}>
        <UserContextProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </UserContextProvider>
      </SafeAreaView>
    </>
  );
}

export default App;
