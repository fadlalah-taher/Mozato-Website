<?php

include("connection.php");

if($_POST["full_name"] == ""){
    die("mess around");
}else{
    $fullname = $_POST["full_name"];
    echo $_POST["full_name"];
}
if($_POST["email"] == ""){
    die("mess around");
}else{
    $email = $_POST["email"]; 
}
if($_POST["password"] == ""){
    die("mess around");
}else{
    $password = hash("sha256", $_POST["password"]);
}       
if($_POST["phone_number"] == ""){
    die("mess around");
}else{
    $phonenumber = $_POST["phone_number"]; 
}
if($_POST["age"] == ""){
    die("mess around");
}else{
    $age = $_POST["age"];
}
if($_POST["address"] == ""){
    die("mess s around");
}else{
    $address = $_POST["address"]; 
}
$user_id = $_POST["user_id"];

$query = $mysqli->prepare("UPDATE users SET full_name= '$fullname', email='$email', password='$password', phone_number= '$phonenumber', address = '$address', age = '$age' WHERE user_id = '$user_id'");
/*$query->bind_param("sssisi", $fullname, $email, $password, $phonenumber, $address, $age);*/
$query->execute();

$response = [];
$response["success"] = "true";

echo json_encode($response);

?>