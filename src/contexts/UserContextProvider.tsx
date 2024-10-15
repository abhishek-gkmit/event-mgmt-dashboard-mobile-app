import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState, createContext } from 'react';

import API from '@utility/UserAsyncStorage';
import { cloneObject } from '@utility/formatters';

const UserContext = createContext<UserContextValues>({} as UserContextValues);

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<Users>([]);
  const [loggedInUser, setLoggedInUser] = useState<User>({} as User);
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

  const [events, setEvents] = useState<MainEvent[]>([]);

  const addEvent = useCallback(
    async function addEvent(eventData: MainEvent) {
      const newEvent = {
        ...eventData,
        id: Date.now(),
        attendeeList: [],
      };

      loggedInUser.events.push(newEvent);

      const newUsers = await API.updateUser(users, cloneObject(loggedInUser));
      setUsers(newUsers);
    },
    [loggedInUser],
  );

  const updateEvent = useCallback(
    async function updateEvent(eventData: MainEvent) {
      const newEvents = loggedInUser.events.map(event =>
        event.id === eventData.id ? eventData : event,
      );

      loggedInUser.events = newEvents;

      const newUsers = await API.updateUser(users, cloneObject(loggedInUser));
      setUsers(newUsers);
    },
    [loggedInUser],
  );

  const deleteEvent = useCallback(
    async function deleteEvent(eventData: MainEvent | undefined) {
      if (!eventData) {
        return;
      }

      const newEvents = loggedInUser.events.filter(
        ({ id }) => id !== eventData.id,
      );

      loggedInUser.events = newEvents;

      const newUsers = await API.updateUser(users, cloneObject(loggedInUser));
      setUsers(newUsers);
    },
    [loggedInUser],
  );

  useEffect(() => {
    const loggedInUser = users.find(({ id }) => id === loggedInUserId);
    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
      setEvents(loggedInUser.events);
    }
  }, [users]);

  useEffect(() => {
    API.getAllUsers().then(users => setUsers(users));

    API.getLoggedInUserId().then(loggedInUserId =>
      setLoggedInUserId(loggedInUserId),
    );
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loggedInUser,
        loggedInUserId,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        setLoggedInUserId: (userId: string) => setLoggedInUserId(userId),
      }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
