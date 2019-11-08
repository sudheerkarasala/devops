	<?php include('header.php') ; 
include('main_leftnav.php') ; 
if(isset($_GET['cust_id'])){
    $cust_ID =  $_GET['cust_id'];
}
$editQuery = mysql_query("select * from tbl_customer where Customer_ID = '$cust_ID'");
$resultset = mysql_fetch_array($editQuery);


//print_r($resultset);

?> 

     
	<section   id="page-wrapper" >
	
		<div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
            
         	Edit Customer
            
    </h1>
                    </div>
                </div> 
        
          <div class="row">
              
              
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
       <div class="row">
     	<div class="col-lg-12">
        <form class="stdform" method="post" action="edit_customer_action.php?cust_id=<?php echo $cust_ID;?>" name="add_customer" enctype="multipart/form-data">
           <!--<input name="city_id" type="hidden" value="" />
                    <div class="form-group">
                    	<p style="display:none;">
                        	<label>Account no.</label>
                            <input type="text"  name="uniqueid" readonly="1" class="form-control" value=""/>
                           
                    
                        </div>-->
						<div style="color:red;">
                        <?php
                      if(isset($_GET['Message'])){
    echo $_GET['Message'];
}
?></div>
                        
                        <div class="form-group">
                        	<label>Company Name</label>
                           <input type="text"  class="form-control" id="company_name" name="company_name" value="<?php echo $resultset['CompanyName']?>" />
                         
                        
                        </div>
                        <!--<div class="form-group">
                        <p style=" display:none;">
                        	<label>User Name</label> <span id="alert_user_name"></span>
                           <input type="text"   class="form-control" name="user_name" value="" />
                      
                        </div>-->
                       
                       
                     
                         
                           
                             <div class="form-group">
        <label>State:</label>
			 <select class="form-control" name="state" id="state-list" >
  
	<?php  $sel_sql="SELECT * FROM 	state";  
		$sql_query= mysql_query($sel_sql);
while($row = mysql_fetch_assoc($sql_query)){


	?>
  <option value="<?php echo $row['id'];?>" <?php if($row['id'] == $resultset['State_Id']) echo "selected";?>><?php echo $row['state_name'];?></option>
<?php } ?>
</select>
       <!-- <select name="country" class="form-control"  id="country" onchange="get_citylist_register(this.value);">
					<option value="" >Please Select</option><option value="1">India</option></select>-->
       
      </div>
    
              <div class="form-group">
        <label> City:<span class="bold_alert"></span></label>
      <span id="city">
      <select class="form-control" name="city" id="cities_list" >
<option value=''>--Select City--</option>
</select>

       </span>
      </div>
      
      



                                                 
                        <div class="form-group">
                        	<label>Company Address</label>
                            
						<textarea class="form-control" id="Company_address" name="Company_address"><?php echo $resultset['CompanyAdress']?></textarea>
                           
                        </div>
                        
                       
                        
                        
                        
                         <div class="form-group">
                        	<label>Customer Type</label>
                            
                           <select class="form-control" name="Customer_Type" >
  <option value="select">--select--</option>
	<?php  $selcusttypes_sql="SELECT * FROM 	tbl_customertypes";  
		$sql_cust_types_query= mysql_query($selcusttypes_sql);
while($row = mysql_fetch_assoc($sql_cust_types_query)){


	?>
  <option value="<?php echo $row['CustomerTypeID'];?>" <?php if($row['CustomerTypeID'] == $resultset['CustomerTypeID']) echo "selected";?>><?php echo $row['CustomerType'];?></option>
<?php } ?>
</select>
                        </div>
                   
                        
                   
                      
                      	 <div class="form-group">
                        	<label>GSTN Number</label>
                            <input type="text"  class="form-control" id="GSTN_Number" name="GSTN_Number" value="<?php echo $resultset['GSTNNumber']?>"/>
                        </div>
                         <div class="form-group">
                        	<label>Contact Number</label>
                          <input type="text"  class="form-control" id="Contact_Number" name="Contact_Number" value="<?php echo $resultset['ContactNumber']?>" />
                        </div>
						  <div class="form-group">
                        	<label>Contact Person Name</label>
                            <input type="text"  class="form-control" id="Contact_Person_Name" name="Contact_Person_Name" value="<?php echo $resultset['ContactPersonName']?>" />
                        </div>
						  <div class="form-group">
                        	<label>Contact Person Number</label>
<input type="text"  class="form-control" id="Contact_Person_Number" name="Contact_Person_Number" value="<?php echo $resultset['ContactPersonNumber']?>" />	
                        </div>
						  <div class="form-group">
                        	<label>Contact Person Designation</label>
<input type="text"  class="form-control" id="Contact_Person_Designation" name="Contact_Person_Designation" value="<?php echo $resultset['ContactPersonDesignation']?>" />
                        </div>
						  <div class="form-group">
                        	<label>Pin code</label>
                            <input type="text"  class="form-control" id="Pin_code" name="Pin_code" value="<?php echo $resultset['Pincode']?>" />
                        </div>
						
						 <div class="form-group">
                        	<label>Company Email ID</label>
                            <input type="email"  class="form-control" id="Company_Email_ID" name="Company_Email_ID" value="<?php echo $resultset['Company_MailId']?>" />
                        </div>
						
                        <!--==================================Password=======================================-->
                        
						<!--<div class="form-group">
                        	<label>Login Username</label>
                            <input type="text"  class="form-control" id="Login_Username" name="Login_Username" value="<?php //echo $resultset['Login_Username']?>" />
                        </div>-->
                         
                      
                      	
                      
                     	<!--=================================================================================-->
						<div class="form-group">
                        	<label>Discount Percentage</label>
                            <input type="text"  class="form-control" id="Discount_Percentage" name="Discount_Percentage" value="<?php echo $resultset['DiscountPercentage']?>" />
                        </div>
						<div class="form-group">
                        	<label>Access To Create Sub Users</label>
                             <select class="form-control" name="Create_Sub_Users" >
							 <option value="0" selected>No</option>
							 <option value="1">Yes</option>
							  
							 </select>
                        </div>
						<div class="form-group">
                        	<label>Approval Is Mandatory  For Shipment</label>


                             <select class="form-control" name="Approval_Is_Mandatory">
							 <option value="0" >No</option>
							 <option value="1" selected>Yes</option>
							  
							 </select>
                        </div>
						<!--<div class="form-group">
                        	<label>Max Credit Amount</label>
                            <input type="text"  class="form-control" id="Max_Credit_Amount" name="Max_Credit_Amount" value=""/>
                        </div>-->
                       
                      
                  <button type="submit" class="btn btn-default" name="submit" value="Submit" onClick="return Valid_customer(document.add_customer);">    
         	Update Customer
          </button>
                      
                    </form>
 			
      </div>
                                <!-- /.col-lg-6 (nested) -->
                                
                                <!-- /.col-lg-6 (nested) -->
                            </div>
                            <!-- /.row (nested) -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
			
			</div>     
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>


$(document).ready(function() {
    var state_id = <?php echo $resultset['State_Id'] ?>;
	var city_id=<?php echo $resultset['City_id'] ?>;


$.ajax({
type: "POST",
url: "get_select_city.php",
data:'state_id='+ state_id + '&City_id=' + city_id,
success: function(result){
$("#cities_list").html(result);
}
});
} );

$('#state-list').on('change', function(){
	var state_id = this.value;
	//alert(state_id);

$.ajax({
type: "POST",
url: "get_cities.php",
data:'state_id='+ state_id,
success: function(result){
$("#cities_list").html(result);
}
});
});
</script>
	<?php include('footer.php') ; ?>