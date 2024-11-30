import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) => 
  apiFetch('POST', '/users', {
  username, 
  password,
});


export const userSession = ({ username, password }) => 
  apiFetch('POST', '/users/session', {
    username,
    password
  });

 
  const CAPSTONE_SESSION_STORAGE_KEY = 'capstone_session_token';

  //below we can remove the { } since it automatically returns
export const setSessionStorage = (capstoneSessionToken) => localStorage.setItem(CAPSTONE_SESSION_STORAGE_KEY, capstoneSessionToken)

export const getSessionStorage = () => localStorage.getItem(CAPSTONE_SESSION_STORAGE_KEY);


export const removeSessionStorage = () => localStorage.removeItemItem(CAPSTONE_SESSION_STORAGE_KEY);
