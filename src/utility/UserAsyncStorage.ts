import AsyncStorage from '@react-native-async-storage/async-storage';

import { USERS, LOGGED_IN_USER_ID } from '@constants/storageKeys';

let usersArray: User[];
let loggedInUserId: string;

// IIFE to setup the storage variables
(async function setup() {
  const usersString = await AsyncStorage.getItem(USERS);

  if (!usersString) {
    // initializing empty array in USERS
    await AsyncStorage.setItem(USERS, '[]');
    usersArray = [];
    return;
  }

  usersArray = JSON.parse(usersString);

  const loggedInUserIdString = await AsyncStorage.getItem(LOGGED_IN_USER_ID);

  if (!loggedInUserIdString) {
    loggedInUserId = '';
    return;
  }

  loggedInUserId = JSON.parse(loggedInUserIdString);
})();

async function getLoggedInUser(): Promise<User | null> {
  if (loggedInUserId && loggedInUserId === '') {
    return null;
  }

  const userData = await getUserById(loggedInUserId);

  return userData;
}

async function getUserById(userId: string): Promise<User | null> {
  const userData = usersArray.find(({ id }) => id === userId);

  if (!userData) return null;

  return userData;
}

async function getUserByEmail(email: string) {
  const userData = usersArray.find(({ email: userEmail }) => userEmail === email);

  return userData || null;
}

async function addUser(userData: User) {
  // + '' is used here to convert miliseconds into string
  const userDataWithId: User = { ...userData, id: Date.now() + '' };

  usersArray.push(userDataWithId);

  try {
    await AsyncStorage.setItem(USERS, JSON.stringify(usersArray));
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
}

async function updateUser(userData: User) {
  if (!userData.id) {
    throw new Error('User does not have id');
  }

  usersArray = usersArray.map(user => {
    if (user.id === userData.id) {
      return { ...userData };
    }
    return user;
  });

  try {
    await AsyncStorage.setItem(USERS, JSON.stringify(usersArray));
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
}

async function deleteUser(user: User) {
  if (!user.id) {
    throw new Error('User does not have id');
  }

  await deleteUserWithId(user.id);
  return true;
}

async function deleteUserWithId(userId: string) {
  usersArray = usersArray.filter(({ id }) => id === userId);

  try {
    await AsyncStorage.setItem(USERS, JSON.stringify(usersArray));
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
}

async function usernameExists(username: string) {
  const user = usersArray.find(({ username: uname }) => uname === username);

  // !! converts user into boolean
  return !!user;
}

async function emailExists(email: string) {
  const user = usersArray.find(({ email: userEmail }) => userEmail === email);

  // !! converts user into boolean
  return !!user;
}

async function setLoggedInUser(userId: string) {
  await AsyncStorage.setItem(LOGGED_IN_USER_ID, userId);
}

const API = {
  getLoggedInUser,
  addUser,
  updateUser,
  deleteUser,
  usernameExists,
  emailExists,
  getUserByEmail,
  setLoggedInUser,
};

export default API;
