<?php
require_once("connection/connection.php");
extract($_POST);
if(isset($update)){
	
	$sql = "UPDATE vehicles set Vehicle_API_Code='" . $vehicle_no. "', VehicleType='" . $vechicle_type . "', Capacity='" . $Capacity . "', Length='" . $Length . "', Width='" . $Width . "', Height='" . $Height . "', Notes='" . $Notes . "'WHERE VehicleID='" . $VehicleID . "'";	
  $sql_query= mysql_query($sql);
  if(mysql_affected_rows(	) > 0 ){
	$message = "Record Modified Successfully";
	header('Location: vechiles.php');
  }else{
	  echo "Failed";
  }
}
$select_query = "SELECT * FROM vehicles WHERE VehicleID='" . $_GET['id'] . "'";
$result = mysql_query($select_query);
$row = mysql_fetch_assoc($result);
print_r($row);
?>

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
        <form class="stdform" method="post" action="" name="add_user" enctype="multipart/form-data">
       
                    	<div class="form-group">
                        	<label>vehicle no</label>
							<input type="text" name="vehicle_no"  id="vehicle_no" value="<?php echo $row['Vehicle_API_Code']; ?>" class="form-control" />
                           
                    
                        </div>
                        
                        <div class="form-group">
						<label>vehicle type</label>
    <select class="form-control" name="vechicle_type">
  <option value="0">Select </option>
  <?php  $sel_sql="SELECT * FROM 	vehicle_types";  
		$sql_query= mysql_query($sel_sql);
while($rw = mysql_fetch_assoc($sql_query)){
		

	?>
  <option value="<?php echo $rw['id'];?>" <?php  if($row['VehicleType'] == $rw['id']){echo 'selected';}	?> ><?php echo $rw['vehicle_type'];?></option>
<?php } ?>
  
  
</select>
                           
                        
                        </div>
                        <div class="form-group">
                        	<label>Capacity</label>
                            <span class="field">
							<input type="hidden" name="VehicleID"  id="Capacity" class="form-control" value="<?php echo $row['VehicleID']; ?>" />
							<input type="number" name="Capacity"  id="Capacity" class="form-control" value="<?php echo $row['Capacity']; ?>" />
							
                           
                           
                        </div>
                        
                       
                        
                         <div class="form-group">
                        	<label>	Length</label>
                            <span class="field"><input type=" 	Length" name="Length" id="Length" class="form-control"  value="<?php echo $row['Length']; ?>" />
							
                            
                        </div>
                        
                         <div class="form-group">
                        	<label>Width</label>
                            <span class="field"><input type="Width"   class="Width" name="Width" id="Width" value="<?php echo $row['Width']; ?>"/>
							
                            
                        </div>
						<div class="form-group">
                        	<label>	Height</label>
                            <span class="field"><input type="Height"   class="Height" name="Height" id="	Height" value="<?php echo $row['Height']; ?>"/>
							
                            
                        </div>
						<div class="form-group">
                        	<label>Notes</label>
                            <span class="field">
							<textarea  class="Notes" name="Notes" id="Notes"  rows="5" cols="30	"	><?php echo $row['Notes']; ?> </textarea>
							
                            
                        </div>
                       
                       
                         <input name="update" id="update" type="submit" value="Update" onClick="return Valid_staff(document.add_user);"> 
						                               
                       
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