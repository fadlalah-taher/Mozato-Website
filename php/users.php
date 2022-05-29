<?php

header('Access-Control-Allow-Origin: *');
include("connection.php");
$query = $mysqli->prepare("SELECT full_name, email, phone_number, address, gender , age from users");
$query->execute();
$array = $query->get_result();
$response = [];
while($todo = $array->fetch_assoc()){
    $response[] = $todo;
} 
$json = json_encode($response);
echo $json;

?>