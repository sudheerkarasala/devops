	<?php include('header.php') ; 
	
include('main_leftnav.php') ; 
?> 
	<section   id="page-wrapper" >
	
		<div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
            
          
             
             </h1>
                    </div>
                </div> 
        
          <div class="row">
              
              
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
       <div class="row">
     	<div class="col-lg-12">
        <form class="stdform" method="post" action="add_vehicle_action.php" name="add_user" enctype="multipart/form-data">
       
                    	<div class="form-group">
                        	<label>vehicle no</label>
                            <span class="field"><input type="text" name="vehicle_no"  id="vehicle_no" value="" class="form-control" />
                           
                    
                        </div>
                        
                        <div class="form-group">
						<label>vehicle type</label>
                        	 <select class="form-control" name="vechicle_type">
  <option value="select">select</option>
	<?php  $sel_sql="SELECT * FROM 	vehicle_types";  
		$sql_query= mysql_query($sel_sql);
while($row = mysql_fetch_assoc($sql_query)){


	?>
  <option value="<?php $row['id'];?>"><?php echo $row['vehicle_type'];?></option>
<?php } ?>
</select>
                           
                        
                        </div>
                        <div class="form-group">
                        	<label>Capacity</label>
                            <span class="field"><input type="number" name="Capacity"  id="Capacity" class="form-control" value="" />
							
                           
                           
                        </div>
                        
                       
                        
                         <div class="form-group">
                        	<label>	Length</label>
                            <span class="field"><input type=" 	Length" name="Length" id="Length" class="form-control"  value="" />
							
                            
                        </div>
                        
                         <div class="form-group">
                        	<label>Width</label>
                            <span class="field"><input type="Width"   class="Width" name="Width" id="Width" value=""/>
							
                            
                        </div>
						<div class="form-group">
                        	<label>	Height</label>
                            <span class="field"><input type="Height"   class="Height" name="Height" id="	Height" value=""/>
							
                            
                        </div>
						<div class="form-group">
                        	<label>Notes</label>
                            <span class="field"> <br>
							
							<textarea  name="Notes"  rows="5" cols="25"> </textarea>
							
							
                            
                        </div>
                       
                       
                         <input name="id" id="id" type="hidden" value="" />
                              <button type="submit" class="submit radius2" name="submit" value="Submit" onClick="return Valid_staff(document.add_user);">Submit</button>
                                       
                       
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
<?php include('footer.php') ; ?>