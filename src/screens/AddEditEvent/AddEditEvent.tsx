import { useContext, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import EventFormHelper from '@components/EventFormHelper';
import { UserContext } from '@contexts/UserContextProvider';
import ROUTES from '@constants/routes';
import colors from '@constants/colors';

const initFormData: EventFormData = {
  title: '',
  datetime: new Date().toString(),
  description: '',
  attendees: '1',
  attendeeList: [],
  location: '',
};

function getHeading(title: string): string {
  switch (title.toLowerCase()) {
    case 'eventinfo':
      return 'Event Info';
    default:
      return title;
  }
}

function AddEditEvent({ navigation, route }: AddEditEventScreenParamList) {
  const { events } = useContext(UserContext);
  const [editEventId, setEditEventId] = useState<string | null>(null);

  const updateEventInitFormData = useMemo(() => {
    const data = events.find(({ id }) => +route.params.editEventId === id);
    if (data) {
      return data;
    }

    return initFormData;
  }, [route, events]);

  useEffect(() => {
    setEditEventId(route.params.editEventId);
    navigation.setOptions({
      headerTitle: props => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: 300,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
              color: colors.black,
            }}>
            {route.params.editEventId ? 'Update Event' : 'Add Event'}
          </Text>
        </View>
      ),
      headerStyle: { backgroundColor: colors.fourth },
    });
  }, [route]);

  return editEventId ? (
    <EventFormHelper
      initFormData={updateEventInitFormData}
      isEdit={true}
      finish={() => navigation.goBack()}
    />
  ) : (
    <EventFormHelper
      initFormData={initFormData}
      isEdit={false}
      finish={() => navigation.goBack()}
    />
  );
}

export default AddEditEvent;
