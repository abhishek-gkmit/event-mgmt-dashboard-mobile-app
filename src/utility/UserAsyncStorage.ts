import AsyncStorage from '@react-native-async-storage/async-storage';

import { USERS, LOGGED_IN_USER_ID } from '@constants/storageKeys';
import { cloneObject } from '@utility/formatters';

async function getAllUsers() {
  const usersString = await AsyncStorage.getItem(USERS);

  if (!usersString) {
    return [];
  }

  return JSON.parse(usersString) as Users;
}

async function getLoggedInUserId(): Promise<string | null> {
  const loggedInUserId = await AsyncStorage.getItem(LOGGED_IN_USER_ID);

  if (!loggedInUserId) {
    return null;
  }

  return loggedInUserId;
}

async function getUserById(
  usersArray: Users,
  userId: string,
): Promise<User | null> {
  const userData = usersArray?.find(({ id }) => id === userId);

  if (!userData) return null;

  return userData;
}

async function getUserByEmail(usersArray: Users, email: string) {
  const userData = usersArray.find(({ email: userEmail }) => userEmail === email);

  return userData || null;
}

async function getUserByUsername(usersArray: Users, username: string) {
  const userData = usersArray?.find(
    ({ username: userUsername }) => userUsername === username,
  );

  return userData || null;
}

async function addUser(usersArray: Users, userData: User) {
  // + '' is used here to convert miliseconds into string
  const userDataWithId: User = cloneObject(userData);
  userDataWithId.id = Date.now() + '';

  usersArray = cloneObject(usersArray);

  try {
    await AsyncStorage.setItem(USERS, JSON.stringify(usersArray));
  } catch (err) {
    console.error(err);
  }

  return usersArray;
}

async function updateUser(usersArray: Users, userData: User) {
  if (!userData.id) {
    throw new Error('User does not have id');
  }

  usersArray = usersArray.map(user => {
    if (user.id === userData.id) {
      return cloneObject(userData);
    }
    return user;
  });

  try {
    await AsyncStorage.setItem(USERS, JSON.stringify(usersArray));
  } catch (err) {
    console.error(err);
  }

  return usersArray;
}

async function deleteUser(usersArray: Users, user: User) {
  if (!user.id) {
    throw new Error('User does not have id');
  }

  return await deleteUserWithId(usersArray, user.id);
}

async function deleteUserWithId(usersArray: Users, userId: string) {
  usersArray = usersArray.filter(({ id }) => id === userId);

  try {
    await AsyncStorage.setItem(USERS, JSON.stringify(usersArray));
  } catch (err) {
    console.error(err);
  }

  return usersArray;
}

async function usernameExists(usersArray: Users, username: string) {
  const user = usersArray.find(({ username: uname }) => uname === username);

  // !! converts user into boolean
  return !!user;
}

async function emailExists(usersArray: Users, email: string) {
  const user = usersArray.find(({ email: userEmail }) => userEmail === email);

  // !! converts user into boolean
  return !!user;
}

async function setLoggedInUser(userId: string) {
  await AsyncStorage.setItem(LOGGED_IN_USER_ID, userId);
}

async function resetLoggedInUser() {
  await AsyncStorage.removeItem(LOGGED_IN_USER_ID);
}

const API = {
  getAllUsers,
  getLoggedInUserId,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  usernameExists,
  emailExists,
  getUserByEmail,
  setLoggedInUser,
  resetLoggedInUser,
  getUserByUsername,
};

export default API;
