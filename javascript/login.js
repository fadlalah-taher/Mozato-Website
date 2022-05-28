var signBtn = document.getElementById("signBtn");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var passwordIcon = document.getElementById("password-icon");
var passwordRegister = document.getElementById("passwordRegister-icon");
var inputPassword = document.getElementById("inputPassword");
var inputRegister = document.getElementById("inputPassword-register");
var popup = document.querySelector(".popup");


// burger Menu

signBtn.addEventListener("click", function(){
    popup.style.display = "flex";
    console.log("Hello flex");
});
window.onclick = function(event) {
    if (event.target == signBtn) {
        signBtn.style.display = "none";
        console.log("hello window none");
    }
}

// hidden password

passwordIcon.addEventListener("click", function(){
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
passwordRegister.addEventListener("click", function(){
    if(inputRegister.type === 'password'){
        inputRegister.type = "text";
        hide3.style.display = "block";
        hide4.style.display = "none";
      }
      else{
        inputRegister.type = "password";
        hide3.style.display = "none";
        hide4.style.display = "block";

      }
});

