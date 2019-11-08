<?php
$hostname="localhost";
$username="root";
$password="";
$dbname="vehicle";

 
//Connect to the database
$connection = mysql_connect($hostname, $username, $password);
mysql_select_db($dbname, $connection);
 
 
?>