<?php
include('connection/connection.php') ; 

//if(isset($_GET['cust_id'])){
    $cust_ID =  $_GET['cust_id'];
//}



/*$companyname = $_POST['company_name'];


$val_query = mysql_query("select * from tbl_customer where CompanyName = '$companyname'");
if(mysql_num_rows($val_query) > 0){
	$Message = urlencode("Company Name is already exists ");
	header("Location: edit_customer.php?cust_id=" .$cust_ID);
	die;
}*/





$sql="UPDATE  tbl_customer SET   CompanyName = '$_POST[company_name]', State_Id = '$_POST[state]',City_id = '$_POST[city]', CompanyAdress = '$_POST[Company_address]', CustomerTypeID = '$_POST[Customer_Type]', GSTNNumber ='$_POST[GSTN_Number]', ContactNumber = '$_POST[Contact_Number]', ContactPersonName ='$_POST[Contact_Person_Name]', ContactPersonNumber = '$_POST[Contact_Person_Number]', ContactPersonDesignation='$_POST[Contact_Person_Designation]', Pincode = '$_POST[Pin_code]', Company_MailId = '$_POST[Company_Email_ID]', DiscountPercentage = '$_POST[Discount_Percentage]', SubUserAcess = '$_POST[Create_Sub_Users]', ApprovalMandatory = '$_POST[Approval_Is_Mandatory]' where Customer_ID = '$cust_ID'";



if (!mysql_query($sql)) 
  {
  die('Error: ' . mysql_error());
  }
  else{
	// $Message = urlencode("Customer Updated Successfully ");
	header("Location: show_customer.php");
  }
  
 

?>