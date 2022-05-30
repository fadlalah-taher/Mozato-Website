var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var admin = document.getElementById("admin");
var about = document.getElementById("about");

console.log("helo");
icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});


window.onload = (function(){
    var user_id = localStorage.getItem("user_id");
    var data = new FormData()
    data.append("user_id", user_id);
    axios({
        method: 'post',
        url: 'http://localhost/Mozato/php/home.php',
        data: data,
    })
    .then(function (response) {
        console.log(response.data[0]["user_role"]);
        if(response.data[0]["user_role"] == 1){
            admin.style.display = "flex";
            admin.style.marginRight = "-8%";
            admin.style.marginTop = "-5%";
            admin.style.justifyContent = "end";
        }
        else{
            admin.style.display = "none";
        }
        }
      ) 
});


