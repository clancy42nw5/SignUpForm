var userPassword = document.getElementById("user_password");

userPassword.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
userPassword.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  