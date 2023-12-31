var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var warningName = document.getElementById("warningName");
var checkBox = document.getElementById("flexCheckDefault")
var warningEmail = document.getElementById("warningEmail");

var warningPassword = document.getElementById("warningPassword");

var signUpBtn = document.querySelector("button");

var alertBox = document.querySelector("#layer");

var alertBoxBtn = document.querySelector("#innerBox button");

var alertCloseIcon = document.querySelector("#innerBox i");

var userList = [];


if (localStorage.getItem("websiteUsers") != null ) {
  userList = JSON.parse(localStorage.getItem("websiteUsers"));
}



signUpBtn.addEventListener("click", addUser);
function addUser() {
  if (nameValidation() && emailValidation() && passwordValidation() && checkBox.checked) {
    var userExists = false;

    for (var i = 0; i < userList.length; i++) {
      if (userList[i].name === fullName.value || userList[i].email === email.value) {
        userExists = true;
        break;
      }
    }

    if (!userExists) {
      var user = {
        name: fullName.value,
        email: email.value,
        password: password.value,
      };

      userList.push(user);
      localStorage.setItem("websiteUsers", JSON.stringify(userList));

      goToLogin();
    } else {
      alertBox.classList.remove("d-none");
      alertBox.classList.add("d-flex");
    }
  }
}





fullName.addEventListener("change", nameValidation);
function nameValidation() {
  var regex = /^[a-zA-Z ]{2,30}$/;

  if (regex.test(fullName.value) == true) {
    fullName.classList.add("is-valid");
    fullName.classList.remove("is-invalid");
    warningName.classList.add("d-none");
    return true;
  } else {
    fullName.classList.add("is-invalid");
    fullName.classList.remove("is-valid");
    warningName.classList.remove("d-none");

    return false;
  }
}

email.addEventListener("change", emailValidation);
function emailValidation() {
  var regex =
  /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})|([0-9]{11})$/
  if (regex.test(email.value) == true) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    warningEmail.classList.add("d-none");
    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    warningEmail.classList.remove("d-none");

    return false;
  }
}

password.addEventListener("change", passwordValidation);
function passwordValidation() {
  var regex = /^[0-9a-zA-Z#_]{8,10}$/;

  if (regex.test(password.value) == true) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    warningPassword.classList.add("d-none");
    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    warningPassword.classList.remove("d-none");

    return false;
  }
}

function goToLogin() {
  window.location.href = "loginPage.html";
}

alertBoxBtn.addEventListener("click",closeAlert );
alertCloseIcon.addEventListener("click",closeAlert );
document.addEventListener("keyup", function(event)
{
    if(event.key == "Escape")
    {
        closeAlert()

    }

    else if (event.key == "Enter")
    {
      closeAlert()
    }
})

function closeAlert()
{

    alertBox.classList.add("d-none");
    alertBox.classList.remove("d-flex");

}





// function addUser() {
//   if (
//     nameValidation() &&
//     emailValidation() &&
//     passwordValidation() &&
//     checkBox.checked == true 
//   ) 

//   {
//     for (var i = 0; i < userList.length; i++) {
//       if (
//         userList[i].name != fullName.value ||
//         userList[i].email != email.value
//       ) {
//         var user = {
//           name: fullName.value,
//           email: email.value,
//           password: password.value,
//         };

//         userList.push(user);

//         localStorage.setItem("websiteUsers", JSON.stringify(userList));

//         goToLogin();

//         break
//       }

//        else
//         {
//         alertBox.classList.remove("d-none");
//         alertBox.classList.add("d-flex");
//       }
//     }
//   }
// }