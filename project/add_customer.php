	<?php include('header.php') ; 
include('main_leftnav.php') ; 
?> 

     
	<section   id="page-wrapper" >
	
		<div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
            
         	Add Customer
            
    </h1>
                    </div>
                </div> 
        
          <div class="row">
              
              
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
       <div class="row">
     	<div class="col-lg-12">
        <form class="stdform" method="post" action="add_customer_action.php" name="add_customer" enctype="multipart/form-data">
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
                           <input type="text"  class="form-control" id="company_name" name="company_name" value="" />
                         
                        
                        </div>
                        <!--<div class="form-group">
                        <p style=" display:none;">
                        	<label>User Name</label> <span id="alert_user_name"></span>
                           <input type="text"   class="form-control" name="user_name" value="" />
                      
                        </div>-->
                       
                       
                     
                         
                           
                             <div class="form-group">
        <label>State:</label>
			 <select class="form-control" name="state" id="state-list" >
  <option value="select">--select--</option>
	<?php  $sel_sql="SELECT * FROM 	state";  
		$sql_query= mysql_query($sel_sql);
while($row = mysql_fetch_assoc($sql_query)){


	?>
  <option value="<?php echo $row['id'];?>"><?php echo $row['state_name'];?></option>
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
                            
							<textarea class="form-control" id="Company_address" name="Company_address" ></textarea>
                           
                        </div>
                        
                       
                        
                        
                        
                         <div class="form-group">
                        	<label>Customer Type</label>
                            
                           <select class="form-control" name="Customer_Type" >
  <option value="select">--select--</option>
	<?php  $selcusttypes_sql="SELECT * FROM 	tbl_customertypes";  
		$sql_cust_types_query= mysql_query($selcusttypes_sql);
while($row = mysql_fetch_assoc($sql_cust_types_query)){


	?>
  <option value="<?php echo $row['CustomerTypeID'];?>"><?php echo $row['CustomerType'];?></option>
<?php } ?>
</select>
                        </div>
                   
                        
                   
                      
                      	 <div class="form-group">
                        	<label>GSTN Number</label>
                            <input type="text"  class="form-control" id="GSTN_Number" name="GSTN_Number" />
                        </div>
                         <div class="form-group">
                        	<label>Contact Number</label>
                            <input type="text"  class="form-control" id="Contact_Number" name="Contact_Number" value="" />
                        </div>
						  <div class="form-group">
                        	<label>Contact Person Name</label>
                            <input type="text"  class="form-control" id="Contact_Person_Name" name="Contact_Person_Name" value="" />
                        </div>
						  <div class="form-group">
                        	<label>Contact Person Number</label>
                            <input type="text"  class="form-control" id="Contact_Person_Number" name="Contact_Person_Number" value="" />
                        </div>
						  <div class="form-group">
                        	<label>Contact Person Designation</label>
                            <input type="text"  class="form-control" id="Contact_Person_Designation" name="Contact_Person_Designation" value="" />
                        </div>
						  <div class="form-group">
                        	<label>Pin code</label>
                            <input type="text"  class="form-control" id="Pin_code" name="Pin_code" value="" />
                        </div>
						
						 <div class="form-group">
                        	<label>Company Email ID</label>
                            <input type="email"  class="form-control" id="Company_Email_ID" name="Company_Email_ID" value="" />
                        </div>
						
                        <!--==================================Password=======================================-->
                        
						<div class="form-group">
                        	<label>Login Username</label>
                            <input type="text"  class="form-control" id="Login_Username" name="Login_Username" value="" />
                        </div>
                         <div class="form-group">
                        	<label>Login Password</label>
                            <input type="password"  class="form-control" name="Login_Password" id="Login_Password" value="" />
                           
                        </div>
                      
                      	
                      
                     	<!--=================================================================================-->
						<div class="form-group">
                        	<label>Discount Percentage</label>
                            <input type="text"  class="form-control" id="Discount_Percentage" name="Discount_Percentage" value="" />
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
         	Add Customer
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