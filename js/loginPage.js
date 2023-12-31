var email = document.getElementById("email");
var password = document.getElementById("password");

var warningPassword = document.getElementById("warningPassword");

var warningEmail = document.getElementById("warningEmail");

var loginBtn = document.querySelector("button");

var userList = [];

if (localStorage.getItem("websiteUsers") != null) {
  userList = JSON.parse(localStorage.getItem("websiteUsers"));
}

email.addEventListener("change", emailValidation);
function emailValidation() {
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email === email.value)
     {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      warningEmail.classList.add("d-none");
      localStorage.setItem("userName", JSON.stringify(userList[i].name ))
      return true;
    }

  }

      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
      warningEmail.classList.remove("d-none");
      return false;

}


password.addEventListener("change", passwordValidation)
function passwordValidation()
{
    for( var i =0; i<userList.length; i++)
    {
        if( userList[i].password == password.value)
        {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            warningPassword.classList.add("d-none");
            return true;

        }
    }

        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        password.classList.remove("d-none");
        return false;

}

loginBtn.addEventListener("click" , function()
{
    if(passwordValidation() == true && emailValidation() == true)
    {
        window.location.href = 'homePage.html';
    }

    else
    {
        window.alert("wrong password");
    }


}

)


