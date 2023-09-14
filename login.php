<?php
session_start();

//database connection
require_once('C:\xampp\htdocs\OMARI\dbconnection.php');

//setting
if(isset($_POST['submit']))
{
    //fetch form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO login  (username, password)
        VALUES('$username','$password') ";
        
        if($conn->query($query)==TRUE)
        {
            echo "login was successfull";
        }
        else
        {
            echo "Error: " . $query . "<br>" . $conn->error;
        }

        // Close the connection
        $conn->close();
}
?>