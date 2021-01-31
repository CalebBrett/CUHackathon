
let users = [];
//password 6afGttJ2iMA875sk
function signUp(){
  /*var email = document.getElementById("email").value;
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  */
  newUser = {
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
}

  users[users.length] = newUser;
  console.log(users.length);
}
