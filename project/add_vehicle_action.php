<?php
include('connection/connection.php') ; 
$sql="INSERT INTO vehicles (Vehicle_API_Code,VehicleType,Capacity,Length,Width,Height,Notes)
VALUES
('$_POST[vehicle_no]','$_POST[vechicle_type]','$_POST[Capacity]','$_POST[Length]', '$_POST[Width]','$_POST[Height]', '$_POST[Notes]')";
if (!mysql_query($sql)) 
  {
  die('Error: ' . mysql_error());
  }
	header('Location: vechiles.php');
  
  
  
  
  
/*$sql = "INSERT INTO vehicles (Vehicle_API_Code,VehicleType,Capacity,Length,Width,Height,Notes)
        VALUES ('".$_POST["vehicle_no"]."','".$_POST["vehicle_type"]."','".$_POST["Capacity"]."','".$_POST["Length"]."','".$_POST["Width"]."','".$_POST["Height"]."','".$_POST["Notes"]."')";

if ($sql) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}*/

  


?>