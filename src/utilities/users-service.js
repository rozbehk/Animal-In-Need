import * as usersAPI from './users-api';

export function getUser() {
  console.log(getToken())
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function login(credentials) {
  try {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
  } catch {
    throw new Error('Bad Credentials');
  }
}

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js service module
  try {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
  } catch {
    throw new Error('Invalid Sign Up');
  }
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return 'null';
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
