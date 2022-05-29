var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var profilePassword = document.getElementById("profilePassword-icon");
var inputPassword = document.getElementById("inputPassword");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var profileForm = document.getElementById("profile-container");

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
window.onload = (function(){
  axios({
    method: 'post',
    url: 'http://localhost/Mozato/php/profile.php',
})
.then(function (response) {
  let profile = response.data;
  profileForm.innerHTML = "";
  profile.forEach(element => {
    let userHtml = `
    <div id="profile-container" class="right-container">
                    <form action="">
                        <img src="../assets/avatar.jpg" alt="">
                        <h1 id="header-profile">Edit Profile</h1>
                        <div class="input-icons">
                            <div class="input-login">
                                <i class='fas fa-arrow-circle-right icon'></i>
                                <input type="text" name="full_name" class="input-field" placeholder="Full Name">
                            </div>
                            <div class="input-login">
                                <i class="far fa-envelope icon"></i>
                                <input type="text" name="email" class="input-field" placeholder="Email address ">
                            </div>
                            <div class="input-login">
                                <i class="fas fa-key icon"></i>
                                <input type="password" name="password" id="inputPassword" class="input-field" placeholder="Password">
                                <span class="inputContainer" id="profilePassword-icon">
                                <i id="hide1" class="far fa-eye icon eye"></i>
                                <i id="hide2" class="far fa-eye-slash icon eye"></i>
                                </span>
                            </div>
                            <div class="input-login">
                                <i class="fa-solid fa-phone icon"></i>
                                <input type="text" placeholder="Phone Number" class="input-field"  name="phone_number" required>
                            </div>
                            <div class="input-login">
                                <i class="fas fa-address-card icon"></i>
                                <input type="text" placeholder="Address" class="input-field"  name="address" required>
                            </div>
                            <div class="input-login">
                                <i class="fa fa-child icon" aria-hidden="true"></i>
                                <input type="number" id="age" name="age" class="input-field" placeholder="Age" min="18" max="80" required>
                            </div>
                       </div>
                        <a href="" class="doneBtn create">Done</a>
                    </form>
                </div>`
                console.log(response);
                profileForm.innerHTML +=userHtml;
              })
              console.log(response);
              }
          )
});
