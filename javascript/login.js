var signBtn = document.getElementById("signBtn");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var passwordIcon = document.getElementById("password-icon");
var passwordRegister = document.getElementById("passwordRegister-icon");
var inputPassword = document.getElementById("inputPassword");
var inputRegister = document.getElementById("inputPassword-register");
var popup = document.querySelector(".popup");
var loginBtn = document.getElementById("loginBtn");
var emailInput = document.getElementById("emailInput");
var registerSection = document.getElementById("register-section");

/* axios register */
var createBtn = document.getElementById("createBtn");
var registerForm = document.getElementById("createAcount");

createBtn.addEventListener("click", function(){
  
  let data = new FormData(registerForm);
            axios({
                method: 'post',
                url: 'http://localhost/Mozato/php/register.php',
                data: data,
            })
            .then(function (response) {
                console.log(response);
                }
            )
});
loginBtn.addEventListener("click", function(){
  let data = new FormData();
            data.append('email', emailInput.value);
            data.append('password', inputPassword.value);
            axios({
                method: 'post',
                url: 'http://localhost/Mozato/php/login.php',
                data: data,
            })
            .then(function (response) {
                window.location = "file:///C:/xampp/htdocs/Mozato/pages/home.html"
                }
            ) 
});

// Adding Register Form

signBtn.addEventListener("click", function(){
    popup.style.display = "flex";
    console.log("Hello flex");
});

window.onclick = function(event) {
  console.log(event.target);
    if (event.target == registerSection) {
      popup.style.display = "none";
        console.log("hello window none");
    }
}

// unhidden password

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

