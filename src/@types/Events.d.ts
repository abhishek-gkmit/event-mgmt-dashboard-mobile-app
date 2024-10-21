interface Attendee {
  id?: string;
  name: string;
  email: string;
}

interface AttendeeFormHelperProps {
  initFormData: Attendee;
  isEdit: boolean;
  eventId: number;
}

type AttendeeFormData = Pick<Attendee, 'id' | 'name' | 'email'>;
type AttendeeFormErrors = Partial<AttendeeFormData>;

interface EventFormData {
  title: string;
  datetime: string;
  description: string;
  attendees: string;
  attendeeList: Attendee[];
  location: string;
}

type EventFormErrors = Partial<EventFormData>;

interface EventFormHelperProps {
  initFormData: MainEvent;
  isEdit: boolean;
  finish: () => void;
}

interface MainEvent extends EventFormData {
  id?: number;
}

interface EventCardProps {
  event: MainEvent;
  timeFormat: string;
}
