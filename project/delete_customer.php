<?php 
require_once("connection/connection.php");
extract($_GET);
 $delete_query = "DELETE FROM tbl_customer WHERE Customer_ID='$id'";
$result = mysql_query($delete_query);
if(mysql_affected_rows(	) > 0 ){
	$message = "Record Modified Successfully";
	header('location:show_customer.php');
  }else{
	  echo "Failed";
  }


?>