<?php
// waiting my partner to finish his work on restaurants to continue..
header('Access-Control-Allow-Origin: *');
include("connection.php");

$query = $mysqli->prepare("SELECT name, img from restaurants");
$query->execute();
$array = $query->get_result();
$response = [];
while($todo = $array->fetch_assoc()){
    $response[] = $todo;
} 
$json = json_encode($response);
echo $json;

?>