<?php
header("Access-Control-Allow-Origin: *");


if(isset($_POST["name"])){
  
    $name = $_POST["name"];
}
if(isset($_POST["surname"])){
  
    $surname = $_POST["surname"];
}
if(isset($_POST["middle"])){
  
    $middle = $_POST["middle"];
}
if(isset($_POST["age"])){
  
    $age = $_POST["age"];
}
if(isset($_POST["email"])){
  
    $email = $_POST["email"];
}
if(isset($_POST["contact"])){
  
    $contact = $_POST["contact"];
}
if(isset($_POST["text"])){
  
    $text = $_POST["text"];
}
echo "$name <br> $surname <br> $middle <br> $age <br> $email <br> $contact <br> $text";

?>

