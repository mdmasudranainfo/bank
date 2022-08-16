//
//
//
//
//
//
//

// login valid user
document.getElementById("login-btn").addEventListener("click", function () {
  // get email
  const userEmial = document.getElementById("user-email");
  const emial = userEmial.value;
  //   get password
  const userPassword = document.getElementById("user-password");
  const pass = userPassword.value;
  //   check valid user
  if (emial === "masud@gmail.com" && pass === "1512") {
    window.location.href = "bank.html";
  } else {
    alert("pasle enter valid info");
  }
});
