	<?php include('header.php') ; 
include('main_leftnav.php') ; 
?> 
	<section   id="page-wrapper" >
	
		<div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
            
         	Add Staff 
             
             </h1>
                    </div>
                </div> 
        
          <div class="row">
              
              
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
       <div class="row">
     	<div class="col-lg-12">
        <form class="stdform" method="post" action="http://www.apsrtccargo.com/control.php?c=user&f=add_staff" name="add_user" enctype="multipart/form-data">
       
                    	<div class="form-group">
                        	<label>Name</label>
                            <span class="field"><input type="text" name="name"  id="name" value="" class="form-control" />
                           
                    
                        </div>
                        
                        <div class="form-group">
                        	<label>Address</label>
                            <span class="field"><input type="text" name="address" id="address"  class="form-control" value="" />
                           
                        
                        </div>
                        <div class="form-group">
                        	<label>Phone</label>
                            <span class="field"><input type="number" name="phone"  id="phone" class="form-control" value="" />
                           
                           
                        </div>
                        
                       
                        
                         <div class="form-group">
                        	<label>Email</label>
                            <span class="field"><input type="email" name="user_name" id="user_name" class="form-control"  value="" />
                            
                        </div>
                        
                         <div class="form-group">
                        	<label>Password</label>
                            <span class="field"><input type="password"   class="form-control" name="password" id="password" value=""/>
                            
                        </div>
                       
                       
                         <input name="id" id="id" type="hidden" value="" />
                              <button type="submit" class="submit radius2" name="submit" value="Submit" onClick="return Valid_staff(document.add_user);">Add Staff</button>
                                       
                       
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