import colors from '@src/constants/colors';
import { UserContext } from '@src/contexts/UserContextProvider';
import AuthNavigator from '@src/navigation/AuthNavigator';
import BottomTabsNavigation from '@src/navigation/BottomTabsNavigation';
import globalStyles from '@src/styles/globalStyles';
import { useContext, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, View, Platform } from 'react-native';

function MainNavigator() {
  const { loggedInUserId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [loggedInUserId]);

  useEffect(() => {
    setLoading(true);
  }, []);

  const navigator = useMemo(() => {
    return loggedInUserId && loggedInUserId !== 'no_user' ? (
      <BottomTabsNavigation />
    ) : (
      <AuthNavigator />
    );
  }, [loggedInUserId]);

  return (
    <>
      {loading ? (
        <View style={globalStyles.flexContainer}>
          <ActivityIndicator
            animating={true}
            color={colors.primary}
            size={Platform.OS === 'ios' ? 'large' : 100}
          />
        </View>
      ) : (
        navigator
      )}
    </>
  );
}

export default MainNavigator;
