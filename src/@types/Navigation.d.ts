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
    Profile: undefined;
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
  type ProfileScreenParamList = BottomTabScreenProps<TabsParamList, 'Profile'>;

  type EventStackParamList = {
    EventList: undefined;
    AddEvent: undefined;
    EditEvent: {
      eventId: string;
    };
  };

  type EventListStackParamList = NativeStackScreenProps<
    EventStackParamList,
    'EventList'
  >;
  type AddEventStackParamList = NativeStackScreenProps<
    EventStackParamList,
    'AddEvent'
  >;
  type EditEventStackParamList = NativeStackScreenProps<
    EventStackParamList,
    'EditEvent'
  >;
}
