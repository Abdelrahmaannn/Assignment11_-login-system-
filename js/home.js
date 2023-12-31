var userName = document.getElementById("userName");

var exitBtn = document.querySelector("#exitBtn");

if (localStorage.getItem("userName") != null) {
  userName.innerHTML = userName = localStorage.getItem("userName");
}

exitBtn.addEventListener("click", function () {
  window.location.href = "loginPage.html";

  localStorage.removeItem("userName");
});
