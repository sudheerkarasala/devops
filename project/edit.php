<?php
require_once("connection.php");
if(count($_POST)>0) {
	$sql = "UPDATE vehicles set userName='" . $_POST["userName"] . "', password='" . $_POST["password"] . "', firstName='" . $_POST["firstName"] . "', lastName='" . $_POST["lastName"] . "' WHERE userId='" . $_POST["userId"] . "'";
	mysqli_query($conn,$sql);
	$message = "Record Modified Successfully";
}
$select_query = "SELECT * FROM users WHERE userId='" . $_GET["userId"] . "'";
$result = mysqli_query($conn,$select_query);
$row = mysqli_fetch_array($result);
?>