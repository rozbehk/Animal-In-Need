const getPayload = () => {
  const token = getToken();
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length < 3) return false;
  return JSON.parse(window.atob(parts[1]));
};


export function setToken (token) {
  window.localStorage.setItem("token", token);
};

export function setUsername(username) {
  window.localStorage.setItem("username", username);
};

export function getToken (){
  return window.localStorage.getItem("token");
};

export function getUsername () {
  return window.localStorage.getItem("username");
};


export function isOwner (id) {
  const userId = getPayload().sub;
  return userId === id;
};

export function getUser(){
  return getPayload().sub;
};

export function isAuthenticated() {
  const payload = getPayload();
  if (!payload) return false;
  const now = Math.round(Date.now() / 1000);
  return now < payload.exp;
};

export async function logout(req, res) {
 
}
