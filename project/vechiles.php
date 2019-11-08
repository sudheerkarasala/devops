<?php 
include('connection/connection.php') ; 
include('header.php') ; 
include('main_leftnav.php') ; 
$sql="select v.*,vt.vehicle_type as vety from vehicles v left join vehicle_types vt on v.VehicleType = vt.id";
$sql_query= mysql_query($sql);

?> 
     
	<section   id="page-wrapper" >
	
		
<style style="text/css">
	/* Define the hover highlight color for the table row */
    .hoverTable tr:hover {
          background-color: #ffff99;
    }
</style>

  <div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
                        Show vehicles
                        </h1>
                    </div>
                </div> 
                <div>&nbsp;</div>
                 <div class="row">
                <div class="col-md-12">
                  <!--   Kitchen Sink -->
                    <div class="panel panel-default">
                      <div class="panel-body">
                            <div class="table-responsive">
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
                                <th class="head1">vehicle no</th>
                                <th class="head0">vechicle type</th>
                                                               <th class="head0">Capacity</th>
                                                             
                                <th class="head1">Length</th>
								<th class="head1">Width</th>
								<th class="head1">Height</th>
								<th class="head1">Notes</th>
								<th class="head1">Status</th>
								<th class="head1">Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
						<?php $j=1; while($row = mysql_fetch_assoc($sql_query)){ ?>
						<tr>
							<td><?php echo $j; ?></td>
							<td><?php echo $row['Vehicle_API_Code']; ?></td>
							<td><?php  echo $row['vety']; ?></td>
							<td><?php echo $row['Capacity']; ?></td>
							<td><?php echo $row['Length']; ?></td>
							<td><?php echo $row['Width']; ?></td>
							<td><?php echo $row['Height']; ?></td>
							<td><?php echo $row['Notes']; ?></td>
							<td><?php if($row['IsActive']== 1){echo '<b style="color:green">Active</b>';}else{ echo '<b style="color:green">Not Active</b>';} ?></td>
							<td>
<a href="" class="btn btn-primary btn-circle" title="Active" data-toggle="tooltip" data-original-title="Active"><i class="fa fa-check fa-fw"></i></a>
<a href="edit_vehical.php?id=<?php echo $row['VehicleID']; ?>" class="btn btn-warning btn-circle" title="Edit" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i></a>
 <a href="delete_vehical.php?id=<?php echo $row['VehicleID']; ?>" onclick="return confirm('Do You  want to delete ?');" class="btn btn-danger btn-circle" title="Delete" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o fa-fw"></i></a>
 <a href="" class="btn btn-success btn-circle" title="Payment Detail" data-toggle="tooltip" data-original-title="Payment Detail"><i class="fa fa-money fa-fw"></i></a>
 <a href="" class="btn btn-success btn-circle" title="Booking Details" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-exclamation-circle fa-fw"></i></a>
                     
							
							</td>
						</tr>
						
						<?php
$j++;
}
?>		
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
    </div>
                        </div>
                    </div>
                     <!-- End  Kitchen Sink -->
                </div>
                
            </div>
               
        </div>	
</section>
	<?php include('footer.php') ; ?>