//login page
var emailEnter = document.getElementById("emailEnter");
var passwordEnter = document.getElementById("passEnter");
var loginBtn = document.getElementById("login");
var loginMassage = document.getElementById("loginMassage");

var userArr = JSON.parse(localStorage.getItem("user"));

loginBtn.addEventListener("click", function () {
  enter();
});

//login page

function check() {
  console.log(userArr[0].userEmail);
  for (var i = 0; i < userArr.length; i++) {
    if (
      userArr[i].userEmail == emailEnter.value &&
      userArr[i].userPassword == passwordEnter.value
    ) {
      localStorage.setItem("name", userArr[i].userName);
      return true;
    }
  }
  return false;
}

function enter() {
  if (check()) {
    window.location.href = "./html/home.html";
  } else {
    loginMassage.classList.remove("d-none");
    loginMassage.classList.add("d-block");
  }
}

//home
