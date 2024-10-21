import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddEditEvent from '@screens/AddEditEvent';
import EventList from '@screens/EventList';
import EventInfo from '@screens/EventInfo';

import ROUTES from '@constants/routes';
import { Text, View } from 'react-native';
import colors from '@src/constants/colors';

const EventListStack = createNativeStackNavigator<EventStackParamList>();

function getHeading(title: string): string {
  switch (title.toLowerCase()) {
    case 'eventinfo':
      return 'Event Info';
    default:
      return title;
  }
}

function EventListNavigation() {
  return (
    <EventListStack.Navigator
      initialRouteName={ROUTES.EventList}
      screenOptions={{
        headerTitle: props => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: 290,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                color: colors.black,
              }}>
              {getHeading(props.children)}
            </Text>
          </View>
        ),
        headerStyle: { backgroundColor: colors.fourth },
      }}>
      <EventListStack.Screen
        name={ROUTES.EventList}
        component={EventList}
        options={{ headerShown: false }}
      />
      <EventListStack.Screen
        name="EventInfo"
        component={EventInfo}
        initialParams={{ eventId: null }}
      />
      <EventListStack.Screen
        name={ROUTES.AddEditEvent}
        component={AddEditEvent}
        initialParams={{ editEventId: '' }}
      />
    </EventListStack.Navigator>
  );
}

export default EventListNavigation;
