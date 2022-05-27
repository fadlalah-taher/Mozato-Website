var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
console.log("helo");
icon.addEventListener("click", function(){
    myNav.style.width = "100%";
    console.log("hello word");
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});