<?php include('header.php') ; 
include('main_leftnav.php') ; 
?> 
     
	<section   id="page-wrapper" >
	
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" type="text/css" />	

<style style="text/css">
	/* Define the hover highlight color for the table row */
    .hoverTable tr:hover {
          background-color: #ffff99;
    }
	.dataTables_length{
	display:none;
	}
</style>

  <div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
                        Show Customers
                        </h1>
                    </div>
                </div> 
                <div>&nbsp;</div>
                 <div class="row">
                <div class="col-md-12">
                  <!--   Kitchen Sink -->
                    <div class="panel panel-default">
                      <div class="panel-body">
					  
					  <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Company Name</th>
                <th>Company Email ID</th>
                <th>Contact Number</th>
                <th>Action</th>
               
            </tr>
        </thead>
        
        <tbody>
		
		<?php  $sel_result_sql="SELECT * FROM 	tbl_customer";  
		$sql_resultset_query= mysql_query($sel_result_sql);
while($row = mysql_fetch_assoc($sql_resultset_query)){


	?>
            <tr>
                <td><?php echo $row['CompanyName'];?></td>
                <td><?php echo $row['Company_MailId'];?></td>
                <td><?php echo $row['ContactNumber'];?></td>
                <td><a href="customer_active.php?id=<?php echo $row['Customer_ID']; ?>" onclick="return confirm('Do You  want to Active the Customer ?');" class="btn btn-primary btn-circle" title="Active" data-toggle="tooltip" data-original-title="Active"><i class="fa fa-check fa-fw"></i>
                            </a>
					                    
					
                    <a href="edit_customer.php?cust_id=<?php echo $row['Customer_ID'];?>" class="btn btn-warning btn-circle" title="Edit" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i>
                            </a>
                    
                    
                    
                   
                    
                    
                    
                     <a href="delete_customer.php?id=<?php echo $row['Customer_ID']; ?>" onclick="return confirm('Do You  want to delete ?');" class="btn btn-danger btn-circle" title="Delete" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o fa-fw"></i>
                            </a>
                    
                    
                    
                    <!-- <a href="" class="btn btn-success btn-circle" title="Payment Detail" data-toggle="tooltip" data-original-title="Payment Detail"><i class="fa fa-money fa-fw"></i>
                            </a>
                     
                     <a href="" class="btn btn-success btn-circle" title="Booking Details" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-exclamation-circle fa-fw"></i></a>-->
					 
					 </td>
               
            </tr>
           
<?php }
?>
           
            
            
           
        </tbody>
    </table>
					  
					  
					  
                           <!-- <div class="table-responsive">
                     <table class="table table-striped table-bordered table-hover">
                        <colgroup>
                            <col class="con0" />
                            <col class="con1" />
                            <col class="con0" />
                            <col class="con1" />
                            <col class="con0" />
                        </colgroup>
                        
                        <thead>
                        	<tr>
                              
                                <th class="head1" colspan="8">
                                 <form name="search_form" method="post" action="http://www.apsrtccargo.com/control.php?c=customer&f=show_customer">
                                    <div class="form-group">

<div class="col-md-9">
                                    
                                    <input type="text" name="search_val"  class="form-control"  value="" placeholder="Account no" onfocus="this.value=''"/>
                                    </div>
                                    <div class="col-md-3">
                                    <input type="submit" name="Submit"  class="btn btn-default"  value="Search" onClick="return Valid_search(document.search_form);"/>
                                    </div>
                                    <label><div id='search_val' style="display:inline; color:#F00;"></div></label></div>
		 						 </form>
                                </th>
                            </tr>
                            <tr>
                            	<th class="head0">#</th>
                                <th class="head1">Account no</th>
                                <th class="head0">Name</th>
                                                               <th class="head0">Phone</th>
                                                                <th class="head0">Email</th>
                                <th class="head1">Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                      						                            <tr>
                            
                            	<td>1</td>
								<td>2Q3UIF</td>
								<td>
                                <a href="">
                                bindhu</a></td>
								 								<td>479874656487</td>
								 								<td>bindhu@gmail.com</td>
                            
					<td width="17%">
                    
                   
                            
                            
                    
					                    
                     <a href="" class="btn btn-primary btn-circle" title="Active" data-toggle="tooltip" data-original-title="Active"><i class="fa fa-check fa-fw"></i>
                            </a>
					                    
					
                    <a href="" class="btn btn-warning btn-circle" title="Edit" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i>
                            </a>
                    
                    
                    
                   
                    
                    
                    
                     <a href="" onclick="return confirm('Do You  want to delete ?');" class="btn btn-danger btn-circle" title="Delete" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o fa-fw"></i>
                            </a>
                    
                    
                    
                     <a href="" class="btn btn-success btn-circle" title="Payment Detail" data-toggle="tooltip" data-original-title="Payment Detail"><i class="fa fa-money fa-fw"></i>
                            </a>
                     
                     <a href="" class="btn btn-success btn-circle" title="Booking Details" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-exclamation-circle fa-fw"></i></a>
                     
								</td>
                            </tr>
						                           
						                          
						                           
						                          <tr>
                    	<td colspan="8" align="center">
                      
                    <form name="frm_pagi" action="" method="post">
                   			                            <input type="hidden" name="pageval" id="pagevalid" value="0" />
                           	
                      	<div class="pagin">
<input type='submit' class='' style='background-color:#50627f; color:#FFF;'  value='&lsaquo; '  />
<input type='submit' class=' ' style='background-color:#50627f; color:#FFF;' value='1 ' onclick='return callpage(1);' />
<input type='submit' class=' ' style='background-color:#50627f; color:#FFF;' value=' &rsaquo;' />
</div>
                        </form>

                        </td>
                    </tr>
								
                   
                          
                        </tbody>
                    </table>
    </div>-->
                        </div>
                    </div>
                     <!-- End  Kitchen Sink -->
                </div>
                
            </div>
               
        </div>	
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>
	<?php include('footer.php') ; ?>