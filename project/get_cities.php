<?php
include('connection/connection.php') ; 
$state_id = mysql_real_escape_string($_POST['state_id']);
if($state_id!='')
{
$city_result = mysql_query('select * from cities where state_id='.$state_id.'');
$options = "<option value=''>--Select City--</option>";
while($row = mysql_fetch_assoc($city_result)){
$options .= "<option value='".$row['id']."'>".$row['city_name']."</option>";
}
echo $options;
}
?>