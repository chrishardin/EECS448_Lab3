function Val(){
    var pwd1 = document.getElementById("first_password").value;
    var pwd2 = document.getElementById("second_password").value;
    if (pwd1 != pwd2)
      alert("Your password does not match.");
    else if(pwd1.length < 8)
      alert("The passwords are not at least 8 characters long.");
    else
      alert("Passwords match.");

};
