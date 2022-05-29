<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");
$user_id = $_POST["user_id"];
$query = $mysqli->prepare("Select user_role from users where user_id = ? ");
$query->bind_param("i",$user_id);
$query->execute();
$array = $query->get_result();
$response = [];
while($user = $array->fetch_assoc()){
    $response[] = $user;
} 
$json = json_encode($response);
echo $json;

?>