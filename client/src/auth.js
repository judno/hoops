const TOKEN = "token";

export function login() {
  return new Promise((resolve) => {
    FB.login(function (response) {
      localStorage.setItem(TOKEN, response.authResponse.accessToken);
      resolve();
    });
  });
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}
