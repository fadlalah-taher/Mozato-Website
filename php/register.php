<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Header: *");
include("connection.php");

if($_POST["full_name"] == ""){
    die("mess around");
}else{
    $fullname = $_POST["full_name"];
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
if($_POST["male"] == "" && $_POST["female"] == ""){
    die("mess around");
}else if($_POST["male"] == ""){
    $gender = $_POST["female"];
}
else{
    $gender = $_POST["male"];   
}
/*
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
}*/
$user_role = 0;

$query = $mysqli->prepare("INSERT INTO users(full_name, email, password, phone_number, address, user_role, gender, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("sssssiii", $fullname, $email, $password, $phonenumber, $address,$user_role, $gender, $age);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>