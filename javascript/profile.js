var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var profilePassword = document.getElementById("profilePassword-icon");
var inputPassword = document.getElementById("inputPassword");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var profileForm = document.getElementById("profile-container");
var doneBtn = document.getElementById("doneBtn");
var editForm = document.getElementById("editProfile");
var profileHeader = document.getElementById("header-profile");

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

/////
doneBtn.addEventListener("click", function(){
  let data = new FormData(editForm);
  data.append('user_id', window.localStorage.getItem("user_id"));
  axios({
      method: 'post',
      url: 'http://localhost/Mozato/php/profile.php',
      data: data,
  })
  .then(function (response) {
      console.log(response);
      profileHeader.innerHTML = "Updated Successfully";
      }
  )
  //console.log(window.localStorage.getItem("user_id"));
});
