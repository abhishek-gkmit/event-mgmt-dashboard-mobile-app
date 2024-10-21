interface UserSettings {
  filter: 'today' | 'this-week' | 'this-month';
  sortBy: 'datetime' | 'attendees' | 'name';
  timeFormat: '12' | '24';
}

interface User extends SignupFormData {
  id?: string;
  events: MainEvent[];
  settings: UserSettings;
}

type Users = User[];

interface UserContextValues {
  users: Users;
  loggedInUser: User;
  loggedInUserId: string | null;
  setLoggedInUserId: (userId: string | null) => void;
  setUsers: (users: Users) => void;

  events: MainEvent[];

  addEvent: (eventData: MainEvent) => void;
  updateEvent: (eventData: MainEvent) => void;
  deleteEvent: (eventData: MainEvent) => void;
}
