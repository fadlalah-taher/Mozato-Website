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

// input fields
var fullName = document.getElementById("name");
var age = document.getElementById("age");
var address = document.getElementById("address");
var phoneNumber = document.getElementById("phonenumber");
var email = document.getElementById("email");
var inputPasswordprofile = document.getElementById("inputPassword");

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
/*console.log(fullName);
console.log(age.value);
console.log(phoneNumber.value);
console.log(email.value);
console.log(address.value);*/
/////
doneBtn.addEventListener("click", function(){
  //let data = new FormData(editForm);
  let data = new FormData();
  //console.log(fullName);
  //console.log(fullName.value);
  
  data.append('full_name', fullName.value);
  data.append('age', age.value);
  data.append('address', address.value);
  data.append('phone_number', phoneNumber.value);
  data.append('password', inputPasswordprofile.value);
  data.append('email', email.value);
  data.append('user_id', window.localStorage.getItem("user_id"));
  axios({
      method: 'post',
      url: 'http://localhost/Mozato/php/profile.php',
      data: data,
  })
  .then(function (response) {
      if(response.data == "mess around"){
        profileHeader.innerHTML = "Fill the fields below";
      }else{
        console.log(response.data["success"]);
        console.log(response.data[-1]);
        profileHeader.innerHTML = "Updated Successfully";
        //clear fields
        age.value = '';
        email.value = '';
        fullName.value = '';
        inputPassword.value = '';
        phoneNumber.value = '';
        address.value = '';
      }
    }
  )
  //console.log(window.localStorage.getItem("user_id"));
});
