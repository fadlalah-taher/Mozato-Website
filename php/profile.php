<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");

$fullname = $_POST["full_name"];
$email = $_POST["email"];
$password = hash("sha256", $_POST["password"]);
$phonenumber = $_POST["phone_number"];  
$address = $_POST["address"];
$age = $_POST["age"];
$user_id = $_POST["user_id"];
echo $user_id;
echo $fullname;

$query = $mysqli->prepare("UPDATE users SET full_name= '$fullname', email='$email', password='$password', phone_number= '$phonenumber', address = '$address', age = '$age' WHERE user_id = '$user_id'");
/*$query->bind_param("sssisi", $fullname, $email, $password, $phonenumber, $address, $age);*/
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>