var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var profilePassword = document.getElementById("profilePassword-icon");
var inputPassword = document.getElementById("inputPassword");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");

// Burger menu

icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});

// unhidden password

profilePassword.addEventListener("click", function(){
    if(inputPassword.type === 'password'){
        inputPassword.type = "text";
        hide1.style.display = "block";
        hide2.style.display = "none";
      }
      else{
        inputPassword.type = "password";
        hide1.style.display = "none";
        hide2.style.display = "block";

      }
});