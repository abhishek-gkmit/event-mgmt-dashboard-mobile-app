import { UserContext } from '@src/contexts/UserContextProvider';
import AuthNavigator from '@src/navigation/AuthNavigator';
import BottomTabsNavigation from '@src/navigation/BottomTabsNavigation';
import { useContext, useMemo } from 'react';

function MainNavigator() {
  const { loggedInUserId } = useContext(UserContext);

  const navigator = useMemo(() => {
    return loggedInUserId ? <BottomTabsNavigation /> : <AuthNavigator />;
  }, [loggedInUserId]);

  return <>{navigator}</>;
}

export default MainNavigator;
