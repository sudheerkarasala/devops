var firstDot = window.location.hostname.indexOf('.');


var xmlHttp

function showHint(str)
{
	if (str.length==0)
	{ 
		document.getElementById("txtHint").innerHTML="";
		return;
	}

	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
		alert ("Your browser does not support AJAX!");
		return;
	}
	var url="get.php";
	url=url+"?q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function ajax() {
	// Make a new XMLHttp object
	if (typeof window.ActiveXObject != 'undefined' ) doc = new ActiveXObject("Microsoft.XMLHTTP");
	else doc = new XMLHttpRequest();
}


function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}
function stateChanged() 
{
	if (xmlHttp.readyState==4)
	{
		document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
	}
}

function Valid_user(frm)
{
	var checkFocus=0;
	
	
		
	if(frm.usertype.value=='M')
	{
	
			if(frm.hub_name.value=='')
	{	
		document.getElementById("hub_name").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.hub_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("hub_name").style.borderColor='';
		
		
	}
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name").style.borderColor='';
	
	if(frm.address.value=='')
	{	
		document.getElementById("address").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("address").style.borderColor='';
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("phone").style.borderColor='';
	
	if(frm.id.value=='')
	{	
		
	if(frm.email.value=='')
	{	
		document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			alert(lang_please_enter_valid_email_address);
			document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.email.focus();	
			var checkFocus=1;
			}
		}
			else
			
			{ 
			//alert(frm.email.value);
			ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_email_user&email_id="+frm.email.value, false);   
				doc.send(null);
			   }
			  // alert(doc.responseText);
			}
			if(doc.responseText==1)
		   {	
		   		alert(lang_email_id_already_exists);
				
		   		document.getElementById("email").style.borderColor='#F00';
				frm.email.focus();
				var	 checkFocus=1;
		   }
		   else
		   document.getElementById("email").style.borderColor='';
		
	 
	}	
	
	
	
	
	if(frm.username.value=='')
	{	
		document.getElementById("username").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.username.focus();
				var checkFocus=1;
			}
	}
	else
	{
	ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_name_user&username="+frm.username.value, false);   
				doc.send(null);
			   }
			  // alert(doc.responseText);
			
			if(doc.responseText==1)
		   {	
		   		alert("User Name Already Exist");
				
		   		document.getElementById("username").style.borderColor='#F00';
				frm.username.focus();
				var	 checkFocus=1;
		   }
		   else
		   document.getElementById("username").style.borderColor='';
		
	}
		
	
	}
	
	if(frm.password.value=='')
	{	
		document.getElementById("password").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.password.focus();
				var checkFocus=1;
			}
	}
	else
	
		document.getElementById("password").style.borderColor='';
		
		
		if(frm.password.value!=frm.con_password.value)
		{
			document.getElementById("con_password").style.borderColor='#F00';
			if(checkFocus!=1)
				frm.con_password.focus();
			var checkFocus=1;	
		}
		else
			document.getElementById("con_password").style.borderColor='';
	
	
		if(frm.city.value=='')
	{	
		document.getElementById("city").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.city.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city").style.borderColor='';
		

		
	if(checkFocus==1)
		return false;
	else
		return true;
}

function surcharge_popup(pro_id)
{	
	  document.getElementById("surcharge_popup_id").style.display="block"; 
	 // document.getElementById("booking_unique_id").value=pro_id; 
 }
 
 function surcharge_popup_close()
{	
	document.getElementById("surcharge_popup_id").style.display="none";	
}

function get_checked_charge(id)
{
	//alert(id);
	if(document.getElementById("check_service_"+id).checked==true)
	{
		var price=document.getElementById("price_"+id).value;
		document.getElementById("price_appled_"+id).value=price;
	}
	else
	{
		var price=document.getElementById("price_"+id).value;
		document.getElementById("price_appled_"+id).value='0';
	}
	add_charges();
}




function add_charges()
{	
	countcharge;
	var total_charge=0;
	
	var total_weight=parseFloat(document.getElementById('total_weight_id').value);
	
	//alert(total_weight);
	var service_charge_val=parseFloat(document.getElementById("service_charge_val").value);
   var service_tax_val=	parseFloat(document.getElementById("service_tax_val").value);
 // alert(document.getElementById('nrd').value);

		var ship_type=$('input[name=nrd]:checked').val();
	//alert(ship_type);
	
	if(isNaN(total_weight)==false)
	{
	for(var i=1;i<=countcharge;i++)
	{
		
			var start_weight_range=parseFloat(document.getElementById('start_weight_range_'+i).value);
			var end_weight_range=parseFloat(document.getElementById('end_weight_range_'+i).value);
			var product_type=document.getElementById('product_type_'+i).value;
			//alert(start_weight_range+'//'+end_weight_range +'//'+total_weight);
		
			
			if(total_weight>start_weight_range && total_weight<=end_weight_range && ship_type==product_type )
			{
			//	alert(product_type);
				//alert(ship_type);
					var price_input=parseFloat(document.getElementById('price_appled_'+i).value);
					
					document.getElementById('calculated_price_appled_show_'+i).style.display="";
				
					document.getElementById('calculated_price_appled_'+i).value=price_input;	
				//alert(price_input);	
				}
				else
				{
				document.getElementById('calculated_price_appled_show_'+i).style.display="none";	
				var price_input=0;
				document.getElementById('calculated_price_appled_'+i).value=price_input;
				}
	
		
		total_charge=total_charge+price_input;
		
	}
	//alert(total_charge);
	document.getElementById('total_charge_price').value=total_charge;
	
	var total_sum=(total_charge+service_tax_val+service_charge_val);
	total_sum = Math.round(total_sum * 100);
	total_sum = total_sum/100;
	document.getElementById('show_total_amount_id').value=total_sum;
	//document.getElementById('show_special_charge').style.display="block";
	
	
	}
	
}


function get_checked_charge_admin(id)
{
	//alert(id);
	if(document.getElementById("check_service_"+id).checked==true)
	{
		var price=document.getElementById("price_"+id).value;
		document.getElementById("price_appled_"+id).value=price;
	}
	else
	{
		var price=document.getElementById("price_"+id).value;
		document.getElementById("price_appled_"+id).value='0';
	}
	add_charges_admin();
}
function add_charges_admin()
{	
	countcharge;
	var total_charge=0;
	
	var total_weight=parseFloat(document.getElementById('total_weight_id').value);
	
	//alert(total_weight);
	var service_charge_val=parseFloat(document.getElementById("service_charge_val").value);
   var service_tax_val=	parseFloat(document.getElementById("service_tax_val").value);
 // alert(document.getElementById('nrd').value);

		var ship_type=$('input[name=nrd]:checked').val();
	//alert(ship_type);
	
	if(isNaN(total_weight)==false)
	{
	for(var i=1;i<=countcharge;i++)
	{
		
			var start_weight_range=parseFloat(document.getElementById('start_weight_range_'+i).value);
			var end_weight_range=parseFloat(document.getElementById('end_weight_range_'+i).value);
			var product_type=document.getElementById('product_type_'+i).value;
		//	alert(start_weight_range+'//'+end_weight_range );
		var x=document.getElementById('POITable');
			
			if(total_weight>=start_weight_range && total_weight<=end_weight_range && ship_type==product_type )
			{
			//	alert(product_type);
				//alert(ship_type);
					var price_input=parseFloat(document.getElementById('price_appled_'+i).value);
					
					
					//document.getElementById('calculated_price_appled_show_'+i).style.display="block";
					
				// document.getElementById('show_speacial_all').innerHTML="<table border='0' width='100%' align=''><tr><td align='' width='90%'><h4>special charge</h4></td><td align='right'>"+price_input+"</td></tr></table>";
						
				//alert(price_input);	
				}
				else
				var price_input=0;
	
		
		total_charge=total_charge+price_input;
		document.getElementById('calculated_price_appled_'+i).value=price_input;
	}
	//alert(total_charge);
	document.getElementById('total_charge_price').value=total_charge;
	
	var total_sum=(total_charge+service_tax_val+service_charge_val);
	total_sum = Math.round(total_sum * 100);
	total_sum = total_sum/100;
	document.getElementById('show_total_amount_id').value=total_sum;
	//document.getElementById('show_special_charge').style.display="block";
	
	
	}
	
}

function setmultidelete(select_id)
{
	ajax();
	//alert(select_id);
	
	doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
  {
	  if(doc.responseText!='')
  {
	//alert(doc.responseText);
		var delete_id=select_id;
		if(doc.responseText==1)
		document.getElementById('delet_'+select_id).style.backgroundColor="#F00";
		else
		document.getElementById('delet_'+select_id).style.backgroundColor="";
		
	 }
  }	
  }
  			if (doc){
				   doc.open("GET", "ajax.php?section=setmultidelete&delete_id="+select_id, true);   
				   doc.send(null);
			   }
		//alert(doc.responseText);
 

		
	
}

function createCityDropdownById_user(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_user&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}


function valid_save(frm)
{
	var checkFocus=0;
	var sender_email=document.getElementById("sender_email_val").value;
	var card_no=document.getElementById('card_no').value;
	var valid_date=document.getElementById('valid_date').value;
	
	if(card_no=="")
	{
		document.getElementById('card_no').style.borderColor="#F00"
		if(checkFocus==0)
		{
		checkFocus=1;
		
		}
		document.getElementById('card_no').focus();
		}
		else
		document.getElementById('card_no').style.borderColor=""
	
	if(valid_date=="")
	{
		document.getElementById('valid_date').style.borderColor="#F00"
		if(checkFocus==0)
		{
		checkFocus=1;
		
		}
		document.getElementById('valid_date').focus();
		}
		else
		document.getElementById('valid_date').style.borderColor=""
	
	
	if(checkFocus==1)
	{
		return false;
		}
		else
		{
					return true;

			}
	//alert(sender_email)
	 
	 if(sender_email=='')

	 {	 

		  document.getElementById("sender_email_val").style.borderColor='#F00';

		  if(checkFocus!=1)

		  {

			frm.email.focus();

			var checkFocus=1;

		  }

	 }

	 else

	 {

		  var frmEmail1 =sender_email.toLowerCase();	

		  var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;

		if (!frmEmailformat.test(frmEmail1)) 

		{
			document.getElementById("sender_email_val").value='';
			document.getElementById("sender_email_val").placeholder ='Please Enter Valid Email';
		 document.getElementById("sender_email_val").style.borderColor='#F00';

		  if(checkFocus!=1)

			 document.getElementById("sender_email_val").focus();	

			var checkFocus=1;

		}

		else

		{ 

			ajax();



			if (doc)

			{ 
				//alert(sender_email);
			  doc.open("GET", "ajax.php?section=check_email_sender&email="+sender_email, false);   

			  doc.send(null);

			}

			//alert(doc.responseText);//return false;

			

		    if(doc.responseText==1)

		    {	
				document.getElementById("sender_email_val").value='';
			document.getElementById("sender_email_val").placeholder ='Email Already Exits';
			

				document.getElementById("sender_email_val").focus();
 document.getElementById("sender_email_val").style.borderColor='#F00';	
				var	 checkFocus=1;

		    }

		    else

			document.getElementById("sender_email_val").value=doc.responseText;
			//document.getElementById("sender_email_val").placeholder ='';

		}

		

	 }
	 
	
		
	if(checkFocus==1)
		return false;
	else
		return true;
}

function valid_mobsave(frm)
{
	var checkFocus=0;
	var sender_phone=document.getElementById("sender_phone_val").value;
	//alert(sender_email)
	 
	 if(sender_phone=='')

	 {	 

		  document.getElementById("sender_phone_val").style.borderColor='#F00';

		  if(checkFocus!=1)

		  {

			 document.getElementById("sender_phone_val");
document.getElementById("sender_phone_val").style.borderColor='#F00';
			var checkFocus=1;

		  }

	 }

	 else

	 {
			ajax();
		if (doc)

			{ 
				//alert(sender_email);
			  doc.open("GET", "ajax.php?section=check_mobile_reg&mobile="+sender_phone, false);   

			  doc.send(null);

			}

			//alert(doc.responseText);//return false;

			

		    if(doc.responseText==1)

		    {	
				document.getElementById("sender_phone_val").value='';
			document.getElementById("sender_phone_val").placeholder ='Phone No Already Exits';
			 document.getElementById("sender_phone_val").style.borderColor='#F00';	

				document.getElementById("sender_phone_val");

				var	 checkFocus=1;

		    }

		    else

			document.getElementById("sender_phone_val").value=doc.responseText;
			//document.getElementById("sender_email_val").placeholder ='';

		}

		

	
	if(checkFocus==1)
		return false;
	else
		return true;
}



function get_service_drop()
{
	 var total_distance=document.getElementById('distance_road').value;

	var productid=document.getElementById("last_select_radio_id").value;
		
	var weight=document.getElementById("parcel_weight_1").value;
	var length=document.getElementById("parcel_girth_1").value;
	var width=document.getElementById("parcel_width_1").value;
	var height=document.getElementById("parcel_height_1").value;
	// ================changes 31/12/2016========================
	var select_type=document.getElementById("select_type").value;
	//alert(select_type);
		var origin=document.getElementById('origin_city').value;	
		var destination=document.getElementById('sel_destination_id_neww').value;	
				
				var interdestination="";
				var interorigin="";
			   if( origin=='' || destination=="" || weight=='' || length=='' ||  height=='')
				{
				
				var error_no=0;	
				}
				else
				{
				var error_no=1;
				}
				if( origin=="")document.getElementById("autocomplete").style.borderColor="#f00";
				else
				document.getElementById("autocomplete").style.borderColor="";
				
				
				if( destination=="") document.getElementById("autocomplete2").style.borderColor="#f00"; 
				else
				document.getElementById("autocomplete2").style.borderColor="";
			
	if( weight=="") document.getElementById("parcel_weight_1").style.borderColor="#f00"; 
	else
	document.getElementById("parcel_weight_1").style.borderColor="";
	if( length=="") document.getElementById("parcel_girth_1").style.borderColor="#f00"; 
	else
	document.getElementById("parcel_girth_1").style.borderColor="";
	if( width=="") document.getElementById("parcel_width_1").style.borderColor="#f00"; 
	else
	document.getElementById("parcel_width_1").style.borderColor="";
	if( height=="") document.getElementById("parcel_height_1").style.borderColor="#f00"; 
	else
	document.getElementById("parcel_height_1").style.borderColor="";
	
	
	/*alert(productid);
	alert(interorigin);
	alert(interdestination);
	alert(origin);
	alert(destination);
	alert(weight);
	alert(length);
	alert(width);
	alert(height);*/
	
	if( error_no==1)
	{
		 $("#myModal1").modal();
	ajax();
	if (doc)
	{
		/*  doc.open("GET",  site_url+"/ajax.php?section=get_service_drop&productid="+productid+"&origin="+origin+"&destination="+destination+"&interorigin="+interorigin+"&interdestination="+interdestination+"&weight="+weight+"&length="+length+"&width="+width+"&height="+height+"&select_type="+select_type+"&total_distance="+total_distance, false);*/   
		
	   doc.open("GET",  site_url+"/ajax.php?section=get_service_drop&productid="+productid+"&total_distance="+total_distance+"&weight="+weight+"&length="+length+"&width="+width+"&height="+height+"&select_type="+select_type+"&origin="+origin+"&destination="+destination, false);   
	   doc.send(null);
	}
	//alert(doc.responseText);
		
		
		 var arraylist=doc.responseText.split("**");
	 document.getElementById("servicesModal").innerHTML=arraylist[0];
	 if(arraylist[8]==0)
		   document.getElementById('errorid').innerHTML="<div class='alert alert-warning'>We're sorry, there is no service available here, please try another location!</div>";
		   else
		    document.getElementById('errorid').innerHTML="";
	 }	
	
	}


function valid_save_rec(frm)
{
	var checkFocus=0;
	var sender_email=document.getElementById("reciever_email").value;
	//alert(sender_email)
	 
	 if(sender_email=='')

	 {	 

		  document.getElementById("reciever_email").style.borderColor='#F00';

		  if(checkFocus!=1)

		  {

			frm.email.focus();

			var checkFocus=1;

		  }

	 }

	 else

	 {

		  var frmEmail1 =sender_email.toLowerCase();	

		  var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;

		if (!frmEmailformat.test(frmEmail1)) 

		{
			document.getElementById("reciever_email").value='';
			document.getElementById("reciever_email").placeholder ='Please Enter Valid Email';
		 document.getElementById("reciever_email").style.borderColor='#F00';

		  if(checkFocus!=1)

			 document.getElementById("reciever_email").focus();	

			var checkFocus=1;

		}

		else

		{ 

			ajax();



			if (doc)

			{ 
				//alert(sender_email);
			  doc.open("GET", "ajax.php?section=check_email_sender&email="+sender_email, false);   

			  doc.send(null);

			}

			//alert(doc.responseText);//return false;

			

		    if(doc.responseText==1)

		    {	
				document.getElementById("reciever_email").value='';
			document.getElementById("reciever_email").placeholder ='Email Already Exits';
			

				document.getElementById("reciever_email").focus();
 document.getElementById("reciever_email").style.borderColor='#F00';	
				var	 checkFocus=1;

		    }

		    else

			document.getElementById("reciever_email").value=doc.responseText;
			//document.getElementById("sender_email_val").placeholder ='';

		}

		

	 }
	 
	
		
	if(checkFocus==1)
		return false;
	else
		return true;
}

function valid_mobsave_rec(frm)
{
	var checkFocus=0;
	var sender_phone=document.getElementById("reciever_phone").value;
	//alert(sender_email)
	 
	 if(sender_phone=='')

	 {	 

		  document.getElementById("reciever_phone").style.borderColor='#F00';

		  if(checkFocus!=1)

		  {

			 document.getElementById("reciever_phone").focus();
document.getElementById("reciever_phone").style.borderColor='#F00';
			var checkFocus=1;

		  }

	 }

	 else

	 {
			ajax();
		if (doc)

			{ 
				//alert(sender_email);
			  doc.open("GET", "ajax.php?section=check_mobile_reg&mobile="+sender_phone, false);   

			  doc.send(null);

			}

			//alert(doc.responseText);//return false;

			

		    if(doc.responseText==1)

		    {	
				document.getElementById("reciever_phone").value='';
			document.getElementById("reciever_phone").placeholder ='Phone No Already Exits';
			 document.getElementById("reciever_phone").style.borderColor='#F00';	

				document.getElementById("reciever_phone").focus();

				var	 checkFocus=1;

		    }

		    else

			document.getElementById("reciever_phone").value=doc.responseText;
			//document.getElementById("sender_email_val").placeholder ='';

		}

		

	
	if(checkFocus==1)
		return false;
	else
		return true;
}



function show_coustmer_list_address(name)
{
		//alert(name);
		
	ajax();
	if (doc)
	{
	   doc.open("GET",  site_url+"/ajax.php?section=address_book&name="+name, false);   
	   doc.send(null);
	}
	//alert(doc.responseText);
	
	 var arraylist=doc.responseText.split("**");
		//document.getElementById("lock_hint1").value=arraylist[0];
		document.getElementById("reciever_zip").value=arraylist[1];
		document.getElementById("rec_state").value=arraylist[2];
		document.getElementById("rec_city").value=arraylist[3];
		document.getElementById("reciever_address").value=arraylist[4];
		document.getElementById("reciever_phone").value=arraylist[5];
		document.getElementById("reciever_email").value=arraylist[6];
		document.getElementById("city_rec").value=arraylist[7];
		document.getElementById("lock_hint").innerHTML=arraylist[8];
		document.getElementById("lock_hint1").innerHTML=arraylist[8];
		
	loding_img_hide();
} 


function Valid_messanger(frm)
{
	
	
	
	var checkFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name").style.borderColor='';
	
	if(frm.code.value=='')
	{	
		document.getElementById("code").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.code.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("code").style.borderColor='';
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("phone").style.borderColor='';
	
	if(frm.email.value=='')
	{	
		document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			//document.getElementById("email").innerHTML=lang_please_enter_valid_email_address;
			alert(please_enter_valid_email);
			if(checkFocus!=1)
				frm.email.focus();	
			var checkFocus=1;
		}
		else
		document.getElementById("email").style.borderColor='';
	}
	
	if(frm.sel_country.value=='')
	{	
		document.getElementById("sel_country").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sel_country.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sel_country").style.borderColor='';
	

	if(frm.city.value=='')
	{	
		document.getElementById("city").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.city.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city").style.borderColor='';
		
		
		if(frm.vehicle_no.value=='')
	{	
		document.getElementById("vehicle_no").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.vehicle_no.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("vehicle_no").style.borderColor='';
		
		
		if(frm.password.value=='')
	{	
		document.getElementById("password").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.password.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("vehicle_no").style.borderColor='';
	
		
	if(checkFocus==1)
		return false;
	else
		return true;
}

function Valid_customer(frm)
{
	var checkFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name").style.borderColor='';
		
		
if(frm.company.value=='')
	{	
		document.getElementById("company").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.company.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("company").style.borderColor='';
		
if(frm.city_id.value=='')
	{	
		document.getElementById("city_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.city_id.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city_id").style.borderColor='';
		
		
		if(frm.address.value=='')
	{	
		document.getElementById("address").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("address").style.borderColor='';
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("phone").style.borderColor='';
		
		
if(frm.id.value=='')
	{		
	if(frm.email.value=='')
	{	
		document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			alert(lang_please_enter_valid_email_address);
			document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.email.focus();	
			var checkFocus=1;
			}
		}
			else
			
			{ 
			//alert(frm.email.value);
			ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_email&email_id="+frm.email.value, false);   
				doc.send(null);
			   }
			  // alert(doc.responseText);
			}
			if(doc.responseText==1)
		   {	
		   		alert(lang_email_id_already_exists);
				
		   		document.getElementById("email").style.borderColor='#F00';
				frm.email.focus();
				var	 checkFocus=1;
		   }
		   else
		   document.getElementById("email").style.borderColor='';
		
	 
	}	
	}
	//==========================password validation====================================//	
	
		if(frm.password.value=='')
		{	
			document.getElementById("alert_password").style.borderColor='#F00';
				if(checkFocus!=1)
				{
					frm.password.focus();
					var checkFocus=1;
				}
		}
		else
		
			document.getElementById("alert_password").style.borderColor='';
			
			
			if(frm.password.value!=frm.conf_password.value)
			{
				document.getElementById("alert_conf_password").style.borderColor='#F00'; 
				if(checkFocus!=1)
					frm.conf_password.focus();
				var checkFocus=1;	
			}
			else
			{
				document.getElementById("alert_conf_password").style.borderColor='';
			}
			
	
			
	//=========================================================================================//		
	
	//===========================for user name validation==========================================//
	/*if(frm.id.value=='')
	{
		if(frm.user_name.value=='')
		{	
			document.getElementById("alert_user_name").innerHTML='Please Enter user Name';
				if(checkFocus!=1)
				{
					frm.user_name.focus();
					var checkFocus=1;
				}
		}
		else
		{
			ajax();
			if (doc){
				   doc.open("GET", "ajax.php?section=check_customer_avilable&cus_name="+frm.user_name.value, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			if(doc.responseText==1)
			{	
				document.getElementById("alert_user_name").innerHTML='Already Exits';
				frm.user_name.focus();
				var	 checkFocus=1;
			}
			else
				document.getElementById("alert_user_name").innerHTML="";
		}
	}*/
			
		
		
	//alert(checkFocus);
	
			
	if(checkFocus==1)
		return false;
	else
		return true;

		
		}


/*function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
	var string_length = 9;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.add_ship.slip_no.value = randomstring;
}*/

/*
function isNum(val,id) {
   if (val.value.length != 0) {
   
      for (i = 0; i < val.value.length; i++) 
	  {
         var ch = val.value.charAt(i);
		 
         if ((ch >= "0" && ch <= "9") || ch==".")
		 {document.getElementById(id).innerHTML="";
		  continue;
		 }
          else 
		  	{
				document.getElementById(id).innerHTML="Please enter Numeric value";
				val.value = "";
		 		val.focus();
		  		//sel_id.select();
			false;
          	}
      	}
   	}
   return true;
} 

*/

function Valid_rates(frm)
{
	var checkFocus=0;
	
	if(frm.title.value=='')
	{	
		document.getElementById("alert_title").innerHTML=lang_please_enter_title;
			if(checkFocus!=1)
			{
				frm.title.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("alert_title").innerHTML="";
		
	if(frm.timing.value=='')
	{	
		document.getElementById("alert_timing").innerHTML=lang_please_enter_timing;
			if(checkFocus!=1)
			{
				frm.timing.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("alert_timing").innerHTML="";	
		
	if(frm.edit_select_service_id.value=='')
	{	
		if(frm.sel_service_id.value=='')
		{	
			document.getElementById("alert_service_id").innerHTML=lang_please_select_service;
				if(checkFocus!=1)
				{
					frm.sel_service_id.focus();
					var checkFocus=1;
				}
		}
		else
		{
			ajax();
				if (doc){
					   doc.open("GET", "ajax.php?section=checkServiceRatesExits&service_id="+frm.sel_service_id.value+"&customer_id="+frm.customer_id.value, false);   
					   doc.send(null);
				}
				//alert(doc.responseText);
				if(doc.responseText==1)
				{	
					document.getElementById("alert_service_id").innerHTML=lang_service_rate_already_exists;
					frm.sel_service_id.focus();
					var	 checkFocus=1;
				}
				else
					document.getElementById("alert_service_id").innerHTML="";
		}
	}
	
	
	
	if(checkFocus==1)
		return false;
	else
		return true;
}

function Valid_news(frm)
{ 
	var checkFocus=0;
	
	if(frm.heading.value=='')
	{	
		document.getElementById("heading_id").innerHTML=lang_please_enter_heading;
			if(checkFocus!=1)
			{
				frm.heading.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("heading_id").innerHTML=""; 
	/*
	if(frm.content.value=='')
	{	
		document.getElementById("content_id").innerHTML="<span class='alert'>Please enter content.</span>";
			if(checkFocus!=1)
			{
				frm.content.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("content_id").innerHTML="";*/
	
	
	
	if(checkFocus==1)
		return false;
	else
		return true;
}



/*function Valid_news(frm)
{ 
	var checkFocus=0;
	
	if(frm.heading.value=='')
	{	
		document.getElementById("heading").innerHTML=lang_please_enter_heading;
			if(checkFocus!=1)
			{
				frm.heading.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("heading").innerHTML="";
		
		
	if(frm.content.value=='')
	{	
		document.getElementById("content").innerHTML="<span class='alert'>Please enter content.</span>";
			if(checkFocus!=1)
			{
				frm.content.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("content").innerHTML="";
	
	
	
	if(checkFocus==1)
		return false;
	else
		return true;
}*/

function show_coustmer_list()
{
	if(document.getElementById("cust_list").style.display=="block")
	{
		document.getElementById("cust_list").style.display="none";
	}
	else
	{
		document.getElementById("cust_list").style.display="block";
	}
	document.getElementById("rate_list").style.display="none";
}

function show_cust_list(city)
{
	ajax();
	
	if (doc){
	       doc.open("GET", "ajax.php?section=show_cust&city="+city, false);   
	       doc.send(null);
	   }
	   
	   var arraylist=doc.responseText.split("**");
	   
	   	document.getElementById("cust_list_1").innerHTML=arraylist[0];
		document.getElementById("cust_list_1").style.display="block";
		}


function show_rate_list(cust_id)
{		//alert('xxxxxxx');
	ajax();
var dest_id=document.getElementById("dest_id").value;
//alert(document.getElementById("dest_id").value);
	if (doc){
	       doc.open("GET", "ajax.php?section=show_rate&cust_id="+cust_id+"&dest_id="+dest_id, false);   
	       doc.send(null);
	   }
	   //alert(doc.responseText);
	   var arraylist=doc.responseText.split("**");
	   
	 
		document.getElementById("sender_name_val").value=arraylist[0];
		document.getElementById("sender_address_val").value=arraylist[1];
		document.getElementById("sender_phone_val").value=arraylist[2];
		document.getElementById("sender_fax_val").value=arraylist[3];
		document.getElementById("sender_email_val").value=arraylist[4];
		document.getElementById("shippers_ac_no_val").value=arraylist[5];
		document.getElementById("sender_zip_val").value=arraylist[6];  
		document.getElementById("rate_list").innerHTML=arraylist[7];
}



function show_customer_detail(cust_id)
{		//alert('xxxxxxx');
	ajax();


	if (doc){
	       doc.open("GET", "ajax.php?section=show_customer_detail&cust_id="+cust_id, false);   
	       doc.send(null);
	   }
	// alert(doc.responseText);
	   var arraylist=doc.responseText.split("**");
	   
	 
		document.getElementById("sender_name_val").value=arraylist[0];
		document.getElementById("sender_address_val").value=arraylist[1];
		document.getElementById("sender_phone_val").value=arraylist[2];
		document.getElementById("sender_fax_val").value=arraylist[3];
		document.getElementById("sender_email_val").value=arraylist[4];
		document.getElementById("shippers_ac_no_val").value=arraylist[5];
		document.getElementById("sender_zip_val").value=arraylist[6];  
		document.getElementById("sender_city").value=arraylist[7];  
		document.getElementById("sender_city_id").value=arraylist[8];  
		document.getElementById("sender_country_id").value=arraylist[9];  
	
}


function set_value(rate_id)
{
	ajax();
	//alert(rate_id);
	//alert(document.getElementById("coustomer_id").value);
	var weight=document.getElementById("weight_val").value;
	var coustomer_id=document.getElementById("coustomer_id").value;
	if (doc)
	{
	       doc.open("GET", "ajax.php?section=fill_rate&rate_id="+rate_id+"&weight="+weight+"&coustomer_id="+coustomer_id, false);   
	       doc.send(null);
	}
	//alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];
	
}

function set_value_input(weight)
{
	
	ajax();
	var rate_id='';
	if(document.getElementById("rate_id_val")!=null)
		rate_id=document.getElementById("rate_id_val").value;
	else	
		rate_id=0;
	if (doc)
	{
	       doc.open("GET", "ajax.php?section=fill_rate&rate_id="+rate_id+"&weight="+weight, false);   
	       doc.send(null);
	}
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	
}

/*****************************************************************************************************************/
/**********************************Validation of add Product*********************************************************/
/*****************************************************************************************************************/
function Valid_addproduct(frm)
{ 
	 var checkFocus=0;
 if(frm.procut_type.value=='')
		{	
			document.getElementById("product_info").innerHTML=lang_please_enter_product_name;
			if(checkFocus!=1)
			{	frm.procut_type.focus();			var	checkFocus=1;		
			}
		}
		else
		{ 
			ajax();
			if (doc)
			{ 
			   doc.open("GET", site_url+"/ajax.php?section=check_product&procut_type="+frm.procut_type.value, false);   
			   doc.send(null);
			}
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					document.getElementById("product_info").innerHTML=lang_product_name_already_exists;
					frm.procut_type.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("product_info").innerHTML="";
		}
	  
	if(checkFocus==1)
		 return false;
	 else
		 return true;
}

/*****************************************************************************************************************/
/**********************************Validation of add Services*********************************************************/
/*****************************************************************************************************************/
function Valid_servicedesc(frm)
{ 
	 var checkFocus=0;
	if(frm.heading.value=='')
	{	
		document.getElementById("heading_info").innerHTML='<div class="alert alert-danger">'+lang_please_enter_services_name+'</div>';
			if(checkFocus!=1)
			{
				frm.heading.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("heading_info").innerHTML="";
/*
	if(frm.content.value=='')
	{	
		document.getElementById("content_info").innerHTML="<span class='alert'>Please enter content.</span>";
			if(checkFocus!=1)
			{
				frm.content.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("content_info").innerHTML="";*/
		
		
	if(checkFocus==1)
		 return false;
	 else
		 return true;
}


		


function Valid_addservices(frm)
{ 
	 var checkFocus=0;
		 
	if(frm.services.value=='')
		{	
			document.getElementById("service_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.services.focus();			var	checkFocus=1;		
			}
		}
		else
		{ 
			ajax();
			if (doc)
			{ 
			   doc.open("GET", site_url+"/ajax.php?section=check_services&services="+frm.services.value, false);   
			   doc.send(null);
			}
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					//document.getElementById("service_info").innerHTML=lang_service_already_exists;
					alert(lang_service_already_exists);
					frm.services.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("service_info").style.borderColor='';
		}
		

	if(checkFocus==1)
		 return false;
	 else
		 return true;
}





/*****************************************************************************************************************/
/**********************************Validation of add City*********************************************************/
/*****************************************************************************************************************/

function Valid_city(frm)
{
	var checkFocus=0;
	if(frm.country_id.value=='')
	{	
		document.getElementById("country_id").innerHTML=lang_please_select_country;
			if(checkFocus!=1)
			{
				frm.country_id.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("country_id").innerHTML="";
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").innerHTML=lang_enter_the_city_name;
			if(checkFocus!=1)
			{
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name").innerHTML="";
		
		if(isNaN(frm.postal_code.value)) {
			document.getElementById("postal").innerHTML=lang_please_enter_numeric_value;
			if(checkFocus!=1)
			{	frm.postal_code.focus();				 var checkFocus=1;			} 
			}
		else 
		if(frm.postal_code.value=='')
		{
		document.getElementById("postal").innerHTML=lang_please_enter_zip_code;
				if(checkFocus!=1)
				{	frm.postal_code.focus();				var checkFocus=1;			}
				}
			else
			document.getElementById("postal").innerHTML="";
			 
	
		
	if(checkFocus==1)
		return false;
	else
		return true;
}

/*****************************************************************************************************************/
/**********************************Validation of Root*********************************************************/
/*****************************************************************************************************************/
function Valid_root(frm)
{
	var checkFocus=0; 
	
	if(frm.sel_country.value=='')
	{	
		document.getElementById("sel_country").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sel_country.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sel_country").style.borderColor='';
		//alert(frm.sel_state.value);
	/*		
		if(frm.sel_state.value=='')
	{	
		document.getElementById("sel_state_info").innerHTML=lang_please_select_state;
			if(checkFocus!=1)
			{
				frm.sel_state.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sel_state_info").innerHTML="";
		
	
	if(frm.sel_city.value=='')
	{	
		document.getElementById("sel_city_info").innerHTML=lang_please_select_city;
			if(checkFocus!=1)
			{
				frm.sel_city.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sel_city_info").innerHTML="";*/
		
	if(frm.routecode.value=='')
	{	
		document.getElementById("routecode").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.routecode.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("routecode").style.borderColor='';
		
		
	if(frm.route.value=='')
	{	
		document.getElementById("route").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.route.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("route").style.borderColor='';
	
		
	if(checkFocus==1)
		return false;
	else
		return true;
}
/*****************************************************************************************************************/
/**********************************Validation of add Menifest*********************************************************/
/*****************************************************************************************************************/
function Valid_menifest(frm)
{
	var checkFocus=0;
	
	
		if(frm.mfrom.value=='')
	{	
		document.getElementById("mfrom").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.mfrom.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("mfrom").style.borderColor='';
		
		
		
		if(frm.mto.value=='')
	{	
		document.getElementById("mto").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.mto.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("mto").style.borderColor='';
		
		
		
		if(frm.mdate.value=='')
	{	
		document.getElementById("datepickto").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.mdate.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("datepickto").style.borderColor='';
		
		if(frm.branchtype.value=='S')
		
	{
		
		if(frm.messanger_id.value=='')
	{	
		document.getElementById("alert_messanger").innerHTML=lang_please_select_courrier_messanger;
			if(checkFocus!=1)
			{
				frm.alert_messanger.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("alert_messanger").innerHTML="";
	}
	
		if(checkFocus==1)
		return false;
	else
		return true;
}

/*****************************************************************************************************************/
/**********************************Validation of add & Edit DRS*********************************************************/
/*****************************************************************************************************************/


function Valid_drs(frm)
	{
//alert(document.getElementById("arr_awb_no").checked);

/* for checkng alpha num  code*/
/*var checkString = frm.ship_uniqueid.value;
if (checkString != "") 
{
    if ( /[^A-Z0-9\d]/.test(checkString))
	 {
		document.getElementById("slip_alphanum").innerHTML="<span class='alert'>Please enter Only AlphaNumeric Consignment Number.</span>";
	if(checkFocus!=1)
			{
				frm.ship_uniqueid.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("slip_alphanum").innerHTML="";
}*/

	/*if(frm.ship_uniqueid.value=='' && !(document.getElementById("arr_awb_no").checked))
	{	
		document.getElementById("ship_uniqueid").innerHTML="<span class='alert'>Please Enter AWB Number.</span>";
			if(checkFocus!=1)
			{
				frm.ship_uniqueid.focus();
				var checkFocus=1;
			}
	}
	else
	{
		if(frm.ship_uniqueid.value!='')
		{
			ajax();
			if (doc)
			{
				   doc.open("GET", "ajax.php?section=checked_drs_awb_no&ship_uniqueid="+frm.ship_uniqueid.value,false);   
				   doc.send(null);
			}
			alert(doc.responseText);
			if(doc.responseText==1)
			   {	
					document.getElementById("ship_uniqueid").innerHTML="<span class='alert'>AWB No. Not Exist.</span>";
					frm.ship_uniqueid.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("ship_uniqueid").innerHTML="";
		}
	}*/
	

/* for checkng Route Code */



	if(frm.city_id.value=='0' )
	{	
		document.getElementById("city_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.city_id.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("city_info").style.borderColor='';


	if(frm.routecode.value=='' )
	{	
		document.getElementById("show_route_dropdown").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.routecode.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("show_route_dropdown").style.borderColor='';


/* for checkng Messanger id*/

	if(frm.messanger_id.value=='' )
	{	
		document.getElementById("show_messanger_dropdown").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.messanger_id.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("show_messanger_dropdown").style.borderColor='';


	
		if(checkFocus==1)
		return false;
	else
		return true;
}


function Valid_drs_update(frm)
	{
//alert(document.getElementById("arr_awb_no").checked);

/* for checkng alpha num  code*/
/*var checkString = frm.ship_uniqueid.value;
if (checkString != "") 
{
    if ( /[^A-Z0-9\d]/.test(checkString))
	 {
		document.getElementById("slip_alphanum").innerHTML="<span class='alert'>Please enter Only AlphaNumeric Consignment Number.</span>";
	if(checkFocus!=1)
			{
				frm.ship_uniqueid.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("slip_alphanum").innerHTML="";
}*/

	/*if(frm.ship_uniqueid.value=='' && !(document.getElementById("arr_awb_no").checked))
	{	
		document.getElementById("ship_uniqueid").innerHTML="<span class='alert'>Please Enter AWB Number.</span>";
			if(checkFocus!=1)
			{
				frm.ship_uniqueid.focus();
				var checkFocus=1;
			}
	}
	else
	{
		if(frm.ship_uniqueid.value!='')
		{
			ajax();
			if (doc)
			{
				   doc.open("GET", "ajax.php?section=checked_drs_awb_no&ship_uniqueid="+frm.ship_uniqueid.value,false);   
				   doc.send(null);
			}
			alert(doc.responseText);
			if(doc.responseText==1)
			   {	
					document.getElementById("ship_uniqueid").innerHTML="<span class='alert'>AWB No. Not Exist.</span>";
					frm.ship_uniqueid.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("ship_uniqueid").innerHTML="";
		}
	}*/
	

/* for checkng Route Code */

	if(frm.city_id.value=='' )
	{	
		document.getElementById("city_info").innerHTML=lang_please_select_city;
			if(checkFocus!=1)
			{
				frm.city_id.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("city_info").innerHTML="";


	if(frm.routecode.value=='' )
	{	
		document.getElementById("routecode").innerHTML=lang_please_enter_route_code;
			if(checkFocus!=1)
			{
				frm.routecode.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("routecode").innerHTML="";


/* for checkng Messanger id*/

	if(frm.messanger_id.value=='' )
	{	
		document.getElementById("messanger_id").innerHTML=lang_please_select_messanger;
			if(checkFocus!=1)
			{
				frm.messanger_id.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("messanger_id").innerHTML="";


	
		if(checkFocus==1)
		return false;
	else
		return true;
}


function Valid_pickup(frm)
	{
//alert(document.getElementById("arr_awb_no").checked);

/* for checkng alpha num  code*/
/*var checkString = frm.ship_uniqueid.value;
if (checkString != "") 
{
    if ( /[^A-Z0-9\d]/.test(checkString))
	 {
		document.getElementById("slip_alphanum").innerHTML="<span class='alert'>Please enter Only AlphaNumeric Consignment Number.</span>";
	if(checkFocus!=1)
			{
				frm.ship_uniqueid.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("slip_alphanum").innerHTML="";
}*/

	/*if(frm.ship_uniqueid.value=='' && !(document.getElementById("arr_awb_no").checked))
	{	
		document.getElementById("ship_uniqueid").innerHTML="<span class='alert'>Please Enter AWB Number.</span>";
			if(checkFocus!=1)
			{
				frm.ship_uniqueid.focus();
				var checkFocus=1;
			}
	}
	else
	{
		if(frm.ship_uniqueid.value!='')
		{
			ajax();
			if (doc)
			{
				   doc.open("GET", "ajax.php?section=checked_drs_awb_no&ship_uniqueid="+frm.ship_uniqueid.value,false);   
				   doc.send(null);
			}
			alert(doc.responseText);
			if(doc.responseText==1)
			   {	
					document.getElementById("ship_uniqueid").innerHTML="<span class='alert'>AWB No. Not Exist.</span>";
					frm.ship_uniqueid.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("ship_uniqueid").innerHTML="";
		}
	}*/
	

/* for checkng Route Code */

	if(frm.city_id.value=='0' )
	{	
		document.getElementById("city_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.city_id.focus();
				var checkFocus=1;
			}
	}
	else
					document.getElementById("city_info").style.borderColor='';


	if(frm.routecode.value=='' )
	{		document.getElementById("show_route_dropdown").style.borderColor='#F00';
		
			if(checkFocus!=1)
			{
				frm.routecode.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("show_route_dropdown").style.borderColor='';


/* for checkng Messanger id*/

	if(frm.messanger_id.value=='' )
	{	
		document.getElementById("show_messanger_dropdown").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.messanger_id.focus();
				var checkFocus=1;
			}
	}
	else
				document.getElementById("show_messanger_dropdown").style.borderColor='';


	
		if(checkFocus==1)
		return false;
	else
		return true;
}


/*****************************************************************************************************************/
/**********************************Validation of add Shipment*********************************************************/
/*****************************************************************************************************************/


function Valid_ship(frm)
{
	show_wating_image_open();
	
	var checkFocus=0;
	
	if(frm.Bookingmode.value=='COD')
	{	
		if(frm.total_cod_amt.value=='')
		{	
			document.getElementById("total_cod_amt").style.borderColor='#F00';
				if(checkFocus!=1)
				{
					frm.total_cod_amt.focus();
					var checkFocus=1;
					var FORMMISTAK1=1;
				}
		}
		else
			document.getElementById("total_cod_amt").style.borderColor='';
	}
	
	
if(frm.sender_name.value=='')
	{	
		document.getElementById("sender_name_val").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				//frm.sender_name.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_name_val").style.borderColor='';

if(frm.sender_address.value=='')
	{	
		document.getElementById("sender_address_val").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_address.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
	document.getElementById("sender_address_val").style.borderColor='';

/*if(frm.sender_zip.value=='')
	{	
		document.getElementById("sender_zip_val").style.borderColor='';
			if(checkFocus!=1)
			{
				frm.sender_zip.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_zip_val").innerHTML="";
*/
if(frm.sender_phone.value=='')
	{	
		document.getElementById("sender_phone_val").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_phone.focus();
				var checkFocus=1;
			
			}
	}
	else
		document.getElementById("sender_phone_val").style.borderColor='';
		



if(frm.sender_email.value=='')
	{	
		document.getElementById("sender_email_val").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_email.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("sender_email_val").style.borderColor='';
/*if(frm.sender_fax.value=='')
	{	
		document.getElementById("sender_fax").innerHTML=lang_please_enter_sender_fax;
			if(checkFocus!=1)
			{
				frm.sender_fax.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_fax").innerHTML="";

if(frm.sender_email.value=='')
	{	
		document.getElementById("sender_email").innerHTML=lang_please_enter_sender_email;
			if(checkFocus!=1)
			{
				frm.sender_email.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_email").innerHTML="";

*/

if(frm.reciever_name.value=='')
	{	
		document.getElementById("lock_hint1").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				//frm.reciever_name.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("lock_hint1").style.borderColor='';

if(frm.reciever_address.value=='')
	{	
		document.getElementById("reciever_address").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_address.focus();
				var checkFocus=1;
				var FORMMISTAK3=1;
			}
	}
	else
		document.getElementById("reciever_address").style.borderColor='';

/*if(frm.reciever_zip.value=='')
	{	
		document.getElementById("reciever_zip").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_zip.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("reciever_zip").style.borderColor='';
*/
if(frm.reciever_phone.value=='')
	{	
		document.getElementById("reciever_phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_phone.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("reciever_phone").style.borderColor='';
		
	if(frm.reciever_email.value=='')
	{	
		document.getElementById("reciever_email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_email.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("reciever_email").style.borderColor='';
		
		
	//===================sender country city validation==================//
	
		
	if(frm.sender_city.value=='')
	{	
		document.getElementById("sender_city").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_city.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("sender_city").style.borderColor='';	
		
	
		
	if(frm.rec_city_id.value=='')
	{	
		document.getElementById("rec_city_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.rec_city_id.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("rec_city_id").style.borderColor='';		
	//===================================================================//	

/*if(frm.reciever_fax.value=='')
	{	
		document.getElementById("reciever_fax").innerHTML=lang_please_enter_reciever_fax;
			if(checkFocus!=1)
			{
				frm.reciever_fax.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_fax").innerHTML="";

if(frm.reciever_email.value=='')
	{	
		document.getElementById("reciever_email").innerHTML=lang_please_enter_reciever_email;
			if(checkFocus!=1)
			{
				frm.reciever_email.focus();
				var checkFocus=1;
				var FORMMISTAK3=1;
			}
	}
	else
		document.getElementById("reciever_email").innerHTML="";
*/
if(frm.service_id.value=='')
	{	
		document.getElementById("service_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sel_service_id.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("service_id").style.borderColor='';

/*
if(frm.packing_charge.value=='')
	{	
		document.getElementById("packing_charge").innerHTML=lang_please_enter_packing_charge;
			if(checkFocus!=1)
			{
				frm.packing_charge.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("packing_charge").innerHTML="";


if(frm.service_tax.value=='')
	{	
		document.getElementById("service_tax").innerHTML=lang_please_enter_service_tax;
			if(checkFocus!=1)
			{
				frm.service_tax.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("service_tax").innerHTML="";


if(frm.valuation_charges.value=='')
	{	
		document.getElementById("valuation_charges").innerHTML=lang_please_enter_valuation_charge;
			if(checkFocus!=1)
			{
				frm.valuation_charges.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("valuation_charges").innerHTML="";


if(frm.other_charges.value=='')
	{	
		document.getElementById("other_charges").innerHTML=lang_please_enter_other_charge;
			if(checkFocus!=1)
			{
				frm.other_charges.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("other_charges").innerHTML="";

if(frm.route_code.value=='')
	{	
		document.getElementById("route_code").innerHTML=lang_please_enter_route_code;
			if(checkFocus!=1)
			{
				frm.route_code.focus();
				var checkFocus=1;
				var FORMMISTAK4=1;
			}
	}
	else
		document.getElementById("route_code").innerHTML="";

if(frm.declared_charge.value=='')
	{	
		document.getElementById("declared_charge").innerHTML=lang_please_enter_declared_charge;
			if(checkFocus!=1)
			{
				frm.declared_charge.focus();
				var checkFocus=1;
				var FORMMISTAK4=1;
			}
	}
	else
		document.getElementById("declared_charge").innerHTML="";

if(frm.messanger_id.value=='')
	{	
		document.getElementById("alert_messanger").innerHTML=lang_please_select_courier_messenger;
			if(checkFocus!=1)
			{
				frm.messanger_id.focus();
				var checkFocus=1;
				var FORMMISTAK4=1;
			}
	}
	else
		document.getElementById("alert_messanger").innerHTML="";		

*/

	if(checkFocus==1)
	{
		show_wating_image_close();
				
		return false;
		
				
	}
	else
	{
		document.getElementById('submit').style.display="none"
		document.getElementById('cancel').style.display="none"
	
			return true;
		
		
	
	}
}
/*****************************************************************************************************************/
/**********************************Validation of add Delievry*********************************************************/
/*****************************************************************************************************************/
function Valid_delevery(frm)
{
	var checkFocus=0;
	
	if(frm.delevered_to.value=='')
	{	
		document.getElementById("delevered_to").innerHTML=lang_please_enter_reciever_name;
			if(checkFocus!=1)
			{
				frm.delevered_to.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("delevered_to").innerHTML="";

	if(frm.delevered_no.value=='')
	{	
		document.getElementById("delevered_no").innerHTML=lang_please_enter_reciever_number;
			if(checkFocus!=1)
			{
				frm.delevered_no.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("delevered_no").innerHTML="";


		
	if(checkFocus==1)
		return false;
	else
		return true;
}

/*****************************************************************************************************************/
/**********************************Validation of Search*********************************************************/
/*****************************************************************************************************************/
function Valid_search(frm)
{
	var checkFocus=0;
	
	if(frm.search_val.value=='')
	{	
		document.getElementById("search_val").innerHTML=lang_please_enter_valid_value_for_search;
			if(checkFocus!=1)
			{
				frm.search_val.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("search_val").innerHTML="";
		
	if(checkFocus==1)
		return false;
	else
		return true;
}

//show_service
function show_service(service)
{
	ajax();
		if (doc)
		{
			   doc.open("GET", "ajax.php?section=show_service_detail&service_id="+service, false);   
			   doc.send(null);
		}
		//alert(doc.responseText);
 document.getElementById("idservice").innerHTML=doc.responseText;
}

function show_contact(contact)
{
 document.getElementById("AC").style.display="none";
 document.getElementById("MC").style.display="none";
 document.getElementById("BC").style.display="none";
 document.getElementById(contact).style.display="block";
}

function fill_sender(cust_id)
{
	ajax();
	
	if (doc){
	       doc.open("GET", "ajax.php?section=fill_sender&cust_id="+cust_id, false);   
	       doc.send(null);
	   }
	   
	   var arraylist=doc.responseText.split("**");
	   
	   	document.getElementById("sender_name_val").value=arraylist[0];
		document.getElementById("sender_address_val").value=arraylist[1];
		document.getElementById("sender_phone_val").value=arraylist[2];
		document.getElementById("sender_fax_val").value=arraylist[3];
		document.getElementById("sender_email_val").value=arraylist[4];
		document.getElementById("shippers_ac_no_val").value=arraylist[5];
		document.getElementById("sender_zip_val").value=arraylist[6];
}




function Show_rate_list(val)
{
	if(val=='Def')
	{
		document.getElementById('default_list').style.display='block';
		document.getElementById('customer_list').style.display='none';
		document.getElementById('add_button').style.display='block';
	}
	if(val=='Cus')
	{
		document.getElementById('default_list').style.display='none';
		document.getElementById('add_button').style.display='none';
		document.getElementById('customer_list').style.display='block';
	}
}


function show_total_charge(frm)
{
	//alert(frm.service_charge.value);
	//var service_charge=packing_charge=valuation_charges=other_charges=service_tax=0;
	if(service_charge!='')
	var service_charge=frm.service_charge.value;
		else 
	var service_charge=0;
	
	
	var	service_tax=parseFloat(document.getElementById('Default_Service_Tax').value);
	

//alert(service_tax);
	total_charge= parseFloat(service_charge);
	var ser_tax=(service_tax*total_charge)/100;
	total_charge=total_charge+ser_tax;
	
	//total_charge=service_charge+packing_charge+ valuation_charges+other_charges+service_tax;
	//alert(total_charge);
	
	document.getElementById('show_total_amount_id').value=total_charge;
	document.getElementById('service_tax_val').value=ser_tax;

}

function show_status_from(val)
{
	//alert(val);
	if(val=='D')
	{
	
	document.getElementById('show_deliver').style.display='block';
	document.getElementById('show_other').style.display='none';
	document.getElementById('delay_show').style.display='none';
	document.getElementById('show_courier').style.display='block';
	
	
	}
	if(val=='DL' || val=='R')
	{
	document.getElementById('delay_show').style.display='block';
	document.getElementById('show_deliver').style.display='none';
	document.getElementById('show_other').style.display='none';
	document.getElementById('show_courier').style.display='none';
	}
	if(val=='T')
	{
		document.getElementById('show_courier').style.display='block';
		document.getElementById('show_other').style.display='none';
		document.getElementById('show_deliver').style.display='none';
		document.getElementById('delay_show').style.display='none';
		
	}
	if(val=='IT')
	{
		document.getElementById('show_deliver').style.display='none';
		document.getElementById('show_other').style.display='block';
		document.getElementById('delay_show').style.display='none';
			document.getElementById('show_courier').style.display='none';
	}
}
/*function show_status_from(val)
{
	if(val=='D')
	{
		document.getElementById('status_from').style.display='none';
		document.getElementById('reciver_from').style.display='block';
	}
	else
	{
		document.getElementById('status_from').style.display='block';
		document.getElementById('reciver_from').style.display='none';
	}
	
	if(val=='COD')
	{
		document.getElementById('cod_show_id').style.display='block';
	}
	else
	{
		document.getElementById('cod_show_id').style.display='none';
	}
}
*/
function show_shipment_list(val)
{
	if(val=='D' || val=='SP')
	{
		document.getElementById('undelvered').style.display='none';
		document.getElementById('delvered').style.display='block';
		document.getElementById('delivered_shipment').style.display='block';
		document.getElementById('undelivered_shipment').style.display='none';
	}
else if(val=='T')
	{
		document.getElementById('undelvered').style.display='block';
		document.getElementById('delvered').style.display='none';
		document.getElementById('delivered_shipment').style.display='none';
		document.getElementById('undelivered_shipment').style.display='block';
	}
	else
	{
		}
}


function select_bookingmode_cod(val)
{
	//alert(val);
	if(val=='COD' || val=='ToPay')
	{
		document.getElementById('cod_show_id').style.display='block';
	}
	else
	{
		document.getElementById('cod_show_id').style.display='none';
	}
}

function Valid_status(frm)
{
	var checkFocus=0;
	
	if(frm.pickup_time.value=='')
	{	
		document.getElementById("pickup_timeinfo").innerHTML=lang_please_enter_pickup_time;
			if(checkFocus!=1)
			{
				frm.pickup_time.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("pickup_timeinfo").innerHTML="";

	if(frm.pick_date.value=='')
	{	
		document.getElementById("pick_dateinfo").innerHTML=lang_please_enter_pickup_date;
			if(checkFocus!=1)
			{
				frm.pick_date.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("pick_dateinfo").innerHTML="";
		
			if(frm.activites.value=='')
	{	
		document.getElementById("activitesinfo").innerHTML=lang_please_enter_activite;
			if(checkFocus!=1)
			{
				frm.activites.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("activitesinfo").innerHTML="";
		
			if(frm.details.value=='')
	{	
		document.getElementById("detailsinfo").innerHTML=lang_please_enter_detail;
			if(checkFocus!=1)
			{
				frm.details.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("detailsinfo").innerHTML="";


		
	if(checkFocus==1)
		return false;
	else
	{
		status_shipment_SMS_SEND(frm.slip_no.value,frm.pickup_time.value,frm.pick_date.value,frm.pickup_location.value,frm.reciever_phone.value,frm.sender_phone.value,frm.new_location.value,frm.status.value); 
		return true;
	}
}


function Valid_status_reciver(frm)
{
	var checkFocus=0;
	
	if(frm.reciever_name.value=='')
	{	
		document.getElementById("reciever_nameinfo").innerHTML=lang_please_enter_reciever_name;
			if(checkFocus!=1)
			{
				frm.reciever_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_nameinfo").innerHTML="";

	if(frm.reciever_address.value=='')
	{	
		document.getElementById("reciever_addressinfo").innerHTML=lang_please_enter_reciever_address;
			if(checkFocus!=1)
			{
				frm.reciever_address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_addressinfo").innerHTML="";
		
	if(frm.reciever_phone.value=='')
	{	
		document.getElementById("reciever_phoneinfo").innerHTML=lang_please_enter_reciever_phone;
			if(checkFocus!=1)
			{
				frm.reciever_phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_phoneinfo").innerHTML="";
		
	if(frm.cor_name.value=='')
	{	
		document.getElementById("cor_nameinfo").innerHTML=lang_please_enter_courier_boy_name;
			if(checkFocus!=1)
			{
				frm.cor_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("cor_nameinfo").innerHTML="";
		
	if(frm.cor_phone.value=='')
	{	
		document.getElementById("cor_phoneinfo").innerHTML=lang_please_enter_courier_boy_mobile;
			if(checkFocus!=1)
			{
				frm.cor_phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("cor_phoneinfo").innerHTML="";	
		
		if(frm.rpickup_time.value=='')
	{	
		document.getElementById("pickup_timeinfor").innerHTML=lang_please_enter_pickup_time;
			if(checkFocus!=1)
			{
				frm.rpickup_time.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("pickup_timeinfor").innerHTML="";

	if(frm.rpick_date.value=='')
	{	
		document.getElementById("pick_dateinfor").innerHTML=lang_please_enter_pickup_date;
			if(checkFocus!=1)
			{
				frm.rpick_date.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("pick_dateinfor").innerHTML="";
		
			if(frm.ractivites.value=='')
	{	
		document.getElementById("activitesinfor").innerHTML=lang_please_enter_activite;
			if(checkFocus!=1)
			{
				frm.ractivites.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("activitesinfor").innerHTML="";
		
			if(frm.rdetails.value=='')
	{	
		document.getElementById("detailsinfor").innerHTML=lang_please_enter_detail;
			if(checkFocus!=1)
			{
				frm.rdetails.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("detailsinfor").innerHTML="";


		
	if(checkFocus==1)
		return false;
	else
	{
		status_shipment_SMS_SEND(frm.slip_no.value,frm.pickup_time.value,frm.pick_date.value,frm.pickup_location.value,frm.reciever_phone.value,frm.sender_phone.value,frm.new_location.value,frm.status.value); 
		return true;
	}
}


function Valid_branch(frm)
{
	var checkFocus=0;
	
	
			if(frm.city.value=='')
	{	
		document.getElementById("city").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.city.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city").style.borderColor='';
		
		
		
		if(frm.branch_person.value=='')
	{	
		document.getElementById("branch_person_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.branch_person.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("branch_person_id").style.borderColor='';
		
		
		
		if(frm.branch_address.value=='')
	{	
		document.getElementById("branch_address_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{

				frm.branch_address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("branch_address_id").style.borderColor='';
		
		
		
		if(frm.branch_contact.value=='')
	{	
		document.getElementById("branch_contact_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.branch_contact.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("branch_contact_id").style.borderColor='';
	if(checkFocus==1)
		return false;
	else
		return true;
}





function Valid_mails(frm)
{
	var checkFocus=0;
	
	if(frm.subject.value=='')
	{	
		document.getElementById("subject_info").innerHTML=lang_please_enter_subject;
			if(checkFocus!=1)
			{
				frm.subject.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("subject_info").innerHTML="";

	if(checkFocus==1)
		return false;
	else
		return true;
}


function status_shipment_SMS_SEND(awb_no,current_time,current_date,pickup_location,reciver_no,sender_no,new_location,status)
{
	//alert(sender_no);
	ajax();
	
	if (doc){
	       doc.open("GET", "sms.php?send_sms=update_shipment&awb_no="+awb_no+"&current_time="+current_time+"&current_date="+current_date+"&pickup_location="+pickup_location+"&reciver_no="+reciver_no+"&sender_no="+sender_no+"&new_location="+new_location+"&status="+status, false);   
	       doc.send(null);
	   }
	  // alert(doc.responseText);
}


function Valid_registration(frm)
{	var checkFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").style.borderColor='#F00';
			if(checkFocus!=1)
			{ 
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name").innerHTML="";
	
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("phone").innerHTML="";
		
	if(frm.address.value=='')
	{	
		document.getElementById("address").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("address").innerHTML="";
		
	if(frm.country.value=='')
	{	
		document.getElementById("country").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.country.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("country").style.borderColor='';
	if(frm.country.value!='')	
	{
		if(document.getElementById("city_id").value=='')
	{	
		document.getElementById("city_id").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				document.getElementById("city_id").focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city_id").style.borderColor='';
}
		/*if(frm.pincode.value=='')
	{	
		document.getElementById("sender_zip").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.pincode.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_zip").style.borderColor='';
*/	
	
	
	if(frm.email.value=='')
	{	
		document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			alert(lang_please_enter_valid_email_address);
			document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.email.focus();	
			var checkFocus=1;
			}
		}
			else
			
			{ 
			//alert(frm.email.value);
			ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_email&email_id="+frm.email.value, false);   
				doc.send(null);
			   }
			  // alert(doc.responseText);
			}
			if(doc.responseText==1)
		   {	
		   		alert(lang_email_id_already_exists);
				
		   		document.getElementById("email").style.borderColor='#F00';
				frm.email.focus();
				var	 checkFocus=1;
		   }
		   else
		   document.getElementById("email").style.borderColor='';
		
	 
	}	
	
	/*if(frm.username.value=='')
	{	
		document.getElementById("username").innerHTML=lang_please_enter_the_name;
			if(checkFocus!=1)
			{
				frm.username.focus();
				var checkFocus=1;
			}
	}
	else
	{
		ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_user_name&user_name="+frm.username.value, false);   
				doc.send(null);
			   }
		if(doc.responseText==1)
		   {	
		   		document.getElementById("username").innerHTML=user_name_already_exits;
				frm.username.focus();
				var	 checkFocus=1;
		   }
		   else
		   	document.getElementById("username").innerHTML="";
	}
		*/
		
	
	if(frm.password.value=='')
	{	
		document.getElementById("password").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.password.focus();
				var checkFocus=1;
			}
	}
	else
	
		document.getElementById("password").innerHTML="";
		
		
		if(frm.password.value!=frm.conf_password.value)
		{	alert('Password not Match!');
			document.getElementById("conf_password").style.borderColor='#F00';
			if(checkFocus!=1)
				frm.conf_password.focus();
			var checkFocus=1;	
		}
		else
			document.getElementById("conf_password").innerHTML="";
	
			
	if(checkFocus==1)
		return false;
	else
		return true;
	}


function Valid_edit_profile(frm)
{ 
//alert('xxxxxxxxxxxxxxx');
	var checkFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name_info").innerHTML=lang_please_enter_name;
			if(checkFocus!=1)
			{ 
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name_info").innerHTML="";
	
	if(frm.address.value=='')
	{	
		document.getElementById("address_info").innerHTML=lang_please_enter_address;
			if(checkFocus!=1)
			{
				frm.address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("address_info").innerHTML="";
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone_info").innerHTML=lang_please_enter_phone_no;
			if(checkFocus!=1)
			{
				frm.phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("phone_info").innerHTML="";
		
		if(frm.city.value=='')
	{	
		document.getElementById("city_info").innerHTML=lang_please_enter_city;
			if(checkFocus!=1)
			{
				frm.city.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city_info").innerHTML="";
	
	if(frm.email.value=='')
	{	
		document.getElementById("email_info").innerHTML=lang_email;
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("email_info").innerHTML=lang_please_enter_valid_email_address;
			if(checkFocus!=1)
			{	frm.email.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("email_info").innerHTML="";
	}
		
	if(checkFocus==1)
		return false;
	else
		return true;
}



function Valid_schedule(frm)
{
	var checkFocus=0;

	if(frm.origin_sel.value=='')
	{	
		document.getElementById("origin_sel").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.origin_sel.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("origin_sel").style.borderColor='';
			if(frm.destination.value=='')
	{	
		document.getElementById("destination").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.destination.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("destination").style.borderColor='';
		
		
		if(frm.contents.value=='')
	{	
		document.getElementById("contents").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.contents.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("contents").style.borderColor='';
		
		
		
		if(frm.goods.value=='')
	{	
		document.getElementById("goods").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.goods.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("goods").style.borderColor='';
					
		if(frm.weight.value=='')
	{	
		document.getElementById("weight").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.weight.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("weight").style.borderColor='';
		
	if(frm.crEmail.value=='')
	{	
		document.getElementById("crEmail").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.crEmail.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.crEmail.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("crEmail").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.crEmail.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("crEmail").style.borderColor='';
	}
	
			
		if(frm.crname.value=='')
	{	
		document.getElementById("crname").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.crname.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("crname").style.borderColor='';
				
			if(frm.craddress.value=='')
	{	
		document.getElementById("craddress").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.craddress.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("craddress").style.borderColor='';



	/*if(frm.ceaddress.value=='')
	{	
	//alert(ceaddress);
		document.getElementById("ceaddress_info").innerHTML=lang_please_enter_consignee_address;
			if(checkFocus!=1)
			{
				frm.ceaddress.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("ceaddress_info").innerHTML="";
*/
		
	if(frm.cename.value=='')
	{	
		document.getElementById("cename").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.cename.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("cename").style.borderColor='';
			
		if(frm.cephone.value=='')
	{	
		document.getElementById("cephone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.cephone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("cephone").style.borderColor='';
			
		if(frm.ceemail.value=='')
	{	
		document.getElementById("ceemail").style.borderColor='#F00';
			if(checkFocus!=1)

			{
				frm.ceemail.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.ceemail.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("ceemail").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.ceemail.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("ceemail").style.borderColor='';
	}
	
	
		
				
	if(checkFocus==1)
		return false;
	else
		return true;

	
}


function Valid_booking(frm)
{
		var checkFocus=0;
	
	
	
		if(frm.sel_product_type.value=='')
	{	
		document.getElementById("product_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sel_product_type.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("product_info").style.borderColor='';
		
			if(frm.sender_name.value=='')
	{	
		document.getElementById("sender_name").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_name").style.borderColor='';
		
		
		
		
		if(frm.booking_origin.value=='')
	{	
		document.getElementById("city_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.booking_origin.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city_info").style.borderColor='';
		
		if(frm.sender_address.value=='')
	{	
		document.getElementById("sender_address").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_address").style.borderColor='';
		
		/*if(frm.sender_zip.value=='')
	{	
		document.getElementById("sender_zip").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_zip.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_zip").style.borderColor='';
		
*/		
			if(frm.sender_phone.value=='')
	{	
		document.getElementById("sender_phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.sender_phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_phone").style.borderColor='';
		
		
		if(frm.sender_email.value=='')
	{	
		document.getElementById("sender_email").style.borderColor='#F00';
			if(checkFocus!=1)

			{
				frm.sender_email.focus();
				var checkFocus=1;
			}
	}
	else
		{
		var frmEmail1 =frm.sender_email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{	alert(lang_please_enter_valid_email_address);
			document.getElementById("sender_email").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.sender_email.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("sender_email").style.borderColor='';
	}
		
		
		if(frm.reciever_name.value=='')
	{	
		document.getElementById("reciever_name").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_name").style.borderColor='';
		
		if(frm.booking_destination.value=='')
	{	
		document.getElementById("destination_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.booking_destination.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("destination_info").style.borderColor='';
		
		
		if(frm.reciever_address.value=='')
	{	
		document.getElementById("reciever_address").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.craddress.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_address").style.borderColor='';
		
		/*if(frm.reciever_zip.value=='')
	{	
		document.getElementById("reciever_zip").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_zip.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_zip").style.borderColor='';*/
		
		if(frm.reciever_phone.value=='')
	{	
	alert(lang_please_enter_10_character_mobile_no);
		document.getElementById("reciever_phone").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.reciever_phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("reciever_phone").style.borderColor='';
		
		if(frm.reciever_email.value=='')
	{	
		document.getElementById("reciever_email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.crEmail.focus();
				var checkFocus=1;
			}
	}
	
		else
		{
		var frmEmail1 =frm.reciever_email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{	alert(lang_please_enter_valid_email_address);
			document.getElementById("reciever_email").style.borderColor='#F00';
			if(checkFocus!=1)
			{	frm.reciever_email.focus();	
			var checkFocus=1;

			}
		}
		else
		document.getElementById("reciever_email").style.borderColor='';
	}
		
		
	if(checkFocus==1)
		return false;
	else
		return true;

	
}






//=======================================================this validation use for login=====================================//

function Valid_customer_login(frm)
{ 
	var checkFocus=0;
	
	if(frm.user_name.value=='')
	{	
		document.getElementById("user_name_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{ 
				frm.user_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("user_name_info").style.borderColor='';
	
	if(frm.password.value=='')
	{	
		document.getElementById("password_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.password.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("password_info").style.borderColor='';
	
	

		
	if(checkFocus==1)
		return false;
	else
		return true;
}


function select_tab_home(id)
{ 
	alert(id);
		document.getElementById("tab"+id).className="tab-pane fade in active";
}





function Valid_operator_login(frm)
{ 
	var checkFocus=0;
	
	if(frm.user_name_o.value=='')
	{	
		document.getElementById("user_nameO_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{ 
				frm.user_name_o.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("user_nameO_info").innerHTML="";
	
	if(frm.password_o.value=='')
	{	
		document.getElementById("passwordO_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.password_o.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("passwordO_info").innerHTML="";
	
	

		
	if(checkFocus==1)
		return false;
	else
		return true;
}



//=================================================this validation use for header login=====================================//

function Valid_hcustomer_login(frm)
{ 
	var checkFocus=0;
	
	if(frm.user_name.value=='')
	{	
		document.getElementById("huser_name_info").innerHTML=lang_please_enter_user_name;
			if(checkFocus!=1)
			{ 
				frm.user_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("huser_name_info").innerHTML="";
	
	if(frm.password.value=='')
	{	
		document.getElementById("hpassword_info").innerHTML=lang_please_enter_password;
			if(checkFocus!=1)
			{
				frm.password.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("hpassword_info").innerHTML="";
	
	

		
	if(checkFocus==1)
		return false;
	else
		return true;
}




function Valid_hoperator_login(frm)
{ 
	var checkFocus=0;
	
	if(frm.user_name_o.value=='')
	{	
		document.getElementById("huser_nameO_info").innerHTML=lang_please_enter_user_name;
			if(checkFocus!=1)
			{ 
				frm.user_name_o.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("huser_nameO_info").innerHTML="";
	
	if(frm.password_o.value=='')
	{	
		document.getElementById("hpasswordO_info").innerHTML=lang_please_enter_password;
			if(checkFocus!=1)
			{
				frm.password_o.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("hpasswordO_info").innerHTML="";
	
	

		
	if(checkFocus==1)
		return false;
	else
		return true;
}




function Valid_quote(frm)
{ 
	var checkFocus=0;
	
	/*if(frm.sending_from.value=='')
	{	
		document.getElementById("city_info").innerHTML="<span class='alert'>Please Enter Sending From.</span>";
			if(checkFocus!=1)
			{ 
				frm.sending_from.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city_info").innerHTML="";
	
	if(frm.sending_to.value=='')
	{	
		document.getElementById("area_info").innerHTML="<span class='alert'>Please Enter Sending To.</span>";
			if(checkFocus!=1)
			{
				frm.sending_to.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("area_info").innerHTML="";
		
		if(frm.postal_code.value=='')
	{	
		document.getElementById("postalcode_info").innerHTML="<span class='alert'>Please Enter Sending From.</span>";
			if(checkFocus!=1)
			{ 
				frm.postal_code.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("postalcode_info").innerHTML="";
	*/
	
	
/*if(frm.dimensions.value=='')
	{	
		document.getElementById("dimensions_info").innerHTML="<span class='alert'>Please Enter Dimensions.</span>";
			if(checkFocus!=1)
			{
				frm.dimensions.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("dimensions_info").innerHTML="";
		*/
		
		if(frm.contact_name.value=='')
		{	
			document.getElementById("alert_contact_name").innerHTML=lang_please_enter_contact_name;
				if(checkFocus!=1)
				{
					frm.contact_name.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_contact_name").innerHTML="";
			
		if(frm.contact_email.value=='')
		{	
			document.getElementById("alert_contact_email").innerHTML=lang_please_enter_contact_email;
				if(checkFocus!=1)
				{
					frm.contact_email.focus();
					var checkFocus=1;
				}
		}
		else
		{
			var frmEmail1 =frm.contact_email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("alert_contact_email").innerHTML=lang_please_enter_valid_email_address;
			if(checkFocus!=1)
			{	frm.contact_email.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("alert_contact_email").innerHTML="";
			
			
		}
		
		if(frm.contact_number.value=='')
		{	
			document.getElementById("alert_contact_number").innerHTML=lang_please_enter_contact_number;
				if(checkFocus!=1)
				{
					frm.contact_number.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_contact_number").innerHTML="";	
			
			if(frm.country.value=='')
		{	
			document.getElementById("alert_country").innerHTML=lang_please_enter_country_name;
				if(checkFocus!=1)
				{
					frm.country.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_country").innerHTML="";	
			
			
				if(frm.packege_detail.value=='')
		{	
			document.getElementById("alert_packege_detail").innerHTML=lang_please_enter_packege_detail;
				if(checkFocus!=1)
				{
					frm.packege_detail.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_packege_detail").innerHTML="";	
			
			
			
				
				if(frm.address.value=='')
		{	
			document.getElementById("alert_address").innerHTML=lang_please_enter_the_address;
				if(checkFocus!=1)
				{
					frm.address.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_address").innerHTML="";	
			
			
						
				if(frm.no_of_parcel.value=='')
		{	
			document.getElementById("alert_no_of_parcel").innerHTML=lang_please_number_of_parcel;
				if(checkFocus!=1)
				{
					frm.no_of_parcel.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_no_of_parcel").innerHTML="";	
			
				if(frm.com_item.value=='')
		{	
			document.getElementById("alert_com_item").innerHTML=lang_please_enter_commudity_of_item;
				if(checkFocus!=1)
				{
					frm.com_item.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("alert_com_item").innerHTML="";	
			
			
			
	if(frm.parcel_weight.value=='')
	{	
		document.getElementById("alert_parcel_weight").innerHTML=lang_please_enter_weight;
			if(checkFocus!=1)
			{
				frm.parcel_weight.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("alert_parcel_weight").innerHTML="";
	
	
		
	if(checkFocus==1)
		return false;
	else
		return true;
}




function Valid_update_password(frm)
{
	var checkFocus=0;

	if(frm.old_password.value=='')
	{	
		document.getElementById("oldpassword_info").style.borderColor='red';
			if(checkFocus!=1)
			{
				frm.old_password.focus();
				var checkFocus=1;
			}
	}
	else
	{
		ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_old_password&old_password="+frm.old_password.value+"&user_id="+frm.edit_id.value, false);   
				doc.send(null);
			   }
			   //alert(doc.responseText);
			if(doc.responseText==1)
			   {	alert(lang_please_enter_correct_password);
					document.getElementById("oldpassword_info").style.borderColor='red';
					frm.old_password.focus();
					var	 checkFocus=1;
			   }
			  
	}
		
		
	
	if(frm.new_password.value=='')
	{	
		document.getElementById("password_info").style.borderColor='red';
			if(checkFocus!=1)
			{
				frm.new_password.focus();
				var checkFocus=1;
			}
	}
	else if(frm.new_password.value!=frm.confirm_password.value)
		{
			alert(lang_please_enter_confirm_password);
			document.getElementById("confirm_password_info").style.borderColor='red';
			if(checkFocus!=1)
			{
				frm.confirm_password.focus();
			var checkFocus=1;	
			}
		}
		
	if(frm.confirm_password.value=='')
	{
		document.getElementById("confirm_password_info").style.borderColor='red';
			if(checkFocus!=1)
			{
				frm.confirm_password.focus();
			var checkFocus=1;	
			}
		}
	

		
	if(checkFocus==1)
		return false;
	else
		return true;
	
}

function Valid_admin_login(frm)
{
	var checkFocus=0;
	
	if(frm.loginname.value!='' && frm.password.value!='')
	{
		document.getElementById("username_info").innerHTML="";
		document.getElementById("password_info").innerHTML="";
		ajax();
			if (doc){
			   doc.open("GET", site_url+"/ajax.php?section=check_login_details&loginname="+frm.loginname.value+"&password="+frm.password.value, false);   
				doc.send(null);
			   }
			  // alert(doc.responseText);
			if(doc.responseText==1)
			   {	
					document.getElementById("login_info").innerHTML=lang_please_enter_correct_username_and_password;
					frm.loginname.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("login_info").innerHTML="";
		
	}
	else
	{
		document.getElementById("login_info").innerHTML="";
			if(frm.loginname.value=='')
		{	
			document.getElementById("username_info").innerHTML=lang_please_enter_user_name;
				if(checkFocus!=1)
				{
					frm.loginname.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("username_info").innerHTML="";
			
			if(frm.password.value=='')
		{	
			document.getElementById("password_info").innerHTML=lang_please_enter_password;
				if(checkFocus!=1)
				{
					frm.password.focus();
					var checkFocus=1;
				}
		}
		else
			document.getElementById("password_info").innerHTML="";
		
	}
	
	if(checkFocus==1)
		return false;
	else
		return true;
	
}

 /*******Pagination start*********/
 function callpage(page)
 {
	 document.getElementById("pagevalid").value=page;
 }
  /*******Pagination end*********/

function shipment_search_value_check()
{
	
	var checkFocus=0;
	var shipment_value = document.getElementById('traking_shipment_input').value;
	if( shipment_value=='')
	{
		document.getElementById('traking_shipment_input').focus();
		document.getElementById('traking_shipment_input').value='';
		document.getElementById("alert_footer_shipment").innerHTML=lang_please_enter_correct_shipment_number;
		var checkFocus=1;
	}
	
	if(checkFocus==1)
		return false;
	else
		return true;
}

//=============================this functins use for show all shipment for drs========================================//
function getAllShipmentListForDRS(city_id)
{
	//alert(city_id);
		ajax();
			if (doc){
					//onLoadWatingPoupupOpen();
					doc.open("GET", site_url+"/ajax.php?section=getShipmentListForDrs&city_id="+city_id, false);   
					doc.send(null);
			   }
			 //alert(doc.responseText);
			   if(doc.responseText)
			   {
				  // onLoadWatingPoupupClose();
				   exploade_value=doc.responseText.split("//**//");
				   document.getElementById('show_route_dropdown').innerHTML=exploade_value[0];
				   document.getElementById('show_messanger_dropdown').innerHTML=exploade_value[1];
				   document.getElementById('show_shipment_by_ajax').innerHTML=exploade_value[2];
			   }
}

function getAllShipmentListForPickup(city_id)
{
	
	//alert(city_id);

			ajax();
		if (doc){
			   	doc.open("GET", site_url+"/ajax.php?section=getShipmentListForPickup&city_id="+city_id, false);   
				doc.send(null);
			   }
			// alert(doc.responseText);
		if(doc.responseText!='')
		{
		var	exploade_value=doc.responseText.split("//**//");
			   document.getElementById('show_route_dropdown').innerHTML=exploade_value[0];
			   document.getElementById('show_messanger_dropdown').innerHTML=exploade_value[1];
			   document.getElementById('show_shipment_by_ajax').innerHTML=exploade_value[2];
		}
			//alert(doc.responseText);
			
}

  
  
//======================================popup functiomn======================================//
function invoice_enter_amount_close()
{	
	document.getElementById("invoice_paid_form_id").style.display="none";
	document.getElementById('update_invoice_id').value='';	
}


function invoice_enter_amount_open(invoice_id,amount,user_id)
{	
	  document.getElementById("invoice_paid_form_id").style.display="block"; 
	  document.getElementById('update_invoice_id').value=invoice_id;
	  document.getElementById('paid_amount').value=amount;
	   document.getElementById('update_user_id').value=user_id;
} 


function show_wating_image_open()
{
	//alert("xxxxxxxxxxxx");
	 document.getElementById("shipment_wating_id").style.display="block"; 
}
function show_wating_image_close()
{
	//alert("xxxxxxxxxxxx");
	 document.getElementById("shipment_wating_id").style.display="none"; 
}

//=================set flat rate yes no ======================//

function setFlatRateYesNo(sel_value)
{
	if(sel_value=='Y')
	{
		document.getElementById('end_range_flate').readOnly="readonly";
		document.getElementById('end_range_flate').value="FLAT";
	}
	else
	{
		document.getElementById('end_range_flate').readOnly="";
		document.getElementById('end_range_flate').value="";
	}
}

//====================================check upto flat price=========================//
function checkUptoFaltRatePrice(sel_value)
{
	//alert("xxxxxxxxxxxxxxxx");
	ajax();
		if (doc){
			   	doc.open("GET", site_url+"/ajax.php?section=checkUptoFlatePrice&input_price="+sel_value, false);   
				doc.send(null);
			   }
			  // alert(doc.responseText);
		if(doc.responseText!='')
		{
			//alert(doc.responseText);
			document.getElementById('start_price').value='';
		}
}


//=========================================update price details===================================//
function getPriceDetailsUsingServiceId(frm)
{
	

	var service_id=frm.sel_service_id.value;
	var parcel_quantity=parseInt(frm.parcel_quantity.value);
	var customer_name=frm.sender_name.value;
	var city_id=frm.sender_city_id.value;
	
	
	var parcel_wight_array=[];
	var parcel_length_array=[];
	var parcel_width_array=[];
	var parcel_height_array=[];
	
	for(var i=1; i<=parcel_quantity; i++)
	{
		parcel_wight_array.push([document.getElementById('parcel_weight_'+i).value]);
		parcel_length_array.push([document.getElementById('parcel_girth_'+i).value]);
		parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
		parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
	}
	
	//alert(parcel_wight_array+"//"+parcel_length_array+"//"+parcel_width_array+"//"+parcel_height_array);
	
	ajax();
		if (doc)
		{
			doc.open("GET", "ajax.php?section=PriceDetailsUsingServiceId&customer_name="+customer_name+"&service_id="+service_id+"&parcel_wight_array="+parcel_wight_array+"&parcel_length_array="+parcel_length_array+"&parcel_width_array="+parcel_width_array+"&parcel_height_array="+parcel_height_array+"&parcel_quantity="+parcel_quantity+"&city_id="+city_id, false);   			
			doc.send(null);
		}
	//alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];
	/*//alert(frm);
	var customer_id=frm.coustomer_id.value;
	var weight_object=frm.weight.value;
	//alert(frm.weight.value);
	var volumetric_weight=frm.volumetric_weight.value;
	
	var destination=frm.destination.value
	if(volumetric_weight<=weight_object)
	{
	var weight=weight_object ;
	}
	else
	{
	var weight=volumetric_weight;
	}*/
	//alert(weight);
	/*ajax();
		if (doc)
		{
			   doc.open("GET", "ajax.php?section=PriceDetailsUsingServiceId&customer_id="+customer_id+"&service_id="+service_id+"&weight="+weight+"&destination="+destination, false);   
			   doc.send(null);
		}
	alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];*/
	
}

/*function getPriceDetailsUsingServiceId_New(frm,service_id)
{
	receiver_city=document.getElementById("rec_city_id").value;
	
	sender_city=document.getElementById("sender_city").value;
	alert(receiver_city);
	alert(sender_city);
	//var service_id=document.getElementById("sel_service_id").value;
	//alert('1');
	var customer_id=document.getElementById("customer_id").value;
	//alert('2');
	var agent_id=document.getElementById("agent_id").value;
	//alert('3');
	var parcel_quantity=document.getElementById("parcel_quantity_id").value;
	//alert('4');
	//alert('yyyyyyyyy');
	//alert(parcel_quantity);
	
	//alert(service_id);
	//var destination=frm.country.value
	
	//var product_unique_id=document.getElementById("nrd").value;
	//alert(product_unique_id);
	var product_unique_id=frm.nrd.value;
	var service_id=frm.sel_service_id.value;
	//alert(product_unique_id);
	
	
	var	add_number=document.getElementById("parcel_quantity_id").value;
	//var	parcel_weight_new=document.getElementById("parcel_weight_new").value
	//alert(add_number);
//alert(parcel_weight_new);
		
		 //===================== create array in  for parcel values=============//
			if(product_unique_id!='AQYXZG')
			{
			var parcel_weight_array=[];
			var parcel_height_array=[];
			var parcel_width_array=[];
			var parcel_girth_array=[];
			
			for(i = 1; i <=add_number; i++)
			{
				parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
				parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
				parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
				parcel_girth_array.push([document.getElementById('parcel_girth_'+i).value]);
				
				
			}
		//===============================================================================//
			}
			else
			{
				var parcel_weight_array=[];
				for(i = 1; i <=add_number; i++)
			{
parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
			}
						}
			//alert(weight);
	ajax();
		if (doc)
		{
			   doc.open("GET", "ajax.php?section=PriceDetailsUsingServiceId_New&customer_id="+customer_id+"&service_id="+service_id+"&parcel_weight_array="+parcel_weight_array+"&parcel_height_array="+parcel_height_array+"&parcel_width_array="+parcel_width_array+"&parcel_girth_array="+parcel_girth_array+"&add_number="+add_number+"&product_unique_id="+product_unique_id+"&receiver_city="+receiver_city+"&sender_city="+sender_city+"&agent_id="+agent_id, false);   
			   doc.send(null);
		}
	//alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];
	document.getElementById("total_weight_id").value=arraylist[4];
	document.getElementById("total_weight").value=arraylist[5];
	document.getElementById("service_id").value=service_id;
	//document.getElementById('parcel_girth_1').focus();
	
}
*/

function new_rates(frm)
{
	//alert(frm);
	var customer_id=frm.coustomer_id.value;
	var weight_object=frm.booking_weight.value;
	//alert(frm.booking_weight.value);
	var volumetric_weight=frm.volumetric_weight.value;
	var service_id=frm.sel_service_id.value;
	var destination=frm.sel_destination_id.value
	if(volumetric_weight<=weight_object)
	{
	var weight=weight_object ;

	}
	else
	{
	var weight=volumetric_weight;
	}
	//alert(booking_weight);
	ajax();
		if (doc)
		{
			   doc.open("GET", "ajax.php?section=PriceDetailsUsingServiceId_booking&customer_id="+customer_id+"&service_id="+service_id+"&weight="+weight+"&destination="+destination, false);   
			   doc.send(null);
		}
	//alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];
	
}

function change_cleardestination()
{
	document.getElementById("sel_destination_id_new").style.borderColor="";
		document.getElementById("sel_destination_id_new").style.backgroundColor="";
}
function change_clearorigin()
{
	document.getElementById("sel_origin_id_new").style.borderColor="";
		document.getElementById("sel_origin_id_new").style.backgroundColor="";
}
//======================================================validation booking form==========================================//
 function clear_service()
{
	document.getElementById("service").style.borderColor="";
		document.getElementById("service").style.backgroundColor="";
}
 function clear_weight()
{
	document.getElementById("parcel_weight_1").style.borderColor="";
		document.getElementById("parcel_weight_1").style.backgroundColor="";
}
function clear_height()
{
	document.getElementById("parcel_height_1").style.borderColor="";
		document.getElementById("parcel_height_1").style.backgroundColor="";
}
function clear_width()
{
	document.getElementById("parcel_width_1").style.borderColor="";
		document.getElementById("parcel_width_1").style.backgroundColor="";
}
function clear_girth()
{
	document.getElementById("parcel_girth_1").style.borderColor="";
		document.getElementById("parcel_girth_1").style.backgroundColor="";
}
function validBookingForm(frm)
{
	//alert(frm.searching_type.value);
	var checkFocus=0;
	//alert(sel_destination_id.value);
	var select_type=document.getElementById('select_type').value
	//alert(select_type);
	if( select_type=='1')	
	{
	if(frm.sel_origin_id.value=='')
	{	//alert("Please Select Origin");
		document.getElementById("sel_origin_id_new").style.backgroundColor="#FFE6E6";
		document.getElementById("sel_origin_id_new").style.borderColor="#F00";
			if(checkFocus!=1)
			{ 
				frm.sel_origin_id.focus();
				var checkFocus=1;
				
			}
	}
	/*else
		document.getElementById("alert_origin_id").innerHTML="";*/
	
	if(frm.sel_destination_id.value=='')
	{	
	//alert("Please Select Destination");
		document.getElementById("sel_destination_id_new").style.borderColor="#F00";
		document.getElementById("sel_destination_id_new").style.backgroundColor="#FFE6E6";
			if(checkFocus!=1)
			{
				frm.sel_destination_id.focus();
				var checkFocus=1;
			}
	}
	/*else
		document.getElementById("alert_destination_id").innerHTML="";*/
		
	}
	else
	{
					if(frm.city_dest.value=='')
				{	
				//alert("Please Select Destination");
					document.getElementById("sel_destination_id_neww").style.borderColor="#F00";
					document.getElementById("sel_destination_id_neww").style.backgroundColor="#FFE6E6";
						if(checkFocus!=1)
						{
							frm.city_dest.focus();
							var checkFocus=1;
						}
				}
				
				if(frm.origin_city.value=='')
	{	//alert("Please Select Origin");
		document.getElementById("origin_city").style.backgroundColor="#FFE6E6";
		document.getElementById("origin_city").style.borderColor="#F00";
			if(checkFocus!=1)
			{ 
				frm.origin_city.focus();
				var checkFocus=1;
				
			}
	}
		
		}
	if(frm.sel_service_id.value=='')
	{	
	document.getElementById("service").style.backgroundColor="#FFE6E6";
		document.getElementById("service").style.borderColor="#F00";
			if(checkFocus!=1)
			{
				frm.sel_service_id.focus();
				var checkFocus=1;
			}
	}
	
	
	if (isNaN(frm.parcel_weight_1.value))
	{	
	document.getElementById("parcel_weight_1").style.backgroundColor="#FFE6E6";
		document.getElementById("parcel_weight_1").style.borderColor="#F00";
		
			if(checkFocus!=1)
			{
				frm.parcel_weight_1.focus();
				var checkFocus=1;
			}
	}
	
	if(frm.searching_type.value!='QS8SQX')
	{
		if (isNaN(frm.parcel_girth_1.value))
		{	
		document.getElementById("parcel_girth_1").style.backgroundColor="#FFE6E6";
			document.getElementById("parcel_girth_1").style.borderColor="#F00";
				if(checkFocus!=1)
				{
					frm.parcel_girth_1.focus();
					var checkFocus=1;
				}
		}
		if (isNaN(frm.parcel_width_1.value))
		{	
		document.getElementById("parcel_width_1").style.backgroundColor="#FFE6E6";
			document.getElementById("parcel_width_1").style.borderColor="#F00";
				if(checkFocus!=1)
				if(checkFocus!=1)
				{
					frm.parcel_width_1.focus();
					var checkFocus=1;
				}
		}
		if (isNaN(frm.parcel_height_1.value))
		{	
	
			document.getElementById("parcel_height_1").style.backgroundColor="#FFE6E6";
			document.getElementById("parcel_height_1").style.borderColor="#F00";
				if(checkFocus!=1)
				{
					frm.parcel_height_1.focus();
					var checkFocus=1;
				}
		}
	}
	
	
	if(frm.parcel_weight_1.value=='')
	{	
	document.getElementById("parcel_weight_1").style.backgroundColor="#FFE6E6";
		document.getElementById("parcel_weight_1").style.borderColor="#F00";
			if(checkFocus!=1)
			{
				frm.parcel_weight_1.focus();
				var checkFocus=1;
			}
	}
	
	
	if(frm.searching_type.value!='QS8SQX')
	{
		if (frm.parcel_girth_1.value=='')
		{	
		document.getElementById("parcel_girth_1").style.backgroundColor="#FFE6E6";
			document.getElementById("parcel_girth_1").style.borderColor="#F00";
				if(checkFocus!=1)
				{
					frm.parcel_girth_1.focus();
					var checkFocus=1;
				}
		}
		if(frm.parcel_width_1.value=='')
		{	
		document.getElementById("parcel_width_1").style.backgroundColor="#FFE6E6";
			document.getElementById("parcel_width_1").style.borderColor="#F00";
				if(checkFocus!=1)
				{
					frm.parcel_width_1.focus();
					var checkFocus=1;
				}
		}
		if(frm.parcel_height_1.value=='')
		{	
		document.getElementById("parcel_height_1").style.backgroundColor="#FFE6E6";
			document.getElementById("parcel_height_1").style.borderColor="#F00";
				if(checkFocus!=1)
				{
					frm.parcel_height_1.focus();
					var checkFocus=1;
				}
		}
	}
	/*else
		document.getElementById("sel_service_id").innerHTML="";*/
//alert(checkFocus);
	
	if(checkFocus==1)
	{
		
		return false;
	}
	else
	{
		
		document.getElementById('form3').submit();
		return true;
	}
}


	function submitForm(elem) {
		
		//alert(elem);
          if (elem.value) {
              elem.add_menifest.submit();
          }
      }

 
//=================new function for password box on off=============================//
function showPasswordInputForOrderSummery(sel_value)
{
	//alert(sel_value);
	if(sel_value=='Y')
	{
		
		document.getElementById('new_user_message').style.display="none";
		document.getElementById('old_user_message').style.display="block";
		document.getElementById('password_box_lable').innerHTML=lang_password;
	}
	else
	{		
		
		document.getElementById('new_user_message').style.display="block";
		document.getElementById('old_user_message').style.display="none";
		document.getElementById('password_box_lable').innerHTML=lang_create_new_password;
	}
}

//========================valid order summery=======================================//
function validOrderSummery(frm)
{

	var ckeckFocus=0;
	
	
	//==============valid email======================//
		if(frm.login_email_id.value=='')
		{	
			document.getElementById("alert_login_email").innerHTML=lang_email;
				if(ckeckFocus!=1)
				{
					frm.login_email_id.focus();
					var ckeckFocus=1;
				}
		}
		else
		{
			
			var frmEmail1 =frm.login_email_id.value.toLowerCase();	
			var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
			if (!frmEmailformat.test(frmEmail1)) 
			{
				document.getElementById("alert_login_email").innerHTML=lang_please_enter_valid_email_address;
				if(checkFocus!=1)
				{	frm.login_email_id.focus();	
				var checkFocus=1;
				}
			}
			else
			document.getElementById("alert_login_email").innerHTML="";
		}
		//==============valid email======================//	
		if(frm.login_password.value=='')
		{	
			document.getElementById("alert_login_password").innerHTML=lang_please_enter_password;
				if(ckeckFocus!=1)
				{
					frm.login_password.focus();
					var ckeckFocus=1;
				}
		}
		else
		{
			document.getElementById("alert_login_password").innerHTML="";
		}
	//========================================================================================================//	
		if(ckeckFocus==0)
		{
			ajax();
			if (doc)
			{
				   doc.open("GET", "ajax.php?section=checkLoginDetails&log_email="+frm.login_email_id.value+"&log_password="+frm.login_password.value+"&log_type="+frm.user_exits_yes_no.value, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			if(doc.responseText=='1')
			{
				if(frm.user_exits_yes_no.value=='Y')
				{
					document.getElementById("alert_login_email").innerHTML="";	
					document.getElementById("alert_email_password").innerHTML=lang_please_enter_correct_email_and_password;
					frm.login_email_id.focus();
					var ckeckFocus=1;

				}
				else
				{
					document.getElementById("alert_email_password").innerHTML="";
					document.getElementById("alert_login_email").innerHTML=lang_alerdy_exits_please_enter_new_email_address;	
					frm.login_email_id.focus();
					var ckeckFocus=1;

				}
					
									
			}
			else
			{
				var ckeckFocus=0;
				//alert (ckeckFocus);
				document.getElementById("alert_login_email").innerHTML="";
				document.getElementById("alert_email_password").innerHTML="";
				
			}
			
		}
		//alert (ckeckFocus);
		if(ckeckFocus==1)
		return false;
	else
	{
		document.order_summery_post.submit();
		return true;
	}
}

//============================show popup for admin transfer data in shipment=============================//
function transfer_popup_close()
{	
	document.getElementById("transfer_popup_id").style.display="none";	
}

function payoption_view()
{	if (document.getElementById("paypal").checked==true)
		{document.getElementById("submit_w").style.display="none";
		document.getElementById("wire").style.display="none";
		document.getElementById("submit").style.display="block";		
		}
		else if(document.getElementById("wire_trans").checked==true)	
		{
			document.getElementById("wire").style.display="block";
			document.getElementById("submit").style.display="none";	
			document.getElementById("submit_w").style.display="block";
		
		}
		else
		{
			document.getElementById("wire").style.display="none";
			document.getElementById("submit").style.display="none";	
			document.getElementById("submit_w").style.display="block";
			}

	
}


function transfer_popup_open(pro_id)
{	
	  document.getElementById("transfer_popup_id").style.display="block"; 
	  document.getElementById("booking_unique_id").value=pro_id; 
 }


//============================================show popup for admin shipment forward throw====================//
function forwardThrowClose()
{	
	document.getElementById("forwad_throw_options").style.display="none";	
}


function forwardThrowOpen(booking_id)
{	

	  document.getElementById("forwad_throw_options").style.display="block"; 
	  document.getElementById("update_booking_id").value=booking_id; 
 }
 
 
 

function Valid_contactus(frm)
{
		
			
		 var checkFocus=0;
		 
 		if(frm.contact_name.value=='')
		{
			document.getElementById("alert_name").style.borderColor='red';
			if(checkFocus!=1)
			{	frm.contact_name.focus();				checkFocus=1;			};
		}
			else
 			 document.getElementById("alert_name").style.borderColor='';
			 
			 
		if(frm.Email.value=='')
		{	
			document.getElementById("alert_email").style.borderColor='red';
				if(checkFocus!=1)
				{
					frm.Email.focus();
					var checkFocus=1;
				}
		}
			else
		{
				var frmEmail1 =frm.Email.value.toLowerCase();	
				var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
				if (!frmEmailformat.test(frmEmail1)) 
			{ alert(lang_please_enter_valid_email_address);
				document.getElementById("alert_email").style.borderColor='red';
				if(checkFocus!=1)
					frm.Email.focus();	
				var checkFocus=1;
			}
				else
			{
				document.getElementById("alert_email").style.borderColor='';
			}
		
		}
	 
		if(frm.Subject.value=='')
		{
			document.getElementById("alert_subject").innerHTML=lang_please_enter_subject;
			document.getElementById("alert_subject").style.borderColor='red';
			if(checkFocus!=1)
			{	frm.Subject.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_subject").innerHTML="";
			 

 	 	if(isNaN(frm.contact_phone.value))
		 {
			 alert(lang_please_enter_numeric_value);
			document.getElementById("alert_mobile").style.borderColor='red';
			if(checkFocus!=1)
			{	frm.contact_phone.focus();				checkFocus=1;			};
		}
		
		else 
		{
			if(frm.contact_phone.value.length < 10)
			{ alert(lang_please_enter_10_character_mobile_no);
			document.getElementById("alert_mobile").style.borderColor='red';
					if(checkFocus!=1)
					{	frm.contact_phone.focus();				var checkFocus=1;			}
					}
				else
				document.getElementById("alert_mobile").style.borderColor='';
		}
 	
	 if(frm.Message.value.length <10)
		{	alert(lang_please_enter_minimum_characters_in_the_message_box);
			document.getElementById("alert_message").style.borderColor='red';
			if(checkFocus!=1)
			{	frm.Message.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_message").style.borderColor='';
  	
		if(checkFocus==1)
			return false;
		else
			return true;
 
	}




function valid_rate_zone(frm)
{
		
			
		 var checkFocus=0;
		 
		 if(frm.country.value=='')
		{
			document.getElementById("alert_country").innerHTML=lang_please_enter_country_name;
			if(checkFocus!=1)
			{	frm.country.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_country").innerHTML="";
		 
 		if(frm.half_kg.value=='')
		{
			document.getElementById("alert_half_kg").innerHTML=lang_please_enter_rate;
			if(checkFocus!=1)
			{	frm.half_kg.focus();				checkFocus=1;			};
		}
			else
 			 document.getElementById("alert_half_kg").innerHTML="";
			 
			 
		
	 
		if(frm.one_kg.value=='')
		{
			document.getElementById("alert_one_kg").innerHTML=lang_please_enter_rate;
			if(checkFocus!=1)
			{	frm.one_kg.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_one_kg").innerHTML="";
			 
	if(frm.add_kg.value=='')
		{
			document.getElementById("alert_add_kg").innerHTML=lang_please_enter_rate;
			if(checkFocus!=1)
			{	frm.add_kg.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_add_kg").innerHTML="";
			 

 	 	if(frm.t20_kg_flat.value=='')
		{
			document.getElementById("alert_t20_kg_flat").innerHTML=lang_please_enter_rate;
			if(checkFocus!=1)
			{	frm.t20_kg_flat.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_t20_kg_flat").innerHTML="";
			 
 	
	
  	
		if(checkFocus==1)
			return false;
		else
			return true;
 
	}
	
	
	function valid_country(frm)
{
		
			
		 var checkFocus=0;
		 
		 if(frm.country.value=='')
		{
			document.getElementById("alert_country").innerHTML=lang_please_enter_country_name;
			if(checkFocus!=1)
			{	frm.country.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_country").innerHTML="";
		 
 	
 	
	
  	
		if(checkFocus==1)
			return false;
		else
			return true;
 
	}
	
function search_form_submit()
{
	document.getElementById("search-filters").submit();
}


function select_service_add_ship(id)
{
		//alert(id);
			ajax();
			if (doc){
				   doc.open("GET", site_url+"/ajax.php?section=select_service_add_ship&id="+id, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				
					document.getElementById("service").innerHTML=doc.responseText;	
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}
function select_service(id)
{
		//alert(id);
			ajax();
			if (doc){
				   doc.open("GET", site_url+"/ajax.php?section=select_service&id="+id, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				
					document.getElementById("service").innerHTML=doc.responseText;	
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}

function select_service_booking(id)
{
		//alert(id);
			ajax();
			if (doc){
				   doc.open("GET", site_url+"/ajax.php?section=select_service_booking&id="+id, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				
					document.getElementById("service").innerHTML=doc.responseText;	
					document.getElementById("service").style.backgroundColor="";
					document.getElementById("service").style.borderColor="";
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}

function select_service_booking_domestic(id)
{
	var origin=document.getElementById('origin_city').value;
	var id;
		//alert(id);
			ajax();
			if (doc){
				   doc.open("GET", site_url+"/ajax.php?section=select_service_booking_domestic&dest="+id+"&origin="+origin, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				
					document.getElementById("service").innerHTML=doc.responseText;	
					document.getElementById("service").style.backgroundColor="";
					document.getElementById("service").style.borderColor="";
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}


function no_of_parcel(value)
{
		//alert(value);
			ajax();
			if (doc){
				   doc.open("GET", site_url+"/ajax.php?section=no_of_parcel&value="+value, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				
					//document.getElementById("service").innerHTML=doc.responseText;	
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}

function add_price_range(frm)
{
	
	//alert("ok");
	
		var	add_number=parseInt(frm.count_value.value)+1;
	//alert(add_number);
	
			
		 //===================== create array in  for parcel values=============//
			var start_range_array=[];
			var end_range_array=[];
			/*var range_price_array=[];*/
			
			for(i = 1; i < add_number; i++){
				start_range_array.push([document.getElementById('start_range_'+i).value]);
				end_range_array.push([document.getElementById('end_range_'+i).value]);
			/*	range_price_array.push([document.getElementById('range_price_'+i).value]);*/
				
			}
		//===============================================================================//
		
		//alert(add_number); 
	
	ajax();
	if (doc)
	{
	    //   doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form&add_type="+add_type+"&add_number="+add_number+"&parcel_contents_array="+parcel_contents_array, false);
		 doc.open("GET", site_url+"/ajax.php?section=add_price_range&add_number="+add_number+"&start_range_array="+start_range_array+"&end_range_array="+end_range_array/*+"&range_price_array="+range_price_array*/, false);  
		 doc.send(null); 
	}
	//alert(doc.responseText);
	document.getElementById('add_range_style').innerHTML=doc.responseText;
	document.getElementById('count').value=add_number;
	
	//==========================this function use for create right amouunt box========================//
	if(add_type=="copy_add")
	{
		ShowTotalParcelWeightAmountList(frm);
	}

}



function AddMoreParcelOtherDetailsForBookingShipment(add_type,frm)
{
	
	if(add_type=="only_add" || add_type=="copy_add")
		var	add_number=parseInt(frm.parcel_quantity.value)+1;
	else
		var	add_number=frm.parcel_quantity.value;	
	
			
		 //===================== create array in  for parcel values=============//
			var parcel_contents_array=[];
			//var parcel_value_array=[];
			var parcel_weight_array=[];
			var parcel_height_array=[];
			var parcel_width_array=[];
			var parcel_girth_array=[];
			//var parcel_total_amount=[];
		//alert(add_type);	
			for(i = 1; i < add_number; i++){
				parcel_contents_array.push([document.getElementById('parcel_contents_'+i).value]);
				//parcel_value_array.push([document.getElementById('parcel_value_'+i).value]);
				parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
				parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
				parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
				parcel_girth_array.push([document.getElementById('parcel_girth_'+i).value]);
				//parcel_total_amount.push([document.getElementById('parcel_total_amount_'+i).value]);
			}
		//===============================================================================//
		
		//alert(add_number); 
	
	ajax();
	if (doc)
	{
	    //   doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form&add_type="+add_type+"&add_number="+add_number+"&parcel_contents_array="+parcel_contents_array, false);
		 doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form_new&add_type="+add_type+"&add_number="+add_number+"&parcel_contents_array="+parcel_contents_array+"&parcel_weight_array="+parcel_weight_array+"&parcel_height_array="+parcel_height_array+"&parcel_width_array="+parcel_width_array+"&parcel_girth_array="+parcel_girth_array, false);  
		 doc.send(null); 
	}
	//alert(doc.responseText);
	document.getElementById('parcel_other_details_id').innerHTML=doc.responseText;
	document.getElementById('parcel_quantity_id').value=add_number;
	
	//==========================this function use for create right amouunt box========================//
	if(add_type=="copy_add")
	{
		ShowTotalParcelWeightAmountList(frm);
	}
}




function RemoveMoreParcelOtherDetailsForBookingShipment(add_type,frm,remove_id)
{
	
		var	add_number=frm.parcel_quantity.value;	
		
		//alert(add_number);
		//===================== create array in  for parcel values=============//
			var parcel_contents_array=[];
			var parcel_value_array=[];
			var parcel_weight_array=[];
			var parcel_height_array=[];
			var parcel_width_array=[];
			var parcel_girth_array=[];
			var parcel_total_amount=[];
			
			for(i = 1; i <= add_number; i++){
				if(i!=remove_id)
				{//alert(i);
					parcel_contents_array.push([document.getElementById('parcel_contents_'+i).value]);
					//parcel_value_array.push([document.getElementById('parcel_value_'+i).value]);
					parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
					parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
					parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
					parcel_girth_array.push([document.getElementById('parcel_girth_'+i).value]);
					//parcel_total_amount.push([document.getElementById('parcel_total_amount_'+i).value]);
				}
			}
		//=============//
			
		var	add_number=parseInt(frm.parcel_quantity.value)-1;
		
	ajax();
		if (doc)
		{
			   doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form_new&add_type="+add_type+"&add_number="+add_number+"&parcel_contents_array="+parcel_contents_array+"&parcel_value_array="+parcel_value_array+"&parcel_weight_array="+parcel_weight_array+"&parcel_height_array="+parcel_height_array+"&parcel_width_array="+parcel_width_array+"&parcel_girth_array="+parcel_girth_array+"&parcel_total_amount="+parcel_total_amount, false);   
			   doc.send(null);
		}
	//alert(doc.responseText);
	document.getElementById('parcel_other_details_id').innerHTML=doc.responseText;
	document.getElementById('parcel_quantity_id').value=add_number;
	
	ShowTotalParcelWeightAmountList(frm);//====this function use for create right amouunt box============//
}

function AddMoreParcelOtherDetailsForAddShipmentAdmin(frm,add_number)
{
	//alert('xxxxxxxxxxxxxx');

		//var	add_number=frm.parcel_quantity.value;
	//alert(add_number);
 	var ship_type=document.getElementById('nrd').value;
	var add_type;
	//alert(ship_type);
	
	ajax();
	if (doc)
	{
		 doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form_add_admin&add_number="+add_number+"&ship_type="+ship_type, false);  
		 doc.send(null); 
	}
	//alert(doc.responseText);
	document.getElementById('parcel_other_details_id').innerHTML=doc.responseText;
	document.getElementById('parcel_quantity_id').value=add_number;
    //document.getElementById('parcel_girth_1').focus();
	//==========================this function use for create right amouunt box========================//
	if(add_type=="copy_add")
	{
		ShowTotalParcelWeightAmountList(frm);
	}
}



/*
function AddMoreParcelOtherDetailsForAddShipment(add_type,frm)
{
if(add_type=="only_add")
		var	add_number=parseInt(frm.parcel_quantity.value)+1;
	else if(add_type=="copy_add")
		var	add_number=parseInt(frm.parcel_quantity.value)+1;	
	else
		var	add_number=parseInt(frm.parcel_quantity.value);
			ajax();
		if (doc)
		{
		   alert(doc.responseText);
			   doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form_add2&add_number="+add_number, false);   
			   doc.send(null);
		}
			alert(doc.responseText);
}
*/

function AddMoreParcelOtherDetailsForAddShipment(add_type,frm)
{
	//alert('xxxxxxxxxxxxxx');
	if(add_type=="only_add")
		var	add_number=parseInt(frm.parcel_quantity.value)+1;
	else if(add_type=="copy_add")
		var	add_number=parseInt(frm.parcel_quantity.value)+1;	
	else
		var	add_number=parseInt(frm.parcel_quantity.value);
 
	
	ajax();
	if (doc)
	{
		 doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form&add_number="+add_number, false);  
		 doc.send(null); 
	}
	//alert(doc.responseText);
	document.getElementById('parcel_other_details_id').innerHTML=doc.responseText;
	document.getElementById('parcel_quantity_id').value=add_number;
	
	//==========================this function use for create right amouunt box========================//
	if(add_type=="copy_add")
	{
		ShowTotalParcelWeightAmountList(frm);
	}
}



function RemoveMoreParcelOtherDetailsForAddShipment(add_type,frm,remove_id)
{
	
		var	add_number=frm.parcel_quantity.value;	
		
		//alert(add_number);
		//===================== create array in  for parcel values=============//
			var parcel_contents_array=[];
			var parcel_value_array=[];
			var parcel_weight_array=[];
			var parcel_height_array=[];
			var parcel_width_array=[];
			var parcel_girth_array=[];
			var parcel_total_amount=[];
			
			for(i = 1; i <= add_number; i++){
				if(i!=remove_id)
				{//alert(i);
					parcel_contents_array.push([document.getElementById('parcel_contents_'+i).value]);
					//parcel_value_array.push([document.getElementById('parcel_value_'+i).value]);
					parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
					parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
					parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
					parcel_girth_array.push([document.getElementById('parcel_girth_'+i).value]);
					//parcel_total_amount.push([document.getElementById('parcel_total_amount_'+i).value]);
				}
			}
		//=============//
			
		var	add_number=parseInt(frm.parcel_quantity.value)-1;
		
	ajax();
		if (doc)
		{
			   doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form&add_type="+add_type+"&add_number="+add_number+"&parcel_contents_array="+parcel_contents_array+"&parcel_value_array="+parcel_value_array+"&parcel_weight_array="+parcel_weight_array+"&parcel_height_array="+parcel_height_array+"&parcel_width_array="+parcel_width_array+"&parcel_girth_array="+parcel_girth_array+"&parcel_total_amount="+parcel_total_amount, false);   
			   doc.send(null);
		}
	//alert(doc.responseText);
	document.getElementById('parcel_other_details_id').innerHTML=doc.responseText;
	document.getElementById('parcel_quantity_id').value=add_number;
	
	ShowTotalParcelWeightAmountList(frm);//====this function use for create right amouunt box============//
}

function vol(frm)
{ //alert('xxxxxx');
	//alert(frm.length.value);
	//var service_charge=packing_charge=valuation_charges=other_charges=service_tax=0;
	if(length!='')
	var length=frm.length.value;
		else 
	var length=0;
	if(width!='')
	var	width=frm.width.value;
		else
	var	width=0;
	if(height!='')
	var	height=frm.height.value;
		else
	var	height=0;
	

//alert(service_tax);
	volumetric=( parseFloat(length)*parseFloat(width)*parseFloat(height))/5000;
	//total_charge=service_charge+packing_charge+ valuation_charges+other_charges+service_tax;
	//alert(volumetric);
	document.getElementById('volumetric').value=volumetric;

}
	
function vol_front(frm)
{ //alert('xxxxxx');
	//alert(frm.length.value);
	//var service_charge=packing_charge=valuation_charges=other_charges=service_tax=0;
	if(parcel_quantity!='')
	var parcel_quantity=frm.parcel_quantity.value;
	
	if(length!='')
	var length=frm.parcel_girth_+parcel_quantity.value;
		else 
	var length=0;
	if(width!='')
	var	width=frm.parcel_width_+parcel_quantity.value;
		else
	var	width=0;
	if(height!='')
	var	height=frm.parcel_height_+parcel_quantity.value;
		else
	var	height=0;
	

alert(height);
	volumetric=( parseFloat(length)*parseFloat(width)*parseFloat(height))/5000;
	//total_charge=service_charge+packing_charge+ valuation_charges+other_charges+service_tax;
	//alert(volumetric);
	document.getElementById('volumetric').value=volumetric;

}


function createStateDropdown(cou_id)//===========================create main category dropdown=======================//
{
	//alert(cou_id);
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=makeStateDropdown&country_id="+cou_id, false);   
		   doc.send(null);
	   }
	 // alert(doc.responseText);
	   document.getElementById('state_dropdown_show').innerHTML=doc.responseText;
}	

function createCityDropdown(sta_id)//===========================create main category dropdown=======================//
{
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=makeCityDropdown&state_id="+sta_id, false);   
		   doc.send(null);
	   }
	  // alert(doc.responseText);
	   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
}

//=============================create state city dropdown by id============================================//

function createStateDropdownById(cou_id)//===========================create main category dropdown=======================//
{
	//alert(cou_id);
	ajax();
		if(doc)
	   {
		   onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=makeStateDropdownbyid&country_id="+cou_id, false);   
		   doc.send(null);
	   }
	 // alert(doc.responseText);
	 if(doc.responseText)
	 {
		 onLoadWatingPoupupClose();
	   document.getElementById('state_dropdown_show').innerHTML=doc.responseText;
	 }
}	

function createCityDropdownById(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
	ajax();
		if(doc)
	   {
		    onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=makeCityDropdownbyid&state_id="+sta_id, false);   
		   doc.send(null);
	   }
	  // alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
}


function createCityDropdownById_pick(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		//alert(doc.responseText);
	   if(doc.responseText)
		 {
			 show_wating_image_close();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    show_wating_image_open();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_pick&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}
function createCityDropdownById_send_add_ship(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		//alert(doc.responseText);
	   if(doc.responseText)
		 {
			 show_wating_image_close();
			 
		   document.getElementById('city_dropdown_send').innerHTML=doc.responseText;
		  // $('#sender_city').selectpicker('refresh');
		 }
	}
  }
		if(doc)
	   {
		  show_wating_image_open();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_send&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}
function createCityDropdownById_rec_add_ship(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		//alert(doc.responseText);
	   if(doc.responseText)
		 {
			 //onLoadWatingPoupupClose();
			  show_wating_image_close();
		   document.getElementById('city_dropdown_rec1').innerHTML=doc.responseText;// $('#rec_city_id').selectpicker('refresh');
		 }
	}
  }
		if(doc)
	   {
		    show_wating_image_open();
		    //onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_rec&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}

function createCityDropdownById_drs(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_drs&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}




function createCityDropdownById_from(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			show_wating_image_close();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		   show_wating_image_open();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_from&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	   //alert(doc.responseText);
}

function createCityDropdownById_messanger(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_messanger&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}

function createCityDropdownById_origin(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
		   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_origin&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}

function createCityDropdownById_destination(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
		   document.getElementById('city_dropdown_show_destination').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_destination&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}


function createCityDropdownById_to(sta_id)//===========================create main category dropdown=======================//
{
	//alert(sta_id);
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		// alert(doc.responseText);
	   if(doc.responseText)
		 {
			 show_wating_image_close();
		   document.getElementById('city_dropdown_show_to').innerHTML=doc.responseText;
		 }
	}
  }
		if(doc)
	   {
		    show_wating_image_open();
		   doc.open("GET", site_url+"/ajax.php?section=createCityDropdownById_to&state_id="+sta_id, true);   
		   doc.send(null);
	   }
	  
}

function valid_home_value(frm)
{
	var checkFocus=0;
		 if(frm.username.value=='')
		{
			document.getElementById("alert_username").innerHTML=lang_please_enter_user_name;
			if(checkFocus!=1)
			{	frm.username.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_username").innerHTML="";
			
		 if(frm.password.value=='')
		{
			document.getElementById("alert_password").innerHTML=lang_please_enter_user_password;
			if(checkFocus!=1)
			{	frm.password.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_password").innerHTML="";
			 
			 	 if(frm.company_name.value=='')
		{
			document.getElementById("alert_company_name").innerHTML=lang_please_enter_company_name;
			if(checkFocus!=1)
			{	frm.company_name.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_company_name").innerHTML="";
			 
			  if(frm.company_address.value=='')
		{
			document.getElementById("alert_company_address").innerHTML=lang_please_enter_the_company_address;
			if(checkFocus!=1)
			{	frm.company_address.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_company_address").innerHTML="";
			 
			 
			 
				if(isNaN(frm.phone.value==''))
		 {
			
			document.getElementById("alert_phone").innerHTML=lang_please_enter_numeric_value;
			if(checkFocus!=1)
			{	frm.phone.focus();				checkFocus=1;			};
		}
		
		else 
		{
			if(frm.phone.value.length < 10)
			{
			document.getElementById("alert_phone").innerHTML=lang_please_enter_10_character_mobile_no;
					if(checkFocus!=1)
					{	frm.phone.focus();				var checkFocus=1;			}
					}
				else
				document.getElementById("alert_phone").innerHTML="";
		}
			
			
			  if(frm.fax.value=='')
		{
			document.getElementById("alertfax").innerHTML=lang_please_enter_fax_number;
			if(checkFocus!=1)
			{	frm.fax.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alertfax").innerHTML=""; 
			 
			 
			 if(frm.email.value=='')
	{	
		document.getElementById("email").innerHTML=lang_email;
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("email").innerHTML=lang_please_enter_valid_email_address;
			if(checkFocus!=1)
			{	frm.email.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("email").innerHTML="";
	}
	
	
	
	  if(frm.marque_text.value=='')
		{
			document.getElementById("marque_text").innerHTML=lang_please_enter_marque_text;
			if(checkFocus!=1)
			{	frm.marque_text.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("marque_text").innerHTML=""; 
			 
			 
			 
			   if(frm.default_time_zone.value=='')
		{
			document.getElementById("default_time_zone").innerHTML=lang_please_enter_default_time_zon;
			if(checkFocus!=1)
			{	frm.default_time_zone.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("default_time_zone").innerHTML=""; 
			 
			 
			 
			    if(frm.page_rows.value=='')
		{
			document.getElementById("alert_page_rows").innerHTML=lang_please_enter_the_no_of_page_rows;
			if(checkFocus!=1)
			{	frm.page_rows.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_page_rows").innerHTML=""; 
			 
			 
			    if(frm.def_serv_tax.value=='')
		{
			document.getElementById("alert_def_serv_tax").innerHTML=lang_please_enter_service_charge;
			if(checkFocus!=1)
			{	frm.def_serv_tax.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_def_serv_tax").innerHTML=""; 
			 
			   if(frm.default_invoice_number.value=='')
		{
			document.getElementById("alert_default_invoice_number").innerHTML=lang_please_enter_invoice_date;
			if(checkFocus!=1)
			{	frm.default_invoice_number.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_default_invoice_number").innerHTML=""; 
			 
			 
			 
			   if(frm.default_awb_no.value=='')
		{
			document.getElementById("alert_default_awb_no").innerHTML=lang_please_enter_default_awb_no;
			if(checkFocus!=1)
			{	frm.default_awb_no.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_default_awb_no").innerHTML=""; 
			
		 
 	
 	
	
  	
		if(checkFocus==1)
			return false;
		else
			return true;
 
	}
	
	function diamention_show_ajent(unique_id)
{
	
	//alert('xxxxxxxxxxxxxxxxxxxxx');
	var unique_id;
	
	
	//alert(unique_id);
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=diamention_show_home&unique_id="+unique_id, false);   
		   doc.send(null);
	   }
	// alert(doc.responseText);
	  var arraylist=doc.responseText.split("**");
	//alert('xxxxxxxxxxxxxxxxxxxxx');
	/*if(arraylist[0]==0)
	{ 
		//alert('yyyyyyyyyyyyyyyyy');
		document.getElementById('parcel_other_details_id').style.display='none';
		document.getElementById('weight_view').style.display='block';
		}
		else
		{
		//alert('zzzzzzzzzzzzzzzzz');
		document.getElementById('weight_view').style.display='none';
		document.getElementById('parcel_other_details_id').style.display='block';
		}*/
		document.getElementById('maximum_height').value=arraylist[1];
		document.getElementById('maximum_width').value=arraylist[2];
		document.getElementById('maximum_girth').value=arraylist[3];
		document.getElementById('maximum_weight').value=arraylist[4];

}
		
function diamention_show_home(unique_id)
{

	var unique_id;
	
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=diamention_show_home&unique_id="+unique_id, false);   
		   doc.send(null);
	   }
	   	 //alert(doc.responseText);
	  var arraylist=doc.responseText.split("**");
	 
	//alert('xxxxxxxxxxxxxxxxxxxxx');
		if(arraylist[0]==0)
		{ 
		
		document.getElementById('parcel_girth_1').value=0;
		document.getElementById('parcel_width_1').value=0;
		document.getElementById('parcel_height_1').value=0;
		
		document.getElementById('length_input_box').style.display='none';
		document.getElementById('width_input_box').style.display='none';
		document.getElementById('height_input_box').style.display='none';
		//document.getElementById('weight_view').style.display='block';
		document.getElementById('dia_check').value='N';
		}
		else
		{
			
		document.getElementById('length_input_box').style.display='block';
		
		document.getElementById('width_input_box').style.display='block';
		document.getElementById('height_input_box').style.display='block';
		
		
		
		document.getElementById('maximum_height').value=arraylist[1];
		document.getElementById('maximum_width').value=arraylist[2];
		document.getElementById('maximum_girth').value=arraylist[3];
		document.getElementById('maximum_weight').value=arraylist[4];
		document.getElementById('dia_check').value=arraylist[5];
		}	
	
}

function diamention_show_home_admin(unique_id,frm)
{

	var unique_id;
	
	
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=diamention_show_home&unique_id="+unique_id, false);   
		   doc.send(null);
	   }
	   	 
		 
		 //alert(doc.responseText);
	  var arraylist=doc.responseText.split("**");
	  
	//alert('cccccccc');		
	if(arraylist[0]==0)
		{ 
		//alert('xxxxx');		
		
		document.getElementById('hide').style.display='none';
		
		
		}
		else
		{
			//alert('yyyyy');			
		//document.getElementById('hide').style.display='block';
		
		//document.getElementById('parcel_weight_1').style.width="100px";
	
		}
	//alert('zzzzz');		
	
		
		document.getElementById('maximum_height').value=arraylist[1];
		document.getElementById('maximum_width').value=arraylist[2];
		document.getElementById('maximum_girth').value=arraylist[3];
		document.getElementById('maximum_weight').value=arraylist[4];
		document.getElementById('dia_check').value=arraylist[5];
		AddMoreParcelOtherDetailsForAddShipmentAdmin(frm,'1');	
		
		
	
}

	
	
	function valid_payment_setting(frm)
{
	
	var checkFocus=0;
		 if(frm.paypal_email.value=='')
		{
			document.getElementById("alert_paypal_email").innerHTML=lang_please_enter_paypal_email;
			if(checkFocus!=1)
			{	frm.paypal_email.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_paypal_email").innerHTML="";

	if(checkFocus==1)
			return false;
		else
			return true;
 
	}
	
	
	
		function valid_social_sett(frm)
{
	var checkFocus=0;
		 if(frm.facebook.value=='')
		{
			document.getElementById("alert_facebook").innerHTML=lang_please_enter_facebook_page;
			if(checkFocus!=1)
			{	frm.facebook.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_facebook").innerHTML="";
			 
			 
			  if(frm.twitter.value=='')
		{
			document.getElementById("alert_twitter").innerHTML=lang_please_enter_twitte_page;
			if(checkFocus!=1)
			{	frm.twitter.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_twitter").innerHTML="";
			 
			 
			  if(frm.gpluse.value=='')
		{
			document.getElementById("alert_gpluse").innerHTML=lang_please_enter_youtube_page;
			if(checkFocus!=1)
			{	frm.gpluse.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_gpluse").innerHTML="";

	if(checkFocus==1)
			return false;
		else
			return true;
 
	}
	
	
	
	function valid_stmp_value(frm)
{
	var checkFocus=0;
		 if(frm.smtp_port.value=='')
		{
			document.getElementById("alert_smtp_port").innerHTML=lang_please_enter_smtp_port;
			if(checkFocus!=1)
			{	frm.smtp_port.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_smtp_port").innerHTML="";
			 
			 
			  if(frm.smtp_secure.value=='')
		{
			document.getElementById("alert_smtp_secure").innerHTML=lang_please_enter_smtp_secure;
			if(checkFocus!=1)
			{	frm.smtp_secure.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_smtp_secure").innerHTML="";
			 
			 
			  if(frm.smtp_host.value=='')
		{
			document.getElementById("alert_smtp_host").innerHTML=lang_please_enter_smtp_host_name;
			if(checkFocus!=1)
			{	frm.smtp_host.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_smtp_host").innerHTML="";
			 
			 
			   if(frm.smtp_user_name.value=='')
		{
			document.getElementById("alert_smtp_user_name").innerHTML=lang_please_enter_smtp_user_name;
			if(checkFocus!=1)
			{	frm.smtp_user_name.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_smtp_user_name").innerHTML="";
			 
			 
			   if(frm.smtp_password.value=='')
		{
			document.getElementById("alert_smtp_password").innerHTML=lang_please_enter_smtp_password;
			if(checkFocus!=1)
			{	frm.smtp_password.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("alert_smtp_password").innerHTML="";

	if(checkFocus==1)
			return false;
		else
			return true;
 
	}
	
	
	
	function Valid_add_seo(frm)
{
	var ckeckFocus=0;
	if(frm.name.value=='')
	{	
		document.getElementById("name").innerHTML=lang_please_enter_name;
			if(ckeckFocus!=1)
			{
				frm.name.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("name").innerHTML="";
		
	if(frm.title.value=='')
	{	
		document.getElementById("title").innerHTML=lang_please_enter_title;
			if(ckeckFocus!=1)
			{
				frm.title.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("title").innerHTML="";
		
		
	if(frm.keyword.value=='')
	{	
		document.getElementById("keyword").innerHTML=lang_please_enter_site_keyword;
			if(ckeckFocus!=1)
			{
				frm.keyword.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("keyword").innerHTML="";	
		
		
	if(frm.des.value=='')
	{	
		document.getElementById("des").innerHTML=lang_please_enter_description;
			if(ckeckFocus!=1)
			{
				frm.des.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("des").innerHTML="";	
		
	if(ckeckFocus==1)
		return false;
	else
		return true;	

}



function valid_banner_value(frm)
{
	var ckeckFocus=0;
	if(frm.photo.value=='')
	{	
		document.getElementById("alert_photo").innerHTML=lang_please_enter_name;
			if(ckeckFocus!=1)
			{
				frm.photo.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("name").innerHTML="";
		
	if(frm.title.value=='')
	{	
		document.getElementById("title").innerHTML=lang_please_enter_title;
			if(ckeckFocus!=1)
			{
				frm.title.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("title").innerHTML="";
		
		
	if(frm.keyword.value=='')
	{	
		document.getElementById("keyword").innerHTML=lang_please_enter_site_keyword;
			if(ckeckFocus!=1)
			{
				frm.keyword.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("keyword").innerHTML="";	
		
		
	if(frm.des.value=='')
	{	
		document.getElementById("des").innerHTML=lang_please_enter_description;
			if(ckeckFocus!=1)
			{
				frm.des.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("des").innerHTML="";	
		
	if(ckeckFocus==1)
		return false;
	else
		return true;	

}
function stateandcitysender(pincode,country)//===========================create main category dropdown=======================//
{
	//alert('xxxxxxxxxx');
	/*alert(pincode);
	alert(country);*/
	
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=stateandcity&pincode="+pincode+"&country="+country, false);   
		   doc.send(null);
	   }
	  // alert(doc.responseText);
		if(doc.responseText==0)
		{
		alert(lang_please_enter_pincode);
		document.getElementById("sender_zip").value="";
		document.getElementById("city_info").value="";
		document.getElementById("city_send_id").value="";
		document.getElementById("sender_zip").focus();
		}
		else
		{
	 var arraylist=doc.responseText.split("**");
	  if(arraylist[0]=='')
	   {alert(lang_this_postel_code_id_not_from_select_country);
	   document.getElementById("sender_zip").value="";
		document.getElementById("city_info").value="";
		document.getElementById("city_send_id").value="";}
		document.getElementById("city_info").value=arraylist[0];
		document.getElementById("city_send_id").value=arraylist[1];
		
		}
}	

function stateandcitysender_admin(pincode)//===========================create main category dropdown=======================//
{
	//alert('xxxxxxxxxx');
	/*alert(pincode);
	alert(country);*/
	var country_id=document.getElementById('sender_country_id').value;
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
		//alert(doc.responseText);
	   if(doc.responseText)
		 {
			 onLoadWatingPoupupClose();
			    //alert(doc.responseText);
		if(doc.responseText=='0')
		{
		//alert(lang_please_enter_pincode);
		document.getElementById("sender_zip_val").value="";
		document.getElementById("sender_city").value="";
		document.getElementById("city_send_id").value="";
		
		}
		else
		{
	 var arraylist=doc.responseText.split("**");
	  if(arraylist[0]=='')
	   {//alert(lang_this_postel_code_not_list);
	   document.getElementById("sender_zip_val").value="";
		document.getElementById("sender_city").value="";
		document.getElementById("city_send_id").value="";}
		else
		{
		document.getElementById("city_dropdown_send").innerHTML=arraylist[0];
		document.getElementById("city_send_id").value=arraylist[1];
		//$('#sender_city').selectpicker('refresh');
		}
		
		}
		 }
	}
  }
		if(doc)
	   {	 onLoadWatingPoupupOpen();
		   doc.open("GET", site_url+"/ajax.php?section=stateandcity_sender&pincode="+pincode+"&country_id="+country_id, true);   
		   doc.send(null);
	   }
	
}	


function stateandcityrec_admin(pincode,frm)//===========================create main category dropdown=======================//
{
	
	var cust_id=document.getElementById('customer_id').value;
	
	var product_unique_id=document.getElementById('nrd').value;
		var country=document.getElementById('reciver_country_id').value;
	
	if(product_unique_id=='')
	{	
		alert(lang_please_select_type_first);
		document.getElementById("reciever_zip").value="";
		document.getElementById("rec_city").value="";
		document.getElementById("rec_city_id").value="";
		frm.nrd.focus();
	}
	
	else
	{
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=stateandcityrec_admin&pincode="+pincode+"&cust_id="+cust_id+"&product_unique_id="+product_unique_id+"&country="+country, false);   
		   doc.send(null);
	   }
	//alert(doc.responseText);
		if(doc.responseText==0)
		{
		//alert(lang_please_enter_pincode);
		document.getElementById("reciever_zip").value="";
		document.getElementById("rec_city").value="";
		//document.getElementById("reciever_zip").focus();
		
		}
		else
		{
	 var arraylist=doc.responseText.split("**");
	  if(arraylist[0]=='')
	   {// alert(lang_this_postel_code_not_list);
	   document.getElementById("reciever_zip").value="";
		document.getElementById("rec_city").value="";
		document.getElementById("rec_city_id").value="";
		
		}
		document.getElementById("city_dropdown_rec1").innerHTML=arraylist[0];// $('#rec_city_id').selectpicker('refresh');
		document.getElementById("rec_city_id").value=arraylist[1];
		//document.getElementById("destination").value=arraylist[2];	
		document.getElementById("service").innerHTML=arraylist[3];	
		
		}
	}
}	

function stateandcityadmin_user(pincode)//===========================create main category dropdown=======================//
{
	//alert('xxxxxxxxxx');
	/*alert(pincode);
	alert(country);*/
	
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=stateandcity&pincode="+pincode, false);   
		   doc.send(null);
	   }
	  // alert(doc.responseText);
		if(doc.responseText=='0')
		{
		//alert(lang_please_enter_pincode);
		document.getElementById("sender_zip").style.borderColor='#F00';
		document.getElementById("sender_zip").focus();
		document.getElementById("sender_zip").value="";
		document.getElementById("city_info").value="";
		document.getElementById("city_send_id").value="";
		
		}
		else
		{
	 var arraylist=doc.responseText.split("**");
	  if(arraylist[0]=='')
	   {
		document.getElementById("sender_zip").style.borderColor='#F00';
		document.getElementById("sender_zip").focus();
	   document.getElementById("sender_zip").value="";
		document.getElementById("city_info").value="";
		document.getElementById("city_send_id").value="";}
		document.getElementById("city_info").value=arraylist[0];
		document.getElementById("city_send_id").value=arraylist[1];
		
		}
}	


function stateandcityrec(pincode,country)//===========================create main category dropdown=======================//
{
	/*alert(pincode);
	alert(country);*/
	
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=stateandcity&pincode="+pincode+"&country="+country, false);   
		   doc.send(null);
	   }
	  //alert(doc.responseText);
		if(doc.responseText==0)
		{
		alert(lang_please_enter_pincode);
		document.getElementById("reciever_zip").value="";
		document.getElementById("destination_info").value="";
		document.getElementById("destination_info_name").value="";
		document.getElementById("reciever_zip").focus();
		}
		else
		{
	 var arraylist=doc.responseText.split("**");
	   if(arraylist[0]=='')
	   {alert(lang_this_postel_code_id_not_from_select_country);
	   document.getElementById("reciever_zip").value="";
		document.getElementById("destination_info").value="";
		document.getElementById("destination_info_name").value="";
	   
	   }
		document.getElementById("destination_info").value=arraylist[0];
		document.getElementById("destination_info_name").value=arraylist[1];
		
		}
}
function add_city_name_pincode(frm)//===================================this is function use for add state===//		 
{  
 
	var checkFocus=0;
//alert(frm.sel_country.value);
  if(frm.sel_country.value=='')
   	{ //alert('xxx')
	 document.getElementById("alert_country").innerHTML="<span class='alert' style='color:#F00; text-align:center;'><b>Select The Country Name.</b></span>";
	     if(checkFocus!=1)
		  {
			  frm.sel_country.focus();
			   checkFocus=1;
		  }
		  //alert('yyyyy')
   	}
   else
      document.getElementById("alert_country").innerHTML="";
	//alert('xxzz       ');/**/
	  
	  if(frm.pincode.value=='')
   	{
	 document.getElementById("alert_pincode").innerHTML="<span class='alert' style='color:#F00; text-align:center;'><b>Enter Pincode</b></span>";
	     if(checkFocus!=1)
		  {
			   frm.pincode.focus();
			   checkFocus=1;
		  }
   	}
   else
   document.getElementById("alert_pincode").innerHTML="";
     if (frm.edit_id.value=='' &&  frm.pincode.value!='')
   {
	   //alert("xxxxxxxxxxxxxxxxx");
	   ajax();
				if (doc)
				{
				//alert ("hello");
				   doc.open("GET", site_url+"/ajax.php?section=check_city_pincode_exits&pincode="+frm.pincode.value, false);   
					doc.send(null);
				}
		//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
				document.getElementById("alert_pincode").innerHTML="<span class='alert' style='color:#F00; text-align:center;'><b>Pincode Aleady Exits</b></span>";
					frm.pincode.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("alert_pincode").innerHTML="";	
   } 
	  
	  
	  
	
	  
	  if(frm.sel_state.value=='')
   	{
	 document.getElementById("alert_state_name").innerHTML="<span class='alert' style='color:#F00; text-align:center;'><b>Select The state Name.</b></span>";
	     if(checkFocus!=1)
		  {
			   frm.sel_state.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_state_name").innerHTML="";
	  
	   if(frm.city_name.value=='')
   	{
	 document.getElementById("alert_city_name").innerHTML="<span class='alert' style='color:#F00; text-align:center;'><b>Enter The city Name.</b></span>";
	     if(checkFocus!=1)
		  {
			   frm.city_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_city_name").innerHTML="";
	/*    else
   {
	   //alert("xxxxxxxxxxxxxxxxx");
	   ajax();
				if (doc)
				{
				//alert ("hello");
				   doc.open("GET", site_url+"/ajax.php?section=check_city_exits&country_name="+frm.sel_country.value+"&state_name="+frm.sel_state.value+"&city_name="+frm.city_name.value, false);   
					doc.send(null);
				}
		//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
				document.getElementById("alert_city_name").innerHTML="<span class='alert' style='color:#F00; text-align:center;'><b>City Aleredy Exits</b></span>";
					frm.city_name.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("alert_city_name").innerHTML="";	
   }  */
   

	 
	 if(checkFocus==1)
		 return false;
	 else
		 return true;


	

}
function createCityDropdown_admin(sta_id)//===========================create main category dropdown=======================//
{
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=makeCityDropdown_admin&state_id="+sta_id, false);   
		   doc.send(null);
	   }
	// alert(doc.responseText);
	   document.getElementById('city_dropdown_show').innerHTML=doc.responseText;
}

	
function submitform()
{

  document.forms["frm_lang"].submit();
}


function show_dia()
{

 if(document.getElementById("dia_check").checked)
 {
	 document.getElementById('diamentions').style.display="block";
	 }
else
 document.getElementById('diamentions').style.display="none";
 }
 
 
 //===============================================valid height widht girth==================================//
function checkMaximumValueForBookingFirstStep(this_value,type,id)
{	
	var type,id; 
	var this_value= parseInt(this_value);
	var dia_check=document.getElementById('dia_check').value;
	
	if(dia_check=='Y')
	{
	if(type=='weight')
	{
		var weight=document.getElementById('maximum_weight').value;
		//alert(weight);
		if(weight<this_value)
		{
			alert(lang_please_enter_less_weight+weight+"Kg");
			document.getElementById('parcel_weight_'+id).value=weight;
			document.getElementById('document_weight').value=weight;
		}
	}
	
	if(type=='height')
	{
		var height=document.getElementById('maximum_height').value;
		if(this_value>height)
		{
			alert(lang_please_enter_less_height +height+"Cm");
			document.getElementById('parcel_height_'+id).value=height;
		}
	}
	if(type=='width')
	{
		var width=document.getElementById('maximum_width').value;
		if(this_value>width)
		{
			alert(lang_please_enter_less_width+width+"Cm");
			document.getElementById('parcel_width_'+id).value=width;
		}
	}
	if(type=='girth')
	{
		var girth=document.getElementById('maximum_girth').value;
		if(this_value>girth)
		{
			alert(lang_please_enter_less_grith+girth+"Cm");
			document.getElementById('parcel_girth_'+id).value=girth;
		}
	}
	}
}


function select_pickupcharge()
{

 if(document.getElementById("collection_service").checked)
 {
	 document.getElementById('collection_are_made_input').style.display="block";
	 }
else
 document.getElementById('collection_are_made_input').style.display="none";
 }
 
 
 function validproducttype(frm) 
{
	
//var package_title = document.getElementById("package_title").value;
//alert(package_title);
var i=document.getElementById("count").value;
 
var checkFocus=0;
	
	if(frm.package_title.value=='')
	{	
		document.getElementById("package_title").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.package_title.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("package_title").style.borderColor='';
		
		if(frm.weight.value=='')
	{	
		document.getElementById("alert_end_range_info").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.weight.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("weight").style.borderColor='';
		
	for(j=1;j<=i;j++)	
	{
		
		if(document.getElementById("start_range_"+j).value=='')
	{	
		document.getElementById("start_range_"+j).style.borderColor='red';
			if(checkFocus!=1)
			{
				frm.start_range_+j.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("start_range_"+j).style.borderColor='';
		
		if(document.getElementById("end_range_"+j).value=='')
	{	
		document.getElementById("end_range_"+j).style.borderColor='red';
			if(checkFocus!=1)
			{
				frm.end_range_+j.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("end_range_1").style.borderColor='';
		
	}
		
		if(checkFocus==1)
		return false;
	else
		return true;

}

function address_book_fill_sender(name)
{
	
		//alert(name);
	ajax();
	if (doc)
	{
	   doc.open("GET",  site_url+"/ajax.php?section=address_book_fill_sender&name="+name, false);   
	   doc.send(null);
	}
	//alert(doc.responseText);
	   var arraylist=doc.responseText.split("**");
	     if(arraylist[0])
	   document.getElementById("sender_name").value=arraylist[0];
		else
		document.getElementById("sender_name").value=name;
		
		//$('#sender_country_id').selectpicker('refresh');
		document.getElementById("sender_zip_val").value=arraylist[1];
		//document.getElementById("sender_state").value=arraylist[2];
		//document.getElementById("sender_city").value=arraylist[3];
		document.getElementById("sender_address_val").value=arraylist[4];
		document.getElementById("sender_phone_val").value=arraylist[5];
		document.getElementById("sender_email_val").value=arraylist[6];
		
		//$('#sender_city').selectpicker('refresh');
		document.getElementById("customer_id").value=arraylist[8];
		document.getElementById("shippers_ac_no_val").value=arraylist[9];
		
		
	
	loding_img_hide();

}

function address_book_fill(name)
{
	document.getElementById("reciever_name_view").value=name;
		//alert(name);
	ajax();
	if (doc)
	{
	   doc.open("GET",  site_url+"/ajax.php?section=address_book_fill&name="+name, false);   
	   doc.send(null);
	}
	//alert(doc.responseText);
	   var arraylist=doc.responseText.split("**");
	   if(arraylist[0])
	   {
		
		

	  
		
		document.getElementById("reciever_zip").value=arraylist[1];

		document.getElementById("reciever_address").value=arraylist[4];
		document.getElementById("reciever_phone").value=arraylist[5];
		
		document.getElementById("reciever_email").value=arraylist[6];
		document.getElementById("reciver_id").value=arraylist[8];
	 }	
		
		
		
	
	loding_img_hide();
} 

function call_city_id_rec(name)
{
	//alert(name);
	/*if(document.getElementById('reciever_zip').value==''){*/
ajax();
	if (doc)
	{
	   doc.open("GET",  site_url+"/ajax.php?section=call_city_id_rec&name="+name, false);   
	   doc.send(null);
	}
	  var arraylist=doc.responseText.split("**");
	
	if(doc.responseText!=0)
	{
	
	document.getElementById('rec_city_id').value=arraylist[0];
	
	document.getElementById('reciever_zip').value=arraylist[1];
	}
	else
	{
	document.getElementById('rec_city').style.borderColor="#F00";
	document.getElementById('rec_city').style.value="";
	}
	//}
}

function call_city_id_send(name)
{
	/*if(document.getElementById('sender_zip_val').value=='')
	{*/
ajax();
	if (doc)
	{
	   doc.open("GET",  site_url+"/ajax.php?section=call_city_id_rec&name="+name, false);   
	   doc.send(null);
	} 
	//alert(doc.responseText);
	if(doc.responseText!=0)
	{
	  var arraylist=doc.responseText.split("**");
	document.getElementById('city_send_id').value=arraylist[0];
	
	document.getElementById('sender_zip_val').value=arraylist[1];
	}
	else
	{
	document.getElementById('sender_city').style.borderColor="#F00";
	document.getElementById('sender_city').style.value="";
	}
	//}
}



var myVar, rVar;
function Chat(id,name)
{
//alert('uuuuuuuuuuuuuuu');
		
		var id;
			//document.getElementById('online_chat_window').style.display="none";
				
			//document.getElementById('cencel_id').value=id;
			//alert('xxx');
		ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=messanger_online&id="+id,false);   
		   doc.send(null);
	   }	
		//alert(doc.responseText);	
		 var arraylist=doc.responseText.split("**");
	   document.getElementById('online_chat_window').style.display="block";
		document.getElementById('user_online').innerHTML=arraylist[0];
		
		//myVar = setInterval(function(){ Chat(id, name); }, 2000);
		/* myVar = setInterval(function(){ user_chat_refresh(id, name); }, 2000);
		  rVar = setInterval(function(){ new_message(id, name); }, 2000);*/
		//alert('xxxxxx');	
}
function new_message()
{
	//alert('xxxxx');
		var id='',name='';	
		ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=new_message",false);   
		   doc.send(null);
	   }	
	 var arraylist=doc.responseText.split("**");
	
	document.getElementById('new_message').innerHTML=arraylist[1];
	if(arraylist[0]==0)
	{
	//alert(arraylist[0]);
	//this.Chat(id,name);
	}
}
function reaison_close()
{

			var id="0";
			document.getElementById('online_chat_window').style.display="none";
			ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=chat_open_close&id="+id,false);   
		   doc.send(null);
	   }	

}
function reaison()
{
	//alert("xxxxxxxxx");
	var id=1;
			document.getElementById('online_chat_window').style.display="block";
			ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=chat_open_close&id="+id,false);   
		   doc.send(null);
	   }	
			

}

function reaison_min()
{
	var id=1;

			
ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=min_max&id="+id,false);   
		   doc.send(null);
	   }
document.getElementById('minmax_change').innerHTML=' <a onclick="reaison_max()" ><span id="minim_chat_window"  class="glyphicon glyphicon-plus icon_minim"></span></a>';	 	   	
document.getElementById('user_online').style.display="none";
}
function reaison_max()
{
var id=0;
			
ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=min_max&id="+id,false);   
		   doc.send(null);
	   }
document.getElementById('minmax_change').innerHTML=' <a onclick="reaison_min()" ><span id="minim_chat_window"  class="glyphicon glyphicon-minus" icon_minim"></span></a>';	   
	   	
document.getElementById('user_online').style.display="block";

}
function send_message(id)
{
	var message=document.getElementById('input_message').value;
	
		ajax();
		doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    {
    
		document.getElementById('input_message').value='';
		 document.getElementById('input_message').focus();
  	
	}
  }
  if(message!='')
  {
	if (doc)
	{
		
	    //   doc.open("GET", site_url+"/ajax.php?section=add_more_parcel_details_form&add_type="+add_type+"&add_number="+add_number+"&parcel_contents_array="+parcel_contents_array, false);
		 doc.open("GET", site_url+"/ajax.php?section=send_message&message="+message, true);  
		
		 doc.send(null); 
		// alert(add_number);
	}
  }
   //alert(doc.responseText);	
 //document.getElementById('msg_min_'+id).value='';
//		 document.getElementById('msg_min_'+id).focus();
  	
	
}

function user_chat(id,name)
{	//alert(name);
	document.getElementById('message_window').style.display="block";
		var id;
		ajax();	doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
    { 
	//alert(doc.responseText);	
	var arraylist=doc.responseText.split("**");
	   
		//document.getElementById('user_online').innerHTML=arraylist[0];
		document.getElementById('user_windows').innerHTML=arraylist[0];	
		document.getElementById('user_name').innerHTML=arraylist[1];	
		var objDiv = document.getElementById("user_windows");
			objDiv.scrollTop = objDiv.scrollHeight;
		clearInterval(myVar);
		// myVar = setInterval(function(){ user_chat_refresh(); }, 2000);
	}
	}
		
	 	if(doc)
	   {
		   doc.open("GET","ajax.php?section=user_message&id="+id,true);   
		   doc.send(null);
	   }
	  // alert(doc.responseText);	
	   
	/*		
		
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=user_message&id="+id,false);   
		   doc.send(null);
	   }*/
	  		
		//alert(doc.responseText);	
		/*var objDiv = document.getElementById("chat_"+id);
				objDiv.scrollTop = objDiv.scrollHeight;
		// var arraylist=doc.responseText.split("**");
		document.getElementById('message_view_'+id).innerHTML=arraylist[0];
		document.getElementById('new_message').innerHTML=arraylist[1];*/
		
		
		
		 
}

function user_chat_refresh()
{
			
		ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=user_message_refres",false);   
		   doc.send(null);
	   }	
	 //  alert('xeeeeeeeeeeeeee');
		//alert(doc.responseText);	
		// var arraylist=doc.responseText.split("**");
		document.getElementById('user_windows').innerHTML=doc.responseText;
		//document.getElementById('new_message').innerHTML=arraylist[1];
		var objDiv = document.getElementById("user_windows");
			objDiv.scrollTop = objDiv.scrollHeight;
	
		//$("html, body").animate({ scrollTop: $("#last_"+id).scrollTo() }, 1000);
}


function checkSelecttype(sel_id)
{
	var last_select_radio=document.getElementById('last_select_radio_id').value;
	document.getElementById('sel_'+sel_id).checked="checked";
	document.getElementById('sel_active_'+last_select_radio).className="font_icon_xl quote_form_icon";
	document.getElementById('sel_active_'+sel_id).className="font_icon_xl quote_form_icon_active";
	document.getElementById('last_select_radio_id').value=sel_id;
}



function reaison_close_user()
{
			//alert(id);
			document.getElementById('message_window').style.display="none";
			
		var closeid=2;

			
ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=min_max_user&closeid="+closeid,false);   
		   doc.send(null);
	   }
	  // location.reload();	
		//alert(doc.responseText);		
}


function reaison_min_user(id)
{
		var closeid=1;

			
ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=min_max_user&closeid="+closeid,false);   
		   doc.send(null);
	   }	
			//alert(doc.responseText);	
			document.getElementById('user_min_max').style.display="block";

}
function reaison_max_user()
{
	
		var closeid=0;
			document.getElementById('user_min_max').style.display="block";

			
ajax();
	if(doc)
	   {
		   doc.open("GET","ajax.php?section=min_max_user&closeid="+closeid,false);   
		   doc.send(null);
	   }	
			
//alert(doc.responseText);	

}

//===================================on load open login poup================//
function onLoadWatingPoupupOpen()
{
		//alert("xxxxxxxxx");
		$('#myPleaseWait').modal({
			 backdrop: 'static',
			});
}
function onLoadWatingPoupupClose()
{
		//alert("xxxxxxxxx");
		$('#myPleaseWait').modal('hide');
}



function submitpickupRecivedForGlobalRecived()
{
	var select_number=document.getElementById('pickup_in_awb_number').value;
	var return_message='';
	if(select_number=='')
	{
		//return_message='<div class="alert alert-danger"><strong>Oh snap!</strong> Enter AWB No.</div>';
//		document.getElementById('menifest_recived_message').innerHTML=return_message;
	}
	else
	{
		ajax();
		if (doc){
				   doc.open("GET", "ajax.php?section=inGlobalpickup_in&select_number="+select_number, false);   
				   doc.send(null);
			   }
		//alert(doc.responseText);
		document.getElementById('menifest_recived_message').innerHTML=doc.responseText;
		document.getElementById('pickup_in_awb_number').value='';
		document.getElementById('pickup_in_awb_number').focus();
	}
	
	return false;
}

/****************************************add global menifest in awb no recived*****************************************************/
function submitMenifestRecivedForGlobalRecived()
{
	var select_number=document.getElementById('manifest_in_awb_number').value;
	var return_message='';
	if(select_number=='')
	{
		/*return_message='<div class="alert alert-danger"><strong>Oh snap!</strong> Enter AWB No.</div>';
		document.getElementById('menifest_recived_message').innerHTML=return_message;*/
	}
	else
	{
		ajax();
		if (doc){
				   doc.open("GET", "ajax.php?section=inGlobalMenifest&select_number="+select_number, false);   
				   doc.send(null);
			   }
		//alert(doc.responseText);
		document.getElementById('menifest_recived_message').innerHTML=doc.responseText;
		document.getElementById('manifest_in_awb_number').value='';
		document.getElementById('manifest_in_awb_number').focus();
	}
	
	return false;
}

//======================global recived drs==========================//
function setLockForGlobalReciveDRS(lock_type,last_lock_type)
{
	//alert(lock_type+"--"+last_lock_type);
	
	if(lock_type=='name')
	{
		if(last_lock_type=='lock')
		{
		document.getElementById('name_lock_unlock').innerHTML="<a onclick=setLockForGlobalReciveDRS('name','unlock')><i class='fa fa-lock'></i></a>";
		document.getElementById('name_input_box').readOnly="readOnly";
		document.getElementById('name_lock_unlock_input').value="lock";
		}
		else
		{
		document.getElementById('name_lock_unlock').innerHTML="<a onclick=setLockForGlobalReciveDRS('name','lock')><i class='fa fa-unlock'></i></a>";
		document.getElementById('name_input_box').readOnly="";	
		document.getElementById('name_lock_unlock_input').value="unlock";
		}
		var input_value=document.getElementById('name_input_box').value;
	}
	else if(lock_type=='number')
	{
		if(last_lock_type=='lock')
		{
		document.getElementById('number_lock_unlock').innerHTML="<a onclick=setLockForGlobalReciveDRS('number','unlock')><i class='fa fa-lock'></i></a>";
		document.getElementById('contact_number').readOnly="readOnly";
		document.getElementById('number_lock_unlock_input').value="lock";
		}
		else
		{
		document.getElementById('number_lock_unlock').innerHTML="<a onclick=setLockForGlobalReciveDRS('number','lock')><i class='fa fa-unlock'></i></a>";
		document.getElementById('contact_number').readOnly="";	
		document.getElementById('number_lock_unlock_input').value="unlock";
		}
		var input_value=document.getElementById('contact_number').value;
	}
	
	ajax();
		if (doc){
			doc.open("GET", "ajax.php?section=globalInDrsLockSession&lock_type="+lock_type+"&lock_value="+input_value+"&active_lock="+last_lock_type, false);   			
			doc.send(null);
			}
}

/****************************************add DRS in awb no recived*****************************************************/
function submitDRSRecivedForGlobalRecived()
{
	//alert(document.getElementById('drs_in_awb_number').value);
	var select_number=document.getElementById('drs_in_awb_number').value;
	
	
	var return_message='';
	if(select_number=='')
	{
		return_message='<div class="notibar msgerror"><p>Please Enter AWB No.</p></div>';
		document.getElementById('drs_recived_message').innerHTML=return_message;
	}
	else
	{
		
		ajax();
		if (doc){
				   doc.open("GET", "ajax.php?section=inGlobalDRS&select_number="+select_number, false);   
				   doc.send(null);
			   }
	//alert(doc.responseText);
		document.getElementById('drs_recived_message').innerHTML=doc.responseText;
		document.getElementById('drs_in_awb_number').value='';
		document.getElementById('drs_in_awb_number').focus();
	}

	return false;
}

//=================priviliage on off==========================//
function setUserPrivilageOnOff(select_id)
{
	var customer_id=document.getElementById('select_customer').value;
	if(customer_id=='')
	{
		document.getElementById('alert_customer').innerHTML="Please Select Customer";
	}
	else
	{
		document.getElementById('alert_customer').innerHTML=""
		var onoff_true_false=document.getElementById('onoff_check_box_'+select_id).checked;
		var privilage_id=select_id;
		ajax();
			if (doc){
				   doc.open("GET", "ajax.php?section=setCustomerPrivilage&privilage_id="+privilage_id+"&customer_id="+customer_id+"&onoff_true_false="+onoff_true_false, false);   
				   doc.send(null);
			   }
			//  alert(doc.responseText);
	}
}

function Valid_forgot_password(frm)
{
	var checkFocus=0;
	
	
	if(frm.email.value=='')
	{	
		document.getElementById("email").style.borderColor='#F00';
			if(checkFocus!=1)
			{
				frm.email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		document.getElementById("email").style.borderColor='';
	}
	
	
	if(checkFocus==1)
		return false;
	else
		return true;
}

function userPrivilageTable(customer_id)
{
	var x=document.getElementById("select_customer").value;
	
	if(x!='')
	{
	ajax();
			if (doc){
				   doc.open("GET", "ajax.php?section=userPrivilageTable&customer_id="+customer_id, false);   
				   doc.send(null);
			   }
			   document.getElementById('privilage_table').innerHTML=doc.responseText;
	}
	else
	{
	window.location.assign("admin.php?c=user&f=set_user_privilege")	
		}
	
}
//==================//new zone working=============================================//
function valid_zone(frm)
{
	
var ckeckFocus=0;
	
	if(frm.procut_type.value=='')
	{	
		document.getElementById("product_info").innerHTML="Please Enter Zone Name";
			if(ckeckFocus!=1)
			{
				frm.procut_type.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("product_info").innerHTML="";
		
		
		if(frm.from_distance.value=='')
	{	
		document.getElementById("fr_distance").innerHTML="Please Enter From Distance";
			if(ckeckFocus!=1)
			{
				frm.from_distance.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("fr_distance").innerHTML="";
		
		
		if(frm.to_distance.value=='')
	{	
		document.getElementById("t_distance").innerHTML="Please Enter From Distance";
			if(ckeckFocus!=1)
			{
				frm.to_distance.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("t_distance").innerHTML="";
		
	//alert(frm.to_distance.value);
		
	if(ckeckFocus==1)
		return false;
	else
		return true;	
}




function get_zone_data(service_id,country,zone_id,cust_id,agent_id,carrer_id,product_type)
{

//alert(product_type);

//var country=document.getElementById('country_id').value;

//var service_id=document.getElementById('sel_service_id').value;
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_zone_data&country_id="+country+"&service_id="+service_id+"&zone_id="+zone_id+"&cust_id="+cust_id+"&agent_id="+agent_id+"&carrer_id="+carrer_id+"&product_type="+product_type, false);   
		   doc.send(null);
	   }
	 // alert(doc.responseText);
	  document.getElementById('zone_data').innerHTML=doc.responseText;
}





function get_zone_data1()
{

var country=document.getElementById('country_id').value;

var service_id=document.getElementById('sel_service_id_new').value;



var cust_id=document.getElementById('cust_id').value;

var agent_id=document.getElementById('agent_id').value;

var carrer_id=document.getElementById('carrer_id').value;

var product_type=document.getElementById('product_type').value;

ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_zone_data&country_id="+country+"&service_id="+service_id+"&cust_id="+cust_id+"&agent_id="+agent_id+"&carrer_id="+carrer_id+"&product_type="+product_type, false);   
		   doc.send(null);
	   }
	// alert(doc.responseText);
	  document.getElementById('zone_data').innerHTML=doc.responseText;
}



/*function get_city()
{

var country=document.getElementById('country_id').value;
//alert(country);
//var service_id=document.getElementById('sel_service_id').value;
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_city&country_id="+country, false);   
		   doc.send(null);
	   }
	  //alert(doc.responseText);
	  document.getElementById('city_combo').innerHTML=doc.responseText;
}*/

function get_city_list()
{
//
var country=document.getElementById('country_id').value;

//var service_id=document.getElementById('sel_service_id').value;
//var form_city=document.getElementById('city_data').value;
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_city_list&country_id="+country, false);   
		   doc.send(null);
	   }
	 //alert(doc.responseText);
	  document.getElementById('city_list').innerHTML=doc.responseText;
}

function update_zone(val,update_city)
{

ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=set_rate_zone_city&update_city="+update_city+"&value="+val, false);   
		   doc.send(null);
	   }
	  //alert(doc.responseText);
	 // document.getElementById('city_list').innerHTML=doc.responseText;
}


function update_zone_rate(val,id,zone_id_to)
{
//alert(product_type);
//alert(id);
//alert(document.getElementById(id).value);
//alert(document.getElementById('country_id').value);
///alert(zone_id_to);
//var val,zone_id_to,id;
var range=document.getElementById(id).value;
//alert(range);
var country_id=document.getElementById('country_id').value;
//alert(country_id);
var product_type=document.getElementById('product_type').value;
//alert(product_type);

//alert(zone_id);
var sel_service_id=document.getElementById('sel_service_id_new').value;
//alert(sel_service_id);
var edit_cust_id=document.getElementById('cust_id').value;
//alert(edit_cust_id);
var agent_id=document.getElementById('agent_id').value;
//alert(agent_id);
//alert(edit_cust_id);

ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=update_zone_ratee&val="+val+"&id="+id+"&range="+range+"&country_id="+country_id+"&product_type="+product_type+"&sel_service_id="+sel_service_id+"&zone_id_to="+zone_id_to+"&cust_id="+edit_cust_id+"&agent_id="+agent_id, false);   
		   doc.send(null);
	   }
//alert(doc.responseText);
	 // document.getElementById('city_list').innerHTML=doc.responseText;
}




function submitform(frm)
{
//alert("hello");
 // document.forms["edit_rate"].submit();
document.getElementById('edit_rate').submit();
 //document.forms["edit_rate"].submit();
 
 alert(x);
}


function valid_zone(frm)
{
	
var ckeckFocus=0;
	if(frm.procut_type.value=='')
	{	
		document.getElementById("product_info").innerHTML="Please Enter Zone Name";
			if(ckeckFocus!=1)
			{
				frm.procut_type.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("product_info").innerHTML="";
		
	
		
	if(ckeckFocus==1)
		return false;
	else
		return true;	
}

function change(val)
{
	if(val==0)
	{
	document.getElementById("inter_origin").style.display="none";
	document.getElementById("inter_dest").style.display="none";
	document.getElementById("select_type").value=val;	
	document.getElementById("domestic_origin").style.display="block";
	document.getElementById("domestic_dest").style.display="block";
	document.getElementById("domestic_line").innerHTML='<i class="fa fa-plus-square-o"></i> Book Your Shipment Now In '+defaultcountry;
	
		}
		else
		{
			document.getElementById("inter_dest").style.display="block";
			document.getElementById("inter_origin").style.display="block";
			document.getElementById("domestic_origin").style.display="none";
			document.getElementById("domestic_dest").style.display="none"
			document.getElementById("select_type").value=val;
	document.getElementById("domestic_line").innerHTML='<i class="fa fa-plus-square-o"></i> Book Your Shipment Now';
		}
	
		
}


function Valid_staff(frm)
{
	var checkFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").style.borderColor="red";
			if(checkFocus!=1)
			{
				frm.name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name").style.borderColor="";
	
	if(frm.address.value=='')
	{	
		document.getElementById("address").style.borderColor="red";
			if(checkFocus!=1)
			{
				frm.address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("address").style.borderColor="";
	
		
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").style.borderColor="red";
			if(checkFocus!=1)
			{
				frm.phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("phone").style.borderColor="";
	
	if(frm.password.value=='')
		{	
			document.getElementById("password").style.borderColor="red";
				if(checkFocus!=1)
				{
					frm.password.focus();
					var checkFocus=1;
				}
		}
		else
		
			document.getElementById("password").style.borderColor="";
			
	
	//===========================for user name validation==========================================//
	if(frm.id.value=='')
	{
		if(frm.user_name.value=='')
		{	
			document.getElementById("user_name").style.borderColor="red";
				if(checkFocus!=1)
				{
					frm.user_name.focus();
					var checkFocus=1;
				}
		}
		else
		{
			ajax();
			if (doc){
				   doc.open("GET", "ajax.php?section=check_staff_avilable&cus_name="+frm.user_name.value, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			if(doc.responseText==1)
			{	
				alert("user_name already exits");
				frm.user_name.focus();
				var	 checkFocus=1;
			}
			else
			{
				document.getElementById("user_name").style.borderColor="";
			}
		}
		
	}
		if(checkFocus==1)
		return false;
	else
		return true;
}
	
	//==========================password validation====================================//	
	
		
			
		
	
			
	//=========================================================================================//		
	
	function Valid_ship_agent(frm)
{
	
	var checkFocus=0;
	
	if(frm.nrd.value=='')
	{	
		document.getElementById("nrd_alert").innerHTML="please enter product type";
			if(checkFocus!=1)
			{
				frm.nrd.focus();
				var checkFocus=1;
				var FORMMISTAK1=1;
			}
	}
	else
		document.getElementById("nrd_alert").innerHTML="";


/*	if(frm.weight_val.value=='')
	{	
		document.getElementById("weight").innerHTML=lang_please_enter_weight_in_grams;
			if(checkFocus!=1)
			{
				frm.weight_val.focus();
				var checkFocus=1;
				var FORMMISTAK1=1;
			}
	}
	else
		document.getElementById("weight").innerHTML="";*/


	
var y=document.getElementById("origin").value;
//alert(y);
	if(frm.origin.value=='')
	{	
		document.getElementById("origin_alert").innerHTML="please enter origin";
			if(checkFocus!=1)
			{
				frm.origin.focus();
				var checkFocus=1;
				var FORMMISTAK1=1;
			}
	}
	else
		document.getElementById("origin_alert").innerHTML="";
		
		var x=document.getElementById("destination_alert").value;
		//alert(x);
		
	if(frm.dest_id.value=='')
	{	
		document.getElementById("destination_alert").innerHTML="please select destination";
			if(checkFocus!=1)
			{
				frm.dest_id.focus();
				var checkFocus=1;
				var FORMMISTAK1=1;
			}
	}
	else
		document.getElementById("destination_alert").innerHTML="";
		
	
	if(frm.sel_service_id.value=='')
	{	
		document.getElementById("alert_service").innerHTML="Please select service";
			if(checkFocus!=1)
			{
				frm.sel_service_id.focus();
				var checkFocus=1;
				var FORMMISTAK1=1;
			}
	}
	else
		document.getElementById("alert_service").innerHTML="";
		
	
	
	
	/*if(frm.Bookingmode.value=='COD')
	{	
		if(frm.total_cod_amt.value=='')
		{	
			document.getElementById("total_cod_amt_alert").innerHTML=lang_please_enter_total_amount;
				if(checkFocus!=1)
				{
					frm.total_cod_amt.focus();
					var checkFocus=1;
					var FORMMISTAK1=1;
				}
		}
		else
			document.getElementById("total_cod_amt_alert").innerHTML="";
	}
*/

if(frm.sender_name.value=='')
	{	
		document.getElementById("sender_name").innerHTML="please enter sender name";
			if(checkFocus!=1)
			{
				frm.sender_name.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_name").innerHTML="";

if(frm.sender_address.value=='')
	{	
		document.getElementById("sender_address").innerHTML="please enter sender address";
			if(checkFocus!=1)
			{
				frm.sender_address.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_address").innerHTML="";

/*if(frm.sender_zip.value=='')
	{	
		document.getElementById("sender_zip").innerHTML=lang_please_enter_zip_code;
			if(checkFocus!=1)
			{
				frm.sender_zip.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_zip").innerHTML="";*/

if(frm.sender_phone.value=='')
	{	
		document.getElementById("sender_phone").innerHTML="please enter sender phone";
			if(checkFocus!=1)
			{
				frm.sender_phone.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_phone").innerHTML="";

/*if(frm.sender_fax.value=='')
	{	
		document.getElementById("sender_fax").innerHTML=lang_please_enter_sender_fax;
			if(checkFocus!=1)
			{
				frm.sender_fax.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("sender_fax").innerHTML="";

if(frm.sender_email.value=='')
	{	
		document.getElementById("sender_email").innerHTML=lang_please_enter_sender_email;
			if(checkFocus!=1)
			{
				frm.sender_email.focus();
				var checkFocus=1;
				var FORMMISTAK2=1;
			}
	}
	else
		document.getElementById("sender_email").innerHTML="";

*/

if(frm.reciever_name.value=='')
	{	
		document.getElementById("reciever_name").innerHTML="please  enter reciever name";
			if(checkFocus!=1)
			{
				frm.reciever_name.focus();
				var checkFocus=1;
				var FORMMISTAK3=1;
			}
	}
	else
		document.getElementById("reciever_name").innerHTML="";

if(frm.reciever_address.value=='')
	{	
		document.getElementById("reciever_address").innerHTML="please enterb reciever address";
			if(checkFocus!=1)
			{
				frm.reciever_address.focus();
				var checkFocus=1;
				var FORMMISTAK3=1;
			}
	}
	else
		document.getElementById("reciever_address").innerHTML="";

/*if(frm.reciever_zip.value=='')
	{	
		document.getElementById("reciever_zip").innerHTML=lang_please_enter_zip_code;
			if(checkFocus!=1)
			{
				frm.reciever_zip.focus();
				var checkFocus=1;
				var FORMMISTAK3=1;
			}
	}
	else
		document.getElementById("reciever_zip").innerHTML="";
*/

if(frm.reciever_phone.value=='')
	{	
		document.getElementById("reciever_phone").innerHTML="please enter reciever phone";
			if(checkFocus!=1)
			{
				frm.reciever_phone.focus();
				var checkFocus=1;
				var FORMMISTAK3=1;
			}
	}
	else
		document.getElementById("reciever_phone").innerHTML="";
		
if(frm.declared_charge.value=='')
	{	
		document.getElementById("declared_charge").innerHTML="please enter declared charge";
			if(checkFocus!=1)
			{
				frm.declared_charge.focus();
				var checkFocus=1;
				
			}
	}
	else
		document.getElementById("declared_charge").innerHTML="";		


				
		if(checkFocus==1)
		return false;
	else
		return true;
			
}

function getPriceDetailsUsingServiceId_New_agent(frm)
{
	//alert(frm);
	var total_distance=document.getElementById('distance_road').value;
	var parcel_quantity=frm.parcel_quantity.value;
	var service_id=frm.sel_service_id.value;
	var destination=document.getElementById('dest_id').value;
	var origin=document.getElementById('origin').value;
    var unique_id=frm.nrd.value;
	//alert(unique_id);
	//alert(destination);
	
	var	add_number=frm.parcel_quantity.value;	
	
			
		 //===================== create array in  for parcel values=============//
			
			var parcel_weight_array=[];
			var parcel_height_array=[];
			var parcel_width_array=[];
			var parcel_girth_array=[];
		
			
		
	
		
			for(i = 1; i <= add_number; i++){
				
				parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
				parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
				parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
				parcel_girth_array.push([document.getElementById('parcel_girth_'+i).value]);
				
			}
		//===============================================================================//
		
			//alert(weight);
	ajax();
	doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
  {
	// alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];
	document.getElementById("weight").value=arraylist[4];
	document.getElementById("agent_price_total").value=arraylist[5];
	document.getElementById("agent_price").value=arraylist[6];
    document.getElementById("agent_price_service_tax").value=arraylist[7];

  }
  }
		if (doc)
		{
			   doc.open("GET", "ajax.php?section=PriceDetailsUsingServiceId_New_agent&service_id="+service_id+"&parcel_weight_array="+parcel_weight_array+"&parcel_height_array="+parcel_height_array+"&parcel_width_array="+parcel_width_array+"&parcel_girth_array="+parcel_girth_array+"&destination="+destination+"&add_number="+add_number+"&origin="+origin+"&unique_id="+unique_id+"&total_distance="+total_distance, true);   
			   doc.send(null);
		}
		
	
	
}
	
	function select_service_add_ship_agent(id)
{
		//alert(id);
			ajax();
	doc.onreadystatechange=function()
  {
  if (doc.readyState==4 && doc.status==200)
  {
	  document.getElementById("service").innerHTML=doc.responseText;	
  }
  }
			if (doc){
				   doc.open("GET", site_url+"/ajax.php?section=select_service_add_ship_agent&id="+id, true);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				document.getElementById('service').innerHTML=doc.responseText;
					
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}


			


function city_origin_agent_destnation(val)
{
	ajax();
	if (doc)
	{
		 doc.open("GET", site_url+"/ajax.php?section=city_origin_agent_destnation&country_id="+val, false);  
		 doc.send(null); 
	}
	//alert(doc.responseText);
	document.getElementById('destnation_city_new').innerHTML=doc.responseText;
	
	
}

function get_new_destnation()
{
	var dest=document.getElementById("dest_id").value;


document.getElementById("destination_new").value=dest;
}

function city_origin_agent(val)
{
	ajax();
	if (doc)
	{
		 doc.open("GET", site_url+"/ajax.php?section=city_dropdown_agent&country_id="+val, false);  
		 doc.send(null); 
	}
	//alert(doc.responseText);
	document.getElementById('origin_city_new').innerHTML=doc.responseText;
	
	
}


function get_zone_dataFront_agent(service_id,country,zone_id,cust_id,agent_id,carrer_id,product_type)
{

var country=document.getElementById('country_id').value;

var service_id=document.getElementById('sel_service_id_new').value;

var zone_id=document.getElementById('zone_id').value;

var cust_id=document.getElementById('cust_id').value;

var agent_id=document.getElementById('agent_id').value;

var carrer_id=document.getElementById('carrer_id').value;

var product_type=document.getElementById('product_type').value;
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_zone_data_front_agent&country_id="+country+"&service_id="+service_id+"&zone_id="+zone_id+"&cust_id="+cust_id+"&agent_id="+agent_id+"&carrer_id="+carrer_id+"&product_type="+product_type, false);   
		   doc.send(null);
	   }
	 //alert(doc.responseText);
	  document.getElementById('zone_data').innerHTML=doc.responseText;
}





function get_zone_dataFront_agent1()
{

var country=document.getElementById('country_id').value;

var service_id=document.getElementById('sel_service_id_new').value;

var zone_id=document.getElementById('zone_id').value;

var cust_id=document.getElementById('cust_id').value;

var agent_id=document.getElementById('agent_id').value;

var carrer_id=document.getElementById('carrer_id').value;

var product_type=document.getElementById('product_type').value;
//alert(cust_id);

ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_zone_data_front_agent&country_id="+country+"&service_id="+service_id+"&zone_id="+zone_id+"&cust_id="+cust_id+"&agent_id="+agent_id+"&carrer_id="+carrer_id+"&product_type="+product_type, false);   
		   doc.send(null);
	   }
	// alert(doc.responseText);
	  document.getElementById('zone_data').innerHTML=doc.responseText;
}

function get_pincode_Origin(id)
{
	//alert(id);
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_pincode_origen&city_id="+id, false);   
		   doc.send(null);
	   }
	//alert(doc.responseText);
	  document.getElementById('sender_zip_val').value=doc.responseText;
	
}

function get_pincode_dest(id)
{
	//alert(id);
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_pincode_dest&city_id="+id, false);   
		   doc.send(null);
	   }
	//alert(doc.responseText);
	  document.getElementById('reciver_zip_val').value=doc.responseText;
	
}


function pod_Close()
{	
	document.getElementById("pod").style.display="none";	
}



function pod_Open(booking_id,signature,image,name,phone)
{
	//alert(signature);
	
	ajax();
		if(doc)
	   {
		    document.getElementById("pod").style.display="none"; 
		   doc.open("GET", site_url+"/ajax.php?section=check_pod_image&slip_no="+booking_id, false);   
		   doc.send(null);
	   }
       // alert(doc.responseText);

        var x=site_url+"/signature_img/"+booking_id+'.png';
        var x1=site_url+"/receiver_img/"+image;
		
        document.getElementById("pod").style.display="block"; 
        document.getElementById("image").innerHTML='<img src="'+x+'" style="width:200px; height:200px; border:1px solid #000; " />';
        document.getElementById("image1").innerHTML='<img src="'+x1+'" style="width:200px; height:200px; border:1px solid #000;" />';
	  
        document.getElementById("rec_name").innerHTML='Name:'+name;
        document.getElementById("rec_phone").innerHTML='Phone:'+phone;

 }
 
 function show_resion(status,slip_no)
{	
var status;
var slip_no;


//alert(status);
//alert(slip_no);
if(status=='D')
{
	  document.getElementById("file_"+slip_no).style.display="block"; 
	  document.getElementById("area_"+slip_no).style.display="none"; 
}
else
{
	  document.getElementById("file_"+slip_no).style.display="none"; 
	  document.getElementById("area_"+slip_no).style.display="block"; 
	  document.getElementById("sig_img_"+slip_no).style.display="none"; 
}
} 


function payment_detail_close()
{	
	document.getElementById("payment_view").style.display="none";	
}


function payment_detail_open(booking_id)
{
	//alert(booking_id);
	
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=payment_detail_open&slip_no="+booking_id, false);   
		   doc.send(null);
	   }
	   if(doc.responseText!=0)
	    {		  document.getElementById("image").innerHTML=doc.responseText; 
}
		else
		{		  document.getElementById("image").innerHTML="N/A"; 
}
		
		  document.getElementById("payment_view").style.display="block"; 
		  //document.getElementById("image").innerHTML=doc.responseText; 
	  
 }
 
 function get_citylist_register(val)
 {
//alert(val);
		ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_citylist_register&country_id="+val, false);   
		   doc.send(null);
	   }	
 // alert(doc.responseText);
		document.getElementById('city').innerHTML=doc.responseText;
}
function warn()
{
	alert('Please Select Country First');
	
}

function show_time_cost(val)
{
	
	if(val=='1')
	{
		document.getElementById("type").value=val;
	document.getElementById("rate_lnk").style.color='black';
	document.getElementById("time_lnk").style.color='red';
	document.getElementById("time_show").style.display='block';
	document.getElementById("weight_show").style.display='none';
	}
	else
	{
		document.getElementById("type").value=val;
	document.getElementById("rate_lnk").style.color='red';
	document.getElementById("time_lnk").style.color='black';
	document.getElementById("weight_show").style.display='block';
	document.getElementById("time_show").style.display='none';
	
	}
}
function searching(val)
{
	
	if(val=='1')
	{
	document.getElementById("search").focus();
	document.getElementById("search").value='';

var input = document.getElementById ("search");
input.placeholder = "Enter Pincode Here";
	
	}
	else
	{
	document.getElementById("search").focus();
	document.getElementById("search").value='';
	var input = document.getElementById ("search");
input.placeholder = "Enter City Name Here";
	
	}
}

function show_hub_booking_data(val)
{
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=show_hub_booking_data&hub_id="+val, false);   
		   doc.send(null);
	   }
	  // alert('xxxxxx');
	document.getElementById('hub_data').innerHTML=doc.responseText;
}

function show_agent_booking_data(val)
{
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=show_agent_booking_data&agent_id="+val, false);   
		   doc.send(null);
	   }
	  // alert('xxxxxx');
	document.getElementById('agent_data').innerHTML=doc.responseText;
}

function show_messanher_today_data(val)
{
	ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=show_messanher_today_data&messenger_id="+val, false);   
		   doc.send(null);
	   }
	  // alert('xxxxxx');
	document.getElementById('messenger_data').innerHTML=doc.responseText;
}
function select_service_booking_admin()
{
	
	var total_distance=document.getElementById('distance_road').value;
	
	var origin=document.getElementById('sender_city').value;
	var destination_id=document.getElementById('rec_city_id').value;
	
	var add_number=document.getElementById("parcel_quantity_id").value;
	
	var parcel_weight_array=document.getElementById("parcel_weight_1").value;
				
		//alert(destination_id);
			ajax();
			if (doc){
				   doc.open("GET", "ajax.php?section=select_service_booking_admin&dest="+destination_id+"&origin="+origin+"&total_distance="+total_distance+"&parcel_weight_array="+parcel_weight_array+"&add_number="+add_number, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			//var arraylist=doc.responseText.split("**");
				
					document.getElementById("service").innerHTML=doc.responseText;	
					document.getElementById("service").style.backgroundColor="";
					document.getElementById("service").style.borderColor="";
					
					
					

					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}
function select_service_booking_admin_agent()
{
	//alert("dfghfhgfhfghgfhgfh");
	
	var total_distance=document.getElementById('distance_road').value;
	
		//alert(destination_id);
			ajax();
			if (doc){
				   doc.open("GET", "ajax.php?section=select_service_booking_admin_agent&total_distance="+total_distance, false);   
				   doc.send(null);
			}
			//alert(doc.responseText);
			
				
					document.getElementById("service").innerHTML=doc.responseText;	
					document.getElementById("service").style.backgroundColor="";
					document.getElementById("service").style.borderColor="";
					//document.getElementById("alert_email_password").innerHTML="Please Enter Correct Email & Password.";
}

	function get_extra_charge_price_per()
{
	
	var parcel_weight_array=[];
				for(i = 1; i <=add_number; i++)
						{
						parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
						}

ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=get_extra_charge_price_per&weight="+parcel_weight_array, false);   
		   doc.send(null);
	   }
	   alert(doc.responseText);
	 
	  //document.getElementById('city_list').innerHTML=doc.responseText;
}

function getPriceDetailsUsingServiceId_New(frm,service_id)
{
	 var total_distance=document.getElementById('distance_road').value;
	receiver_city=document.getElementById("rec_city_id").value;
	
	sender_city=document.getElementById("sender_city").value;
	//alert(receiver_city);
	//alert(sender_city);
	//var service_id=document.getElementById("sel_service_id").value;
	//alert('1');
	var customer_id=document.getElementById("customer_id").value;
	//alert('2');
	var agent_id=document.getElementById("agent_id").value;
	//alert('3');
	var parcel_quantity=document.getElementById("parcel_quantity_id").value;
	//alert('4');
	//alert('yyyyyyyyy');
	//alert(parcel_quantity);
	
	//alert(service_id);
	//var destination=frm.country.value
	
	//var product_unique_id=document.getElementById("nrd").value;
	//alert(product_unique_id);
	
				
		var product_unique_id=$('input[name=nrd]:checked').val();
	var service_id=document.getElementById('sel_service_id').value;
	var special_charge=document.getElementById('total_charge_price').value;
	
	//alert(product_unique_id);
	
	
	var	add_number=document.getElementById("parcel_quantity_id").value;
	//var	parcel_weight_new=document.getElementById("parcel_weight_new").value
	//alert(add_number);
//alert(parcel_weight_new);
		
		
		 //===================== create array in  for parcel values=============//
			if(product_unique_id!='AQYXZG')
					{
					var parcel_weight_array=[];
					var parcel_height_array=[];
					var parcel_width_array=[];
					var parcel_girth_array=[];
					
					for(i = 1; i <=add_number; i++)
					{
					parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
					parcel_height_array.push([document.getElementById('parcel_height_'+i).value]);
					parcel_width_array.push([document.getElementById('parcel_width_'+i).value]);
					parcel_girth_array.push([document.getElementById('parcel_girth_'+i).value]);
					
					
					}
					//===============================================================================//
					}
			else
				{
				var parcel_weight_array=[];
				for(i = 1; i <=add_number; i++)
						{
						parcel_weight_array.push([document.getElementById('parcel_weight_'+i).value]);
						}
				}
	
			//alert(weight);
	ajax();
					if (doc)
					{
					doc.open("GET", "ajax.php?section=PriceDetailsUsingServiceId_New&customer_id="+customer_id+"&service_id="+service_id+"&parcel_weight_array="+parcel_weight_array+"&parcel_height_array="+parcel_height_array+"&parcel_width_array="+parcel_width_array+"&parcel_girth_array="+parcel_girth_array+"&add_number="+add_number+"&product_unique_id="+product_unique_id+"&receiver_city="+receiver_city+"&sender_city="+sender_city+"&agent_id="+agent_id+"&total_distance="+total_distance+"&special_charge="+special_charge, false);   
					doc.send(null);
					}
		
	//alert(doc.responseText);
	var arraylist=doc.responseText.split("**");
	
	document.getElementById("service_charge_val").value=arraylist[0];
	document.getElementById("service_tax_val").value=arraylist[1];
	document.getElementById("show_total_amount_id").value=arraylist[3];
	document.getElementById("total_weight_id").value=arraylist[4];
	document.getElementById("total_weight").value=arraylist[5];
	document.getElementById("service_id").value=service_id;
	//document.getElementById('parcel_girth_1').focus();
	add_charges();
}

function fill_city_id(val)
{
	var val;
	document.getElementById('city_id_new').value=val;
}


function forgot_show()
{
	document.getElementById("forgotid").style.display="block";
		document.getElementById("login_window").style.display="none";

}

function forgot_hide()
{
	document.getElementById("forgotid").style.display="none";
	document.getElementById("login_window").style.display="block";
}

function valid_feedback_value(frm)
{	
	 var checkFocus=0;
				
	 if(frm.email.value=='')
	 {	 
		  document.getElementById("alert_email").innerHTML="<span class='alert'>Please Enter Email address.</span>";
		  if(checkFocus!=1)
		  {
			frm.email.focus();
			var checkFocus=1;
		  }
	 }
	 
	 if(frm.name.value=='')
	 {	 
		  document.getElementById("alert_name").innerHTML="<span class='alert'>Please Enter name.</span>";
		  if(checkFocus!=1)
		  {
			frm.name.focus();
			var checkFocus=1;
		  }
	 }
	  if(frm.message.value=='')
	 {	 
		  document.getElementById("alert_message").innerHTML="<span class='alert'>Please Enter  Message.</span>";
		  if(checkFocus!=1)
		  {
			frm.message.focus();
			var checkFocus=1;
		  }
	 }
	 if(checkFocus==1)
		return false;
	else
		return true;
}

	function deleterangeselect(id,fromzone,tozone)
{
	
	var txt;
var r = confirm("Are You Sure!");
if (r == false) {
    txt = "You pressed OK!";
} else {
  

	
	var id;
//alert(id);

var product_type=document.getElementById('product_type').value;
//alert(tozone);
//var service_id=document.getElementById('sel_service_id').value;
//var form_city=document.getElementById('city_data').value;
ajax();
		if(doc)
	   {
		   doc.open("GET", site_url+"/ajax.php?section=deleterangeselect&id="+id+"&from_zone="+fromzone+"&to_zone="+tozone+"&product_type="+product_type, false);   
		   doc.send(null);
	   }
	   }
	 //alert(doc.responseText);
	 get_zone_data1();
	  //document.getElementById('city_list').innerHTML=doc.responseText;
}


function forgot_frm(frm)
{	
	 var checkFocus=0;
				
	 if(frm.email.value=='')
	 {	 
		  document.getElementById("alert_email").innerHTML="<span class='alert'>Please Enter Email address.</span>";
		  if(checkFocus!=1)
		  {
			frm.email.focus();
			var checkFocus=1;
		  }
	 }
	 
	 
	/* else
	 {
		  var frmEmail1 =frm.email.value.toLowerCase();	
		  var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("alert_email").innerHTML="<span class='alert'>Please enter valid email address.</span>";
		  if(checkFocus!=1)
			frm.email.focus();	
			var checkFocus=1;
		}
		else
		{ 
			ajax();

			if (doc)
			{ 
			  doc.open("GET", "ajax.php?section=check_email_forgot&email="+frm.email.value, false);   
			  doc.send(null);
			}
			//alert(doc.responseText);//return false;
			
		    if(doc.responseText==1)
		    {	
				document.getElementById("alert_email").innerHTML="Email dosen't Exists";
				frm.email.focus();
				var	 checkFocus=1;
		    }
		    else
				document.getElementById("alert_email").innerHTML="your password hasbeen Reset.<br />Please check your Email Id.";
		}
		
	 }
				 */
	if(checkFocus==1)
		return false;
	else
		return true;
}	
