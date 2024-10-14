import {
  BottomTabBarProps,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

declare global {
  type MainStackParamList = {
    Dashboard: undefined;
  };

  type DashboardScreenParamList = BottomTabBarProps<
    MainStackParamList,
    'Dashboard'
  >;
}
