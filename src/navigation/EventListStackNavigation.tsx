import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddEvent from '@screens/AddEvent';
import EditEvent from '@screens/EditEvent';
import EventList from '@screens/EventList';

import ROUTES from '@constants/routes';

const EventListStack = createNativeStackNavigator<EventStackParamList>();

function EventListStackNavigation() {
  return (
    <EventListStack.Navigator initialRouteName="EventList">
      <EventListStack.Screen
        name={ROUTES.EventList}
        component={EventList}
        options={{ headerShown: false }}
      />
      <EventListStack.Screen name={ROUTES.AddEvent} component={AddEvent} />
      <EventListStack.Screen name={ROUTES.EditEvent} component={EditEvent} />
    </EventListStack.Navigator>
  );
}

export default EventListStackNavigation;
