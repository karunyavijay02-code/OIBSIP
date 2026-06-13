function register(){

let username =
document.getElementById("regUsername").value;

let password =
document.getElementById("regPassword").value;

if(username === "" || password === ""){
alert("Please fill all fields");
return;
}

localStorage.setItem("username", username);
localStorage.setItem("password", password);

alert("Registration Successful");

window.location.href = "index.html";
}

function login(){

let username =
document.getElementById("loginUsername").value;

let password =
document.getElementById("loginPassword").value;

let storedUser =
localStorage.getItem("username");

let storedPass =
localStorage.getItem("password");

if(
username === storedUser &&
password === storedPass
){

localStorage.setItem("loggedIn","true");

window.location.href =
"dashboard.html";

}
else{

alert("Invalid Username or Password");

}
}

function logout(){

localStorage.removeItem("loggedIn");

window.location.href =
"index.html";

}