<?php
include('connection/connection.php') ; 
$state_id = mysql_real_escape_string($_POST['state_id']);
$City_id = mysql_real_escape_string($_POST['City_id']);
if($state_id!='')
{
$city_result = mysql_query('select * from cities where state_id='.$state_id.'');
$options = "<option value=''>--Select City--</option>";
while($row = mysql_fetch_assoc($city_result)){
	if($row['id'] == $City_id){
		$options .= "<option value='".$row['id']."' selected>".$row['city_name']."</option>";
	}
	else{
		$options .= "<option value='".$row['id']."'>".$row['city_name']."</option>";
	}
//$options .= "<option  value='".$row['id']."'".<?php if($CIty_id ==)>".$row['city_name']."</option>";
}
echo $options;
}
?>