var signBtn = document.getElementById("signBtn");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var passwordIcon = document.getElementById("password-icon");
var inputPassword = document.getElementById("inputPassword");
var popup = document.querySelector(".popup");

signBtn.addEventListener("click", function(){
    popup.style.display = "flex";
});
window.onclick = function(event) {
    if (event.target == signBtn) {
        signBtn.style.display = "none";
    }
}
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
