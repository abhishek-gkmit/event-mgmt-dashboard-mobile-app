import {
  BottomTabBarProps,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type StackParamList = {
    Login: undefined;
    Signup: undefined;
    BottomTabs: undefined;
  };

  type LoginScreenParamList = NativeStackScreenProps<StackParamList, 'Login'>;
  type SignupScreenParamList = NativeStackScreenProps<StackParamList, 'Signup'>;

  type TabsParamList = {
    Dashboard: undefined;
    ProfileStack: undefined;
    EventListStack: undefined;
  };

  type DashboardScreenParamList = BottomTabScreenProps<
    TabsParamList,
    'Dashboard'
  >;

  type EventListNavigation = BottomTabScreenProps<
    TabsParamList,
    'EventListStack'
  >;

  type ProfileStackNavigation = BottomTabScreenProps<
    TabsParamList,
    'ProfileStack'
  >;

  type EventStackParamList = {
    EventList: undefined;
    AddEditEvent: {
      editEventId: string | null;
    };
    EventInfo: {
      eventId: string | null;
    };
  };

  type EventListScreenParamList = NativeStackScreenProps<
    EventStackParamList,
    'EventList'
  >;

  type AddEditEventScreenParamList = NativeStackScreenProps<
    EventStackParamList,
    'AddEditEvent'
  >;

  type EventInfoScreenParamList = NativeStackScreenProps<
    EventStackParamList,
    'EventInfo'
  >;

  type ProfileStackParamList = {
    Profile: undefined;
    Settings: undefined;
  };

  type ProfileScreenParamList = NativeStackScreenProps<
    ProfileStackParamList,
    'Profile'
  >;
  type SettingsScreenParamList = NativeStackScreenProps<
    ProfileStackParamList,
    'Settings'
  >;
}
