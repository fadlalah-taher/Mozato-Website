<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");

$fullname = $_POST["full_name"];
$email = $_POST["email"];
//$password = hash("sha256", $_POST["password"]);
$phonenumber = $_POST["phone_number"];  
$address = $_POST["address"];
$gender = $_POST["gender"];
$age = $_POST["age"];
//$user_role = 0;

$query = $mysqli->prepare("UPDATE users(full_name, email, password, phone_number, address, age) SET (?, ?, ?, ?, ?, ?)");
$query->bind_param("sssssi", $fullname, $email, $password, $phonenumber, $address, $age);
$query->execute();

$response = [];
$response["success Updated"] = true;

echo json_encode($response);

?>