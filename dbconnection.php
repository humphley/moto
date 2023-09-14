<?php
$_SERVER="localhost";
$username = "root";
$password=""; 
$db_name="mandazihumph";

$conn=mysqli_connect($_SERVER,$username,$password,$db_name);
if(mysqli_connect_errno()) {
    die("failed to connect with MySQL:". mysqli_connect_error());}

?>