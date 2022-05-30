<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");

if(isset($_POST["full_name"])){
    $fullname = $_POST["full_name"];
}else{
    die("mess around");
}
if(isset($_POST["email"])){
    $email = $_POST["email"];
}else{
    die("mess around");
}
if(isset($_POST["password"])){
    $password = hash("sha256", $_POST["password"]);
}else{
    die("mess around");
}       
if(isset($_POST["phone_number"])){
    $phonenumber = $_POST["phone_number"];  
}else{
    die("mess around");
}
if(isset($_POST["age"])){
    $age = $_POST["age"];
}else{
    die("mess around");
}
if(isset($_POST["gender"])){
    $gender = $_POST["gender"]; 
}else{
    die("mess around");
}
if(isset($_POST["address"])){
    $address = $_POST["address"]; 
}else{
    die("mess around");
}
$user_role = 0;

$query = $mysqli->prepare("INSERT INTO users(full_name, email, password, phone_number, address, user_role, gender, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("sssssiii", $fullname, $email, $password, $phonenumber, $address,$user_role, $gender, $age);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>