
     	<?php include('header.php') ; 
include('main_leftnav.php') ; 
?> 
	<section   id="page-wrapper" >
	
		<div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">Show Staff</h1>
                        
                        
                                            
                                         
                                        
                    
                    
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
                            	<th class="head0">Sr.No</th>
                                <th class="head1">Name</th>
                                <th class="head0">Phone</th>
                              <!--  <th class="head1">Usertype</th>-->
                                <th class="head0">Email</th>
                                
                                <th class="head0">Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                      	              
                            
                            	<td>3</td>
								<td>monika</td>
								<td>7976696650</td>
								
								
									<!--<td>Staff</td>-->
								
									
								<td>monika@gmail.com</td>
                                
                              
					<td class="last" colspan="4">
                    
											 <a href="http://www.apsrtccargo.com/control.php?c=user&f=show_staff&id=105&active=N" class="btn btn3 btn_flag" title="Active"><i class="fa fa-check fa-fw"></i></a>
													  <a href="edit_staff.php?id=105" class="btn btn3 btn_pencil" title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i></a>
								  <a href="http://www.apsrtccargo.com/control.php?c=user&f=show_staff&del=105" class="btn btn3 btn_trash" onclick="return confirm('Do You  want to delete ?');" title="Delete"><i class="fa fa-trash-o fa-fw"></i></a>
                                 
								</td>
                            </tr>
						                          
                            
                            	<td>5</td>
								<td>demo1</td>
								<td>7976696650</td>
								
								
									<!--<td>Staff</td>-->
								
									
								<td>demo1@gmail.com</td>
                                
                              
					<td class="last" colspan="4">
                    
											 <a href="" class="btn btn3 btn_flag" title="Active"><i class="fa fa-check fa-fw"></i></a>
													  <a href="" class="btn btn3 btn_pencil" title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i></a>
								  <a href="" class="btn btn3 btn_trash" onclick="return confirm('Do You  want to delete ?');" title="Delete"><i class="fa fa-trash-o fa-fw"></i></a>
                                 
								</td>
                            </tr>
						                            <tr>
                            
                            	<td>6</td>
								<td>kk</td>
								<td>9876549879</td>
								
								
									<!--<td>Staff</td>-->
								
									
								<td>kk@gmail.com</td>
                                
                              
					<td class="last" colspan="4">
                    
											 <a href="" class="btn btn3 btn_flag" title="Active"><i class="fa fa-check fa-fw"></i></a>
													  <a href="" class="btn btn3 btn_pencil" title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i></a>
								  <a href="" class="btn btn3 btn_trash" onclick="return confirm('Do You  want to delete ?');" title="Delete"><i class="fa fa-trash-o fa-fw"></i></a>
                                 
								</td>
                            </tr>
						                            <tr>
                            
                            	<td>7</td>
								<td>suyodhan</td>
								<td>8745963210</td>
								
								
									<!--<td>Staff</td>-->
								
									
								<td>test5@gmail.com</td>
                                
                              
					<td class="last" colspan="4">
                    
											 <a href="" class="btn btn3 btn_flag" title="Active"><i class="fa fa-check fa-fw"></i></a>
													  <a href="" class="btn btn3 btn_pencil" title="Edit"><i class="fa fa-pencil-square-o fa-fw"></i></a>
								  <a href="" class="btn btn3 btn_trash" onclick="return confirm('Do You  want to delete ?');" title="Delete"><i class="fa fa-trash-o fa-fw"></i></a>
                                 
								</td>
                            </tr>
										 <tr>
                    	<td colspan="9" align="center">
                      
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