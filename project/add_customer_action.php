<?php
include('connection/connection.php') ; 

if($_POST[company_name]=="" || $_POST[state]=="" || $_POST[city]=="" || $_POST[Company_address]=="" || $_POST[Customer_Type]=="" || $_POST[GSTN_Number]=="" || $_POST[Contact_Number]=="" || $_POST[Contact_Person_Name]=="" || $_POST[Contact_Person_Number]=="" || $_POST[Contact_Person_Designation]=="" || $_POST[Pin_code]=="" || $_POST[Company_Email_ID]=="" || $_POST[Login_Username]=="" || $_POST[Login_Password]=="" || $_POST[Discount_Percentage]=="" ){
	$Message = urlencode("Please enter the fileds");
	header("Location: add_customer.php?Message=".$Message);
	die;
}

$passsword = md5($_POST[Login_Password]);
$companyname = $_POST[company_name];
$login_userName = $_POST[Login_Username];

$val_query = mysql_query("select * from tbl_customer where CompanyName = '$companyname'");
if(mysql_num_rows($val_query) > 0){
	$Message = urlencode("Company Name is already exists ");
	header("Location: add_customer.php?Message=".$Message);
	die;
}

$val_query = mysql_query("select * from tbl_customer where Login_Username = '$login_userName'");
if(mysql_num_rows($val_query) > 0){
	$Message = urlencode("Login User Name is already exists ");
	header("Location: add_customer.php?Message=".$Message);
	die;
}



$sql="INSERT INTO tbl_customer (CompanyName,State_Id,City_id,CompanyAdress,CustomerTypeID,GSTNNumber,ContactNumber,ContactPersonName,ContactPersonNumber,ContactPersonDesignation,Pincode,Company_MailId,Login_Username,Login_Password, DiscountPercentage, SubUserAcess, ApprovalMandatory, IsActive)
VALUES
('$_POST[company_name]','$_POST[state]','$_POST[city]','$_POST[Company_address]', '$_POST[Customer_Type]','$_POST[GSTN_Number]', '$_POST[Contact_Number]','$_POST[Contact_Person_Name]','$_POST[Contact_Person_Number]','$_POST[Contact_Person_Designation]','$_POST[Pin_code]','$_POST[Company_Email_ID]','$_POST[Login_Username]','$passsword','$_POST[Discount_Percentage]', '$_POST[Create_Sub_Users]', '$_POST[Approval_Is_Mandatory]', '0')";
if (!mysql_query($sql)) 
  {
  die('Error: ' . mysql_error());
  }
  else{
	header('Location: add_customer.php');
  }
  
 

?>