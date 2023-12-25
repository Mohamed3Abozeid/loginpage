//sing up page
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("mail");
var passwordInput = document.getElementById("pass");
var massage = document.getElementById("massage");
var signUp = document.getElementById("signUp");


var userArr = [];
if (localStorage.getItem("user") != null) {
  userArr = JSON.parse(localStorage.getItem("user"));
}
signUp.addEventListener("click", function () {
  if (checkEmail()) {
    massageCheak();
    addUser();
  } else {
    massageCheak();
  }
});

//sign up page

function addUser()
{
  var user = {
    userName: nameInput.value,
    userEmail: emailInput.value,
    userPassword: passwordInput.value,
  };

  userArr.push(user);
  localStorage.setItem("user", JSON.stringify(userArr));
}

function checkEmail() {
  for (var i = 0; i < userArr.length; i++) {
    if (userArr[i].userEmail == emailInput.value) {
      return false;
    }
  }
  return true;
}

function massageCheak() {
  if (checkEmail()) {
    {
      massage.classList.remove("d-none", "text-danger");
      massage.classList.add("d-block", "text-success");
    }
    massage.innerHTML = "Sucses";
  } else {
    {
      massage.classList.remove("d-none", "text-success");
      massage.classList.add("d-block", "text-danger");
    }
    massage.innerHTML = "email already exists";
  }
}
