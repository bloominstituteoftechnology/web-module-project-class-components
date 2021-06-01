const qs = x => document.querySelector(x);

const ourForm = document.getElementById("ourForm")
const usernameField = document.getElementById("username")
const passwordField = document.getElementById("password");

const registerForm = qs('#register-form');
const register_usernameField = qs('#register-username');
const register_passwordField = qs('#register-password');

// ==============================================
// Register
registerForm.addEventListener("submit", async e => {

  e.preventDefault();

  // const response = await axios.post("/register", { 
  //   username: register_usernameField.value, 
  //   password: register_passwordField.value,
  //   name: 'josh',
  //   email: 'josh@josh.com',
  //   role: 'client'
  // });

  axios.post("/register", { 
    username: register_usernameField.value, 
    password: register_passwordField.value,
    name: 'josh',
    email: 'josh@josh.com',
    role: 'client'
  }).then((response) => {
    console.log('response: ', response);
  }).catch((error) => {
    console.log('error: ', error);
  });

});

// ==============================================
// Login
ourForm.addEventListener("submit", async e => {
  e.preventDefault();
  const response = await axios.post("/login", { username: usernameField.value, password: passwordField.value });
  if (response.data.status == "success") {
    localStorage.setItem("ourToken", response.data.token);
  } else {
    alert("Sorry, try again.");
  }
});

// ==============================================

const secret_button = document.getElementById("getsecret");
secret_button.addEventListener("click", async function () {

  // get token from local storage:
  const token = localStorage.getItem("ourToken");

  const response = await axios.post("/topsecret", { token: token });
  
  if (response.data.status == "success") {
    document.getElementById("message-area").textContent = response.data.message;
  } 
  else {
    document.getElementById("message-area").textContent = "Only logged in users can see this info.";
  }
})

// ==============================================

const logout_button = document.querySelector('#logout-button');
logout_button.addEventListener('click', () => {
  alert('logging out!');
  localStorage.removeItem("ourToken");
});

// ==============================================
