<?php 
$host="localhost";
$user="root";
$password="";
$bd="coffee_shop";

$conection= new mysqli($host,$user,$password,$bd);

if($conection->connect_errno){
    echo "Failed conection";
    exit();
}
else {
    echo"Success conection";
}

?>