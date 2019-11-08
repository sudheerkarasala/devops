<?php 
require_once("connection/connection.php");
extract($_GET);
 $delete_query = "DELETE FROM vehicles WHERE VehicleID='$id'";
$result = mysql_query($delete_query);
if(mysql_affected_rows(	) > 0 ){
	$message = "Record Modified Successfully";
	header('location:vechiles.php');
  }else{
	  echo "Failed";
  }


?>