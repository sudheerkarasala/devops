<?php $_SESSION['counter_id']=2;
include('connection/connection.php') ; 
 
 
 ?>
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<meta charset="UTF-8">
<head>
 	<title>Admin</title>
        
          
       
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
      <!-- Bootstrap Styles-->
   <!-- <link rel="stylesheet" href="templates/css/jquery.cleditor.css" type="text/css" /> -->

	<link rel="stylesheet" href="templates/css/typeahead.js-bootstrap.css" type="text/css" />
    
	<link href="templates/admin/admin_assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FontAwesome Styles-->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Morris Chart Styles-->
    <link href="templates/admin/admin_assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
    <!-- Custom Styles-->
    <link href="templates/admin/admin_assets/css/custom-styles.css" rel="stylesheet" />
    <!-- Google Fonts-->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
<script src="ckeditor/ckeditor.js"></script>
<script src="http://cdn.jsdelivr.net/webshim/1.12.4/extras/modernizr-custom.js"></script>
<!-- polyfiller file to detect and load polyfills -->
<script src="http://cdn.jsdelivr.net/webshim/1.12.4/polyfiller.js"></script>

<link rel="stylesheet" type="text/css" href="templates/admin/admin_assets/css/sweetalert.css">

<script>
  webshims.setOptions('waitReady', false);
  webshims.setOptions('forms-ext', {types: 'date'});
  webshims.polyfill('forms forms-ext');
</script>

<script type="text/javascript" src="templates/js/custom/elements.js"></script>
<script type="text/javascript" src="templates/js/validation.js"></script>
<script type="text/javascript" src="templates/js/ajax.js"></script>

<script type="text/javascript"></script> 
<script type="text/javascript" src="languages_admin/lang_english/lang_main.js"></script> 


<script src="templates/js/jquery.min.js"></script>
    <script src="templates/js/typeahead.min.js"></script>
	<script src="templates/js/sweetalert.min.js"></script>
   
	
   
<div >

</div>

<!--================onclick edit data for set price====================-->
<!--===================================================================-->



</head>
<body id="body_id"  class="withvernav" onLoad=" document.bar_code_Frm.barcode_id.focus();"   >

<div id="wrapper">
	  
 
 <nav class="navbar navbar-default top-navbar" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a class="navbar-brand" href="index.php">Admin </a> 
   
                
            </div>
            
            <ul class="nav navbar-top-links navbar-right">
            
                           
                             <li class="dropdown">
             
            	
                          
            
                </li>
                            <li class="dropdown"><a class="input_submit" style="cursor:pointer" onclick="window.history.back(-1);">Back</a></li>
                
                <!-- /.dropdown -->
               
                <!-- /.dropdown -->
            </ul>
        </nav>        
  <!--==============================leftpanel include condition===============================================-->
   
  	 
    