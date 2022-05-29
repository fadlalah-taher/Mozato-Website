<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");

$fullname = $_POST["full_name"];
$email = $_POST["email"];
$password = $_POST["password"];
$phonenumber = $_POST["phone_number"];
$address = $_POST["address"];
$gender = $_POST["gender"];
$age = $_POST["age"];
$user_role = 0;

$query = $mysqli->prepare("INSERT INTO users(full_name, email, password, phone_number, address, user_role, gender, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("sssssiii", $fullname, $email, $password, $phonenumber, $address, $gender, $age, $user_role);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>