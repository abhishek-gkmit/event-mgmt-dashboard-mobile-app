interface User extends SignupFormData {
  id?: string;
  events: MainEvent[];
}

type Users = User[];

interface UserContextValues {
  users: Users;
  loggedInUser: User;
  loggedInUserId: string | null;
  setLoggedInUserId: (userId: string) => void;

  events: MainEvent[];

  addEvent: (eventData: MainEvent) => void;
  updateEvent: (eventData: MainEvent) => void;
  deleteEvent: (eventData: MainEvent) => void;
}
