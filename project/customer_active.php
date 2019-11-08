<?php 
require_once("connection/connection.php");
extract($_GET);
 $active_query = "UPDATE  tbl_customer SET IsActive ='1' WHERE Customer_ID='$id'";
$result = mysql_query($active_query);
if(mysql_affected_rows(	) > 0 ){
	$message = "Record Modified Successfully";
	header('location:show_customer.php');
  }else{
	  echo "Failed";
  }


?>